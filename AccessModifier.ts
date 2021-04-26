class Employee{

    /* Private access modifier can access property only within that class*/
       private id: number;

    /*Using public access modifier we can  access property anywhere like 
    1) When creating objects or creating instance of a class we can access the property
    2) When taking inheritance of class we can access the property
    3) within in a class 
    */
    public name: string;

    /*Using Protected access modifier we can access property.
    1)  When taking inheritance of class we can access the property
    2) within that class where it is declared
    */

    protected designation: string;
    
    constructor(name: string,designation:string){
        this.name = name;
        this.designation = designation;
        this.id = 40014124;
      
    }

    compute(){
        console.log("Hello " + this.name + "Good Morning" + " My Id is" + this.id + " & my Designation is" + this.designation);
    }
}

class Company extends Employee{

    constructor(name: string,designation:string){
        super(name,designation);
    }

    Department(){
        console.log("My name is " + this.name + this.designation);//In this case we can access public and protected but not id which is of type private access modifier
    }
}

const st1 = new Company('Roushan',"Developer");


let newName = st1.name;
st1.Department();
st1.compute();