let score: string | number | boolean = 33;
//This variable can hold a string, number, or boolean value
score = 44
score ="44"
type UserDetails = {
    name: string;
    id: number;
    isActive: boolean;
}
type AdminDetails = {
    name: string;
    id: number;
    role: string;
}
let Arpita: UserDetails | AdminDetails = {
    name: "Arpita",
    id: 1,
    isActive: true
}
Arpita = {name: "Ar", id: 332}

function getDbId(id: number | string){
    //Making some API calls
    //console.log(`DB Id is ${id}`)
    if (typeof id === "string"){
        id.toLowerCase()
    }
   
}
getDbId(3)
getDbId("3")


//Arrays

const data1 : number [] = [1, 2, 3, 4, 5]
const data2 : string [] = ["1", "2", "3", "4", "5"]
const data3 : (number|string|boolean)[] = [1, "2", 3, "4", true]

let searAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
//searAllotment = "crew"
