class helloNewUser {
    protected _courseCount: 1
    name: string;
    public email: string;
    private readonly city: string = "Bengaluru"; //Readonly property, cannot be changed
    constructor (name: string, email: string)
{
    this.name = name;
    this.email = email;
}
get getAppleEmail():string {
  return `apple${this.email}`
}
get courseCount(): number{
    return this._courseCount
}
set courseCount (courseNum){ //There is no return type for setter!
    if (courseNum <= 1){
        throw new Error("Course count should be more than 1")
    }
}
}
class subUser extends helloNewUser{
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4 //Protected property can be changed in child class
    }
}
const sneha = new helloNewUser ("sneha", "sneha@gmail.com")