```css
body {
    background-color: rgb(78, 78, 87);
    color: azure;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
}

.container {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    background-color: rgb(117, 117, 125);
    padding: 20px;
    border-radius: 10px;
}

h1 {
    font: 2em;
    margin-bottom: 1em;
}

h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
}

#countdown {
    display: flex;
    justify-content: space-around;
    gap: 10px;
}

#countdown div {
    background: #dad7d7;
    padding: 30px;
    border-radius: 5px;
    color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.progress-container {
    background: white;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    overflow: hidden;
}

#progress-bar {
    background: rgb(139, 197, 52);
    width: 0%;
    height: 100%;
    transition: width 1s ease-in-out;
    border-radius: 5px;
}

span {
    font-size: xx-large;
}
```
