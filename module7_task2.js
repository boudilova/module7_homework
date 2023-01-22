/*Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, 
  а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

function isProp (obj,str){
    let vl = false;
    for (let key in obj){
       if(key == str ){ 
         vl = true;
       }
     }
    return vl;
  }
  const cat =  {
    fur: "gray",
    tail: "long"
  };
  
  console.log(isProp(cat, "hands"));
  console.log(isProp(cat, "fur"));
  