interface helloUser {
    readonly dbID: number;
    email: string;
    userID: number;
    googleID?: string;
   // startTrail: ()=> string
   startTrail(): string
   getCoupon(couponname: string, value: number): number
  
}
interface helloUser{ //Reopening of the interface
     githubToken: string
}
interface AdminDetails extends helloUser {
    role: "admin" | "ta"| "learner"
}
const arpitaa: helloUser = { dbID: 383743, email: "arpitaistic@gmail.com", userID: 22, 
    githubToken: "Github",
startTrail: ()=>{
    return "Trail Started!"
}, getCoupon:(name: "Arpita10", off: 10)=>{
    return 10
}
};
