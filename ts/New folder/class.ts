class Employee {
    #id:number;
   protected name:string;
    address:string
    constructor(id:number,name:string,address:string){
        this.address=address;
        this.#id=id;
        this.name=name;  
    }
    getNameWithAddress():string{
        return `${this.name} stays at ${this.address}`;
    }

}
let john=new Employee(1,"john","karur");
class Manager extends Employee{
    constructor(id:number,name:string,address:string){
        super(id,name,address);
    }

  override getNameWithAddress(): string {
      return `${this.name} is a manager at ${this.address}`

  } 
}
let address=john.getNameWithAddress();
let mike =new Manager(2,"mike","cherise drive");
console.log(mike.getNameWithAddress());
// let john=new Employee();
// john.id=1;
// john.name="john";
// john.address="karur";
// console.log(john);
console.log(address);
