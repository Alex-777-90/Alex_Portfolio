window.addEventListener("load",()=>{

const formTheme = document.querySelector("#formTheme")
const whiteColor = document.querySelector("#white")
const greenColor = document.querySelector("#green")



formTheme.addEventListener("click",(e) => {

    const body = document.querySelector("body");
    const divTheme = document.querySelector(".divTheme");
    const greetings = document.querySelector(".boas-vindas");
    const greetingsP = document.querySelector(".boas-vindas p");
    const text_about = document.querySelectorAll(".text-sobre p, .text-sobre span, .play-video p");
    const videoPortfolio = document.querySelector(".video");
    const rodape = document.querySelector(".rodape");
    const contato = document.querySelector(".contato");
    const contatoP = document.querySelectorAll(".contact-infos p")
    const icons_tech = document.querySelector(".icons-tech");

 
    if(whiteColor.checked && !greenColor.checked ){

        body.style.backgroundColor = "#E6EBEB";
        divTheme.style.backgroundColor="#D1E8D8";
        divTheme.style.color="green";
        greetings.style.backgroundColor="#D1E8D8";
        greetingsP.style.color="green";
        text_about.forEach((text)=>{
            text.style.color="green";
        })
        videoPortfolio.style.backgroundColor = "#D1E8D8";
        // rodape.style.backgroundColor = "white";
        contato.style.backgroundColor = "white";
        contatoP.forEach((text)=>{
            text.style.color="green";
        })
        icons_tech.style.backgroundColor = "#B6C2BA";

    }else{

        body.style.backgroundColor = ""
        divTheme.style.backgroundColor="";
        divTheme.style.color="";
        greetings.style.backgroundColor="";
        videoPortfolio.style.backgroundColor = "";
        // rodape.style.backgroundColor = "";
        contato.style.backgroundColor = "";
        icons_tech.style.backgroundColor = "";
        greetingsP.style.color="";
        text_about.forEach((text)=>{
            text.style.color="";
        })
        contatoP.forEach((text)=>{
            text.style.color="";
        })
    }

});

});

document.addEventListener("DOMContentLoaded", () => {
    const translatableElements = document.querySelectorAll(".translatable");

    function setLanguage(lang) {
      translatableElements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) el.innerText = translation;
      });
    }

    // Clique nas bandeiras
    document.querySelector('img[alt="bandeira Brasil"]').addEventListener("click", () => setLanguage("pt"));
    document.querySelector('img[alt="bandeira USA"]').addEventListener("click", () => setLanguage("en"));
  });