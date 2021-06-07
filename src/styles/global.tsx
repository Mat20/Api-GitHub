import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --white: #fff;
    --red: #ff1a1a;
    --purple: #ff80ff;
    --background: #F2F3F5;
    --blue-ciano: #00cccc;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red-dark: #e60000;
    --green: #4CD62B;
    --green-lity: #00ff00;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
    --red-lity: #E83F5B;
}

@media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media(max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    color: var(--text);
    font: 400 1rem "JetBrains", monospace;
}

img {
    position: relative;
    top: -135px;
    left: 65px;
    width: 100px;
    height: 100px;
}

.containerInfos {
    display: none;
    padding: 30px;
    position: absolute;
    width: 600px;
    height: 160px;
    top: 70%;
    left: 650px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, .7);
}

.containerInfos p {
    font-family: monospace;
}

.containerInfos span {
    font-family: 'JetBrains', monospace;
}

.containerInfos .img {
    position: absolute;
    top: 100%;
    left: 60%;
}

.containerInput {
    width: 320px;
    height: 290px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #fff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0);
    transform: translate(-50%, -50%);
    padding: 70px 30px;
}

.fa-user {
    position: relative;
    top: -27%;
    left: -4%;
}

.containerInput p {
    position: relative;
    text-align: center;
    top: -85%;
}

.containerInput input {
    position: relative;
    top: -55%;
    left: 30px;
    width: 200px;
    height: 25px;
    text-align: center;
    border-radius: 4px;
}

.containerInput button {
    position: relative;
    top: -20%;
    left: 10px;
    width: 240px;
    height: 50px;
    border-radius: 30px;
    outline: none;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .3s;
}

.containerInput button:hover {
    transition: .3s;
    background: rgba(0, 0, 0, 0.865);
    color: #fff;
    border-color: #fff;
}
`