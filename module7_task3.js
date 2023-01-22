
/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function createCat() {
    let vl = Object.create(null, { } ); /*нашла в интернете решение, сама не догадалась:(*/
    return vl;
  }
  
  cat = createCat();
  
  console.log(Object.getPrototypeOf(cat));
