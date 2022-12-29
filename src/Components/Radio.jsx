
// import { Key } from "@mui/icons-material";
import React from "react";

const Pratice = () => {
    // filter e boolen use korle null undefine etc removed hoye jai 
    const numbers = [2,5,8,10,20,-2, null ,'sum',false, undefined ]
    const result = numbers.filter((currentValue) => {
        if(currentValue !== null && currentValue !== undefined && currentValue > 0 && currentValue !== false)
            return currentValue
    });
    console.log(`given array :` + numbers);
    console.log(`result is `+ result);

    // array splice 
    
//    const numbers = [1,2,3,4,5]
//    const res = numbers.splice(1,2,10,11,12,13)

//    console.log(`this is splice array is ${numbers}`)// ay khane pabo splice korar porer function ta 
//    console.log(`this is the removed element are : ${res}`)// ay khane pabo ki ki bad dice agola 

//    const aa = [20,33,44, 'sumon ','fakir',2022]
//    console.log(`the given aa array elements is ${aa}`)
//    const aaa = aa.splice(3,2,'splice1','splice2','done',100)
//    console.log(`this is new aa array elements is ${aa}`);
//    console.log(`this is removed array element ofr aa ${aaa}`);

//    const aaaa = [20,1,44,55]
//    console.log(`the main array is ${aaaa}`);
//    const x = aaaa.splice(-1,2,200)
//    console.log(`removed element is ${x}`);
//    console.log(`splice is then array elements is ${aaaa}`);

//     array concat 
// const sub= ['bangla','english','math']
// const sub1 =['physices','chemisty','database']
// const sub2 = ['ai','datamaining','algo']

// const suball= sub.concat(sub1);
// console.log(suball);
// console.log(`all added element are : ${suball}`);

// const suballl = sub.concat(sub1,sub2)
// console.log(`3sub added all elements are: ${suballl}`);

// array push 

// const numm = [1,2,3,4,5]
// numm.push(6,7,8)
// const ress = numm.push(22,44,55)// etar value ta astece na 
// console.log(numm);// num=[1,2,3,4,5,6,7,8]
// console.log(ress);

// array map()

// const mapp = [1,40,4,-5,'sumon','fakir']

// const mapps = mapp.map((ele) => {
//   return (ele + 2)
// })
// console.log(mapp);// mapp value show korebe
// console.log(mapps)// oparation er porer value gola show korbe 

// array reduce

// array reduce previous + current er element gola ka niye add sub multi ect jano function er kaj korte parbo

// const red = [1,2,3,4,5]
// const redc = red.reduce((previcousValue,currentValue,currentIndex,arr) => {
//     return previcousValue + currentValue
// },0 );

// console.log(redc)

// for of 
// const myArray = [1,2,3,4,5,6]
// let element;
// for(element in  myArray){
//     console.log(`for in given array index ${element}`)
// }
// for (element of myArray){
//     console.log(`for of given array elelemnts ${element}`)
// }
   
// const myObj = {
//     objName: "java Script",
//     estd: "1995",
//     founder: "not me !!"
// }
// let property;
// for( property in myObj ){
//     console.log(property);
// }

// for(property of myObj){
//     console.log(property)
// }// for of kaj kore na iterable e 

// for of given array elements

// const mystring = "i love works";
// let string;
// for (string of mystring){
//     console.log(string)
// }

// // for in given array index 
// for (string in mystring){
//     console.log(string)
// }

const obj = {
    oname : "mir info stylem",
    estd : "1952",
    founder: "mir ",

}
var keys = Object.keys(obj)
var value = Object.values(obj)
var entries = Object.entries(obj)

console.log(`${keys} ${value} ${entries}`)


    
    return(
        <div>
                
        </div>
    )
}

export default Pratice;