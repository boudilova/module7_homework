/*Задание 4.
Реализуйте следующее консольное приложение подобно примеру,который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.*/

function ElPrib(wtg){ // есть электроприбор,  

    this.wtg = wtg; //у него есть мощность 
    this.state = 0; // и состояние - включен/выключен, по умолчанию выключен
    this.turnOn = function (){ // прибор  можно включить 
      this.state = 1;
    }
    this.turnOff = function (){ // и прибор можно выключить
      this.state = 0;
    }
  }
  function Lamp (brght){ // есть лампа
    this.brightness = brght; // у лампы есть яркость
  }
  
  function Speaker (vlm){ // есть колонка
    this.volume = vlm;  // у колонки есть громкость
  }
  
  Lamp.prototype = new ElPrib (50); // лампа это электроприбор  мощностью 50 вт
  Speaker.prototype = new ElPrib (45); // колонка это электроприбор мощностью 45 вт
  
  const lamp = new Lamp (85);// лапма с яркостью 85 лм
  const speaker = new Speaker (55); // колонка с громкостью 55
  
  lamp.turnOn(); // включили лампу
  speaker.turnOn(); // включили колонку
  console.log(`суммарная мощность: ${lamp.state * lamp.wtg + speaker.state * speaker.wtg}` );
  
  lamp.turnOff(); // выключили лампу
  console.log(`суммарная мощность: ${lamp.state * lamp.wtg + speaker.state * speaker.wtg}` );
  
  tapeRec.turnOff(); // и колонку выключили
  console.log(`суммарная мощность: ${lamp.state * lamp.wtg + speaker.state * speaker.wtg}` );
  