interface User{
    name:string;
    age?:number;
    id:number;
    email:string;
}
let user:User={name:"john",id:1,email:''}
interface Employees extends User{
    salary:number;
}
let employee:Employees ={ name:"john",id:1,email:'',salary:1000}
interface Login {
    Login():User;
}
let [user1,user2,...restUsers]:User[]=[
    {name:"john",id:1,email:''},
    {name:"john1",id:2,email:''},
    {name:"john2",id:3,email:''},
    {name:"john3",id:4,email:''},
];
console.log(user1);
console.log(user2);
console.log(restUsers);
// @component({})
// class component {
//     constructor(public name:string){

//     } 
// } 