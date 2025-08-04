// function walkDog (){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const walked = true;
//             if (walked){
//                 resolve("Walk the dog");
//             }
//             else {
//                 reject("Dog not walked");
//             }
//         }, 2000);
//     })
// }
// function cleanRoom (){
//     return new Promise((resolve, reject) => {
//             setTimeout(()=>{

//         resolve("Clean the room");
//     }, 2000);
//     })
// }
// function takeOutTrash (){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Take out the trash");
//         }, 2000);
//     })
// }
// // walkDog().then(result=>{console.log(result); return cleanRoom();})
// //             .then(result=>{console.log(result); return takeOutTrash();})
// //             .then(result=>{console.log(result);})
// //             .catch(error =>{console.error(error);})
// async function doChores() {
//     try{
//         const dogResult = await walkDog();
//         console.log(dogResult);
//         const roomResult = await cleanRoom();
//         console.log(roomResult);
//         const trashResult = await takeOutTrash();
//         console.log(trashResult);
//     }
//     catch (error){
//         console.error(error);
//     }
// }
// doChores()

async function getBoredActivity () {
    try {
        const response = await fetch("https://bored-api.appbrewery.com/random");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data)
        console.log("Bored? Try this activity: " + data.activity);
        return data.activity;
    } catch (error) {
        console.error("Error fetching activity:", error);
    }
}

getBoredActivity();
