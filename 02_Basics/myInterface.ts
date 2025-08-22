interface helloUser {
    readonly dbID: number;
    email: string;
    userID: number;
    googleID?: string;
   // startTrail: ()=> string
   startTrail(): string
   getCoupon(couponname: string, value: number): number
}

const arpitaa: helloUser = { dbID: 383743, email: "arpitaistic@gmail.com", userID: 22 ;
startTrail: ()=>{
    return "Trail Started!"
}, getCoupon:(name: "Arpita10", off: 10)=>{
    return 10
}
};
