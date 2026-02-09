// // Function 
// const getdata = (dataId, getNextData) =>{
//     setTimeout( () => {
//         console.log("Data", dataId);
//         if(getNextData){
//             getNextData(dataId);
//         }
//     },3000);
// }
// // Callback Hell
// console.log("Getting Data 1....");
// getdata(1, () =>{
//     console.log("Getting Data 2....");
//     getdata(2, () =>{
//         console.log("Getting Data 3....");
//         getdata(3, () =>{
//             console.log("Getting Data 4....");
//             getdata(4)
//         });
//     });
// });

// // ASync Await
// async function  getdata(dataId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data ",dataId);
//             if(dataId <= 5){
//                 resolve("Sucess");
//             }else{
//                 reject(new Error("Data <=5 avalibe only !"));
//             }
//         },2000);
//     });
// }
// async function run() {
//     try{
//         console.log("Getting Data 1....");
//         await getdata(1);
//         console.log("Getting Data 2....");
//         await getdata(2);
//         console.log("Getting Data 3....");
//         await getdata(3);
//         console.log("Getting Data 4....");
//         await getdata(4); 
//         console.log("Getting Data 5....");
//         await getdata(5);
//         console.log("Getting Data 6....");
//         await getdata(6);
//     }
//     catch(err){
//         console.error(err.message);
//     }
// }
// run();
let URL = "https://catfact.ninja/fact";
async function getFact(URL) {
    try{
        let respone = await fetch(URL);
        let data = await respone.json();
        console.log(data.fact);
    }catch(err){
        console.error("Error : ", err)
    }

}

getFact(URL);