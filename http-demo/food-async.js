function  fetchRestaurants(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const serverOk = true;

            if(serverOk){
                resolve(["KFC"," Dominos", "mcDonalds"]);
            }else{
                reject("Failed to load restaurants");
            }
        }, 1000)
    });
}
function  fetchMenu(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const serverOk = true;

            if(serverOk){
                resolve(["Combo","Pizza", "Shawarma"]);
            }else{
                reject("Failed to load Menu");
            }
       
        }, 1000)
    });
}
function  fetchTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const serverOk = true;

            if(serverOk){
                 resolve("Delivery in 30 minutes! Track your Order here");
            }else{
                reject("Failed to load delivery Tract of your order..");
            }
        }, 1000)
    });
}

async function foodApp(){
    try{
    console.log("Fetching Restaurants...");
    const restaurants = await fetchRestaurants();
    console.log("Restaurants: ", restaurants);

     console.log("Fetching Menu...");
    const menu = await fetchMenu();
    console.log("Menu: ", menu);

     console.log("Fetching Restaurants...");
    const time = await fetchTime();
    console.log(time);

    console.log("All the data loaded successfully!");

    }catch(error){
        console.log("Something went wrong", error)
    }
   
}

foodApp();