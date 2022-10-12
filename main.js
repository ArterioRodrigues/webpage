function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  
window.onload = async function() {
    let home = document.getElementById("Home");
    let text = document.createElement("p");

    let display = ["HI, 👋", "I'm Arterio Rodrigues"];

    for(let i = 0; i < display.length; i++){
        text.classList.add("code");
        text.classList.add("under");

        for(let j = 0; j < display[i].length; j++){
          
            home.appendChild(text);
            await delay(1000);
            text.innerHTML += display[i][j];
        }
        text.classList.remove("under");
        text = document.createElement("p");
       
    }

    // opacity: 0%;
    // animation: blinking 1s infinite  forwards;
};
