function makeTea(){
    return new Promise((resolve, reject)=>{
        console.log("Making a Tea...");

        setTimeout(()=>{
            let intAvailable = false;

            if(intAvailable){
                resolve("Tea is Ready!");
            }else{
                reject("No ingredients, Tea not available");
            }
        },1500)
    });
}
console.log("Before calling a make Tea()");

makeTea()
.then(message=>{
    console.log(message);
})
.catch(error=>{
    console.log(error);
})

console.log("After calling a Maketea")