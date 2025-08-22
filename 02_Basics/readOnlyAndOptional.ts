type newUser = {
    readonly _id: string; //Readonly property, cannot be changed
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails: Number
}

let myUser: newUser = {
    _id: "12345",
    name: "Arpita",
    email: "arpitaistic@gmailcom",
    isActive: true,
    creditCardDetails: 1234567890
}
myUser.email = "a@gmail.com" //This is allowed
type cardNumber = {
    cardNumber: string;
}
type cardDate ={
    cardDate: string;
}
type cardDetails = cardNumber & cardDate & {
    cardCVV: number;
}