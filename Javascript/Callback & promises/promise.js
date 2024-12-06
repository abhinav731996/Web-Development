console.log("This is a promise function");

let prom1 =  new Promise((resolve, reject) => { 
    let a = Math.random();
    if (a < 0.5) {
        reject("no random no. was not sportting you")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done");
            resolve("Abhi..")
        }, 3000);
    }
 })

let prom2 =  new Promise((resolve, reject) => { 
    let a = Math.random();
    if (a < 0.5) {
        reject("no random no. was not sportting you 2")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done2");
            resolve("Abhi..")
        }, 1000);
    }
 })
 
 let prom3 = Promise.race([prom1, prom2])
 prom3.then ((a) => {
  console.log(a);  
 }).catch((err) => {
    console.log(err);
 }
 )
 