let para = document.querySelector("p");
let genrateBtn = document.querySelector("#genrateotp");
let body = document.querySelector("body");
let themeBtn = document.querySelector("#theme");
genrateBtn.addEventListener("click", () => {
    let OTP = Math.floor(Math.random()* 9000) + 1000;
    para.innerText = `Your OTP is : ${OTP}`;
})
let currentTheme = "light";
themeBtn.addEventListener("click", () =>{
    if(currentTheme == "light"){
        body.setAttribute("class", "dark");
        currentTheme = "dark";
    }else{
        body.setAttribute("class", "light");
        currentTheme = "light";
    }
    
})