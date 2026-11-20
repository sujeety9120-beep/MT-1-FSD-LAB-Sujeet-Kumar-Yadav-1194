
const get_orders = (x) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Orders loaded");
            res("Mobile, Laptop, Watch");
        }, 1000);
    });
}

function login() {
    return new Promise((r) => {
        setTimeout(() => {
            console.log("Login successful");
            r(1);
        }, 1000);
    });
}

const profile = (uid) => new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Profile loaded");
        resolve("Sujeet, Age 20");
    }, 1000);
});

async function start() {
    try {
        let userId = await login();
       
        let p = await profile(userId);
        let o = await get_orders(userId);

        console.log(p);
        console.log(o);
    } catch(err) {
        console.log("err:", err);
    }
}

start();