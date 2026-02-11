let inputName = document.querySelector("#inputName");
let seachBtn = document.querySelector("#SeachBtn");
let container = document.querySelector(".container");
let getUsersBtn = document.querySelector("#getUsersBtn");
let allUsers = [];


seachBtn.addEventListener("click", () =>{
    let userName = inputName.value.trim();
    console.log(userName);
    inputName.value = "";
});
let URL = "https://jsonplaceholder.typicode.com/users";
async function getUsers(){
    let response = await fetch(URL);
    let users = await response.json();
    allUsers = users;
    console.log(users);
    loadCards(users);
}
const loadCards = (users) =>{
    container.innerHTML = "";
    for(let user of users){
        let myCard = document.createElement("ul");
        container.appendChild(myCard);
        let li0 = document.createElement("li");
        li0.innerText = `ID : ${user.id}`;
        myCard.appendChild(li0);
        let li1 = document.createElement("li");
        li1.innerText = `Name : ${user.name}`
        myCard.appendChild(li1);
        let li2 = document.createElement("li");
        li2.innerText = `Email : ${user.email}`
        myCard.appendChild(li2);
        let li3 = document.createElement("li");
        li3.innerText = `Phone :${user.phone}`
        myCard.appendChild(li3);
    }

}

getUsersBtn.addEventListener("click", () =>{
    getUsers();
})