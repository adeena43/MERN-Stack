document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");

    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty!");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        if (!regex.test(username)) {
            alert("Invalid username! Use only letters, numbers, underscores, or dashes.");
            return false;
        }
        return true;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to fetch user details.");
            }

            const data = await response.json();
            console.log("User Data:", data);

            updateProgress(data);

        } catch (error) {
            alert("Error: " + error.message);
            console.error(error);
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(data) {
        const easySolved = data.easySolved || 0;
        const totalEasy = data.totalEasy || 1;

        const mediumSolved = data.mediumSolved || 0;
        const totalMedium = data.totalMedium || 1;

        const hardSolved = data.hardSolved || 0;
        const totalHard = data.totalHard || 1;

        const easyPercent = (easySolved / totalEasy) * 100;
        const mediumPercent = (mediumSolved / totalMedium) * 100;
        const hardPercent = (hardSolved / totalHard) * 100;

        easyLabel.innerHTML = `${easySolved}/${totalEasy}<br>Easy`;
        mediumLabel.innerHTML = `${mediumSolved}/${totalMedium}<br>Medium`;
        hardLabel.innerHTML = `${hardSolved}/${totalHard}<br>Hard`;

        easyProgressCircle.style.setProperty('--progress-degree', `${easyPercent}%`);
        mediumProgressCircle.style.setProperty('--progress-degree', `${mediumPercent}%`);
        hardProgressCircle.style.setProperty('--progress-degree', `${hardPercent}%`);

        // Manually create cardData from available fields
        const cardData = [{
                difficulty: "Easy",
                totalSubmissions: easySolved
            },
            {
                difficulty: "Medium",
                totalSubmissions: mediumSolved
            },
            {
                difficulty: "Hard",
                totalSubmissions: hardSolved
            }
        ];

        // Render cards
        cardStatsContainer.innerHTML = cardData.map(item => `
            <div class="card">
                <h3>${item.difficulty}</h3>
                <p>${item.totalSubmissions} Problems Solved</p>
            </div>
        `).join("");
    }

    searchButton.addEventListener("click", function() {
        const username = usernameInput.value;
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});
