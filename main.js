function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  
window.onload = async function() {
    let home = document.getElementById("Home");
    let text = document.createElement("p");
    let input = document.createElement("input");


    let display = ["Hi, 👋", "I'm Arterio Rodrigues", "/n","/n", "I'm a mentor, and motivated computer science major with experience working with C++, Python, Javascript, React and Bash languages and ASM. Knowledgable on full stack development with interest in front-end development (Based in React)." , 
                    "/n", "do you want my resume:(y/n)"];
    let delay_timers = [20]
    
    input.classList.add("input");

    for(let i = 0; i < display.length; i++){
        text.classList.add("code");
        text.classList.add("under");

        text.style.backgroundColor = "#44475a";
        text.style.color = "#ff5555";

        for(let j = 0; j < display[i].length; j++){
          
            home.appendChild(text);
            await delay(delay_timers[0]);
            text.innerHTML += display[i][j];

            if(text.innerHTML == '/n')
                text.style.color = "#50fa7b";

            if(text.innerHTML.endsWith('(y/n)')){
                text.append(input)
            }
            
        }
        text.style.backgroundColor = "#282a36";
        

        if(text.innerHTML != '/n')
            text.style.color = "#8be9fd";
        text.classList.remove("under");
        text = document.createElement("p");
    }

   
  
}
