function greeter(g:string){
    console.log(`Welcome to TypeScript ${g}`)
}
let n = 'Pratima Roy'
greeter(n)
// implicit numerical data
let y=-10
y=6
//explicit boolean data type
let isCorrect:boolean
isCorrect =true
//explicit data type in an array
let colors:string[] = ['red', 'yellow', 'blue']
let nums:Array<number> =[1,5,-3,4,10]

//combine data type
let dtype:[number, string, boolean] = [3,'Martha', false]

//Data type for classes
let m:string = 'Peter'
let mLen = m.length
console.log(`${m} has ${mLen} letters.`)

//casting in an implicit data type
let firstName = 'Martha'
let lenFirstname = firstName.length
console.log(`${firstName} had ${lenFirstname} letters.`)

//Function in typescript
//return value type
function getHour():number{
    return new Date().getHours()
}
console.log('It is' +getHour())

function greeting(){
    console.log('Welcome to Angular data type')
    
}

function getSum(num1:number, num2:number, name:string):string{
    name= name + `! The sum is` + (num1+num2)
    return name
}

console.log(getSum(6,10,'Martha'))

//three dots notation
function getAverage(...n:number[]):number{
    let total = 0
    let count = 0
    let avg = 0
    for(let i=0; i<n.length; i++){
        total += n[i]
        count ++
    }
    avg = total/count
    return avg
}

//classes in ts
class Car{
    brand:string;
    model:string;
    yearManufacture: number;
    constructor(brand:string, model:string, yearManufacture:number){
        this.brand = brand
        this.model = model
        this.yearManufacture = yearManufacture
    }
    year(){
        console.log(this.yearManufacture)
    }
}

//assign values to each class properties
let car1 = new Car('Tesla','S', 2022)

//Inheritance TS
//define classes
class Person{
    name:string = 'Peter Pan'
    save(){
        console.log('Registration Successful!' + this.name)
    }
}
class Employee extends Person{
    sale(){
        console.log('Salary paid!')
    }
}
class Customer extends Person{
    sale(){
        console.log('x items sold')
    }
}
//regular class
let person1 = new Person
let customer1 =new Customer
person1.save()
customer1.sale()
//inheritance class
let employee1 = new Employee
employee1.save()
employee1.sale()

