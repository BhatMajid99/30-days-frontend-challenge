let userNamesLis = ["Mar", "Dar", "Car", "War"];
let message = document.querySelector("#message");
let enterBtn = document.querySelector("#enter");
let userInput = document.querySelector("#userInput");

enterBtn.addEventListener("click", () => {
    let userName = userInput.value;
    if(userName.trim()!=""){
        checkUser(userNamesLis, userName);
        userInput.value = "";
    }else{
        message.innerText = "Can't set empty Username"
        userInput.value = "";
    }
});
const checkUser = (userNamesLis , userName) => {
    for(let user of userNamesLis){
        if (userName === user ){
            return message.innerText = "UserName already exists, Try Another";
        }
    }message.innerText = "UserName Created sucessfully";
    userNamesLis.push(userName);
}