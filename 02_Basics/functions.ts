function addTwo(num: number){
     return num + 2;
}

//String function
function toUpper(val: string){
    return val.toUpperCase();
}
export {}

function signUpUser(name: string, email: string, isPaid: boolean){

}

//Arrow Function
const myFunc = (name: string): string => {
    return "Hello" + name;
}

function getValue(myVal: number){
    if (myVal > 5){
        return true;
    }
    return "200 OK";
}

const getHello = (s: string): string => {
    return ""
}

const heros = ["Virat", "Rohit", "Dhoni"];
heros.map (hero => {
     return `Hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}
function handleError(errmsg: string): never{
    throw new Error (errmsg);
}