class helloNewUser {
    name: string;
    public email: string;
    private readonly city: string = "Bengaluru"; //Readonly property, cannot be changed
    constructor (name: string, email: string)
{
    this.name = name;
    this.email = email;
}}
const sneha = new helloNewUser ("sneha", "sneha@gmail.com")