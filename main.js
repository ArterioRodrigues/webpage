function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  
window.onload = async function() {
    let home = document.getElementById("Home");
    let text = document.createElement("p");
    let input = document.createElement("input");


    let display = ["Hi, 👋", "I'm Arterio Rodrigues", "I'm a mentor, and motivated computer science major with experience working with C++, Python, Javascript,  React and Bash languages and ASM. Knowledgable on full stack development with interest in front-end development (Based in React)." , 
                    " ", "SKILLS/u"];
    let delay_timers = [0]
    
    input.classList.add("input");

    for(let i = 0; i < display.length; i++){
        text.classList.add("code");
        text.classList.add("under");

        text.style.backgroundColor = "#44475a";
        text.style.color = "#ff5555";

        for(let j = 0; j < display[i].length; j++){
            text.innerHTML += display[i][j];
            
            if(text.innerHTML == '/n')
                text.style.color = "#50fa7b";

            if(text.innerHTML.endsWith('(y/n)'))
                text.append(input);
            
            if(text.innerHTML.endsWith("/u")){
                text.style.backgroundColor =  "#ff79c6" ;
                text.style.display = "inline-block";
                text.style.color = "#f8f8f2";
                text.style.padding = "5px 20px";
                text.style.marginTop = "20px";
            }

            await delay(delay_timers[0]);
            home.appendChild(text);
           
        }

        if(!text.innerHTML.endsWith("/u"))
            text.style.backgroundColor = "#282a36";
        
    

        if(text.innerHTML != '/n' && !text.innerHTML.endsWith("/u"))
            text.style.color = "#8be9fd";
        
        text.classList.remove("under");
        text = document.createElement("p");
    }

   
  
}
