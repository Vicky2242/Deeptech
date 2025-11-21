function fetchRestaurant(){
    return new Promise((resolve, reject)=>{
        console.log("Fetching Restaurants...");

        setTimeout(()=>{
            const serverOk = true;

            if(serverOk){
                resolve(["KFC"," Dominos", "mcDonalds"]);
            }else{
                reject("Server Error! Try after some time..");
            }
        }, 2000)
    });
}

fetchRestaurant()
.then((restaurant)=>{
    console.log("Restaurants Loaded:", restaurant);
})
.catch((error)=>{
    console.log("Error:", error);
});