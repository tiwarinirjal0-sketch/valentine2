const no = document.querySelector("#no");
const yesno = document.querySelector(".yesno")
const yes = document.querySelector("#yes")
const img = document.querySelector(".img")
const img2= document.querySelector(".img2")

let nox = no.offsetLeft;
let noy = no.offsetTop;

let noMessage = ["Are you sure? 😏",
                 "No, is never an option",
                "Think again 💭", 
                "Give Me a chance ❤️",
                "Me = Green flag😭",
                "I was hoping youd say yes 😢",
                "Am I really that bad? 😔💔",
                "Dont you like me even a little? 💕"
                ]
let i=0;

no.addEventListener("mouseenter", (e) =>{
    // const container = document.querySelector(".container")
    // let aftertext = document.createElement("div")
    const box = yesno.getBoundingClientRect();
    const maxX = box.width - no.offsetWidth;
    const maxY = box.height - no.offsetHeight;
    const randomx = Math.random() * maxX;
    const randomy = Math.random()* maxY;

    no.style.left = randomx + "px";
    no.style.top = randomy +"px";

    if(i>7){
       i=0;
    }

        no.textContent = noMessage[i]
    
     i++;

    no.style.width = "auto"
    
    
})

yes.addEventListener("click", (e) =>{
    const container = document.querySelector(".container")
    let message = document.createElement("div");
    message.textContent = "Wow Congratulations! you and Gaurav are a match now"
    message.classList.add("message")
    container.appendChild(message)

    container.style.background = " linear-gradient(135deg, #a0c4ff, #ffc0cb, #f4a6a6, #d8a1c4)"

    // container.style.background = "black";
    


    // imgStyle = img.style;
    // imgStyle.width = "180px"
    // imgStyle.height= "300px"
    // imgStyle.backgroundColor = "white"
    // imgStyle.position = "absolute";
    // imgStyle.top = "-20%";
    // imgStyle.left = "30%";
    // imgStyle.transform = "translate(-50%,-50%)"
    // imgStyle.backgroundImage = "url('first.webp')"
    // imgStyle.backgroundSize = "contain"
    // imgStyle.backgroundPosition = "center"
    // imgStyle.backgroundRepeat = "no-repeat"
    // imgStyle.rotate = "360deg"
    document.querySelector(".text").remove()
    yesno.remove()
    // imgStyle.rotate = "-90deg"
    // imgStyle.opacity = 0; // start invisible
    // imgStyle.transition = "opacity 6s ease, transform 2s ease";

    // imgStyle2 = img2.style;
    // imgStyle2.width = "180px"
    // imgStyle2.height= "300px"
    // imgStyle2.backgroundColor = "white"
    // imgStyle2.position = "absolute";
    // imgStyle2.top = "50%";
    // imgStyle2.left = "80%";
    // imgStyle2.transform = "translate(-50%,-50%)"
    
    // imgStyle2.backgroundImage = "url('second.webp')"
    // imgStyle2.backgroundSize = "contain"
    // imgStyle2.backgroundPosition = "center"
    // imgStyle2.backgroundRepeat = "no-repeat"
    // // imgStyle.rotate = "360deg"
    // // document.querySelector(".text").remove()
    // // yesno.remove()
    // imgStyle2.opacity = 0; // start invisible
    // imgStyle2.transition = "opacity 5s ease, transform 5s ease";
    messageStyle = message.style;

    messageStyle.position = "absolute"
    messageStyle.left = "0%"
    messageStyle.top = "40%"
    messageStyle.color = "pink"
    messageStyle.fontFamily = "'Playfair Display', serif"
    messageStyle.fontSize = "bolder"
    
    messageStyle.fontSize = "23px"
    messageStyle.opacity = 0; // start invisible
    messageStyle.transition = "opacity 4s ease";

    let message2 = document.createElement("div");
    message2.textContent = "You have a good choice in men he is a good guy"
    message2.classList.add("message2")
    container.appendChild(message2)
     
    messageStyle2 = message2.style;

    messageStyle2.position = "absolute"
    messageStyle2.fontSize = "bolder"
    messageStyle2.left = "20%"
    messageStyle2.top = "70%"
    messageStyle2.color = "pink"
    // messageStyle2.rotate = "270deg"
    messageStyle2.fontFamily = "Georgia, cursive"
    messageStyle2.fontSize = "17px"
    messageStyle2.opacity = 0; // start invisible
    messageStyle2.transition = "opacity 10s ease";
    
    container.style.backgroundImage = "url('photo.png')"
    container.opacity = 0;
    container.transition = "opacity 10s ease"
    container.style.backgroundSize = "cover"
    container.style.backgroundPosition= "center"
    container.style.backgroundRepeat = "no-repeat"
    
    setTimeout(() => {
        container.style.backgroundImage = "url('photo.png')" 
        container.opacity = 1;
        // imgStyle.opacity = 1;
        // imgStyle2.opacity = 1;
        messageStyle.opacity = 1;
        messageStyle2.opacity = 1;
    }, 100); // 100ms delay to ensure CSS transition triggers
});

    
    
    
    




// no.onmouseenter = ()=>{
//     no.style.left = Math.random() * 200 + "px";
//     no.style.top  = Math.random() * 150 + "px";
// }