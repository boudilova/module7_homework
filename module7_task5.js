/*Задание 4.
Переписать консольное приложение из предыдущего юнита на классы*/

class ElPrib {                // есть электроприбор,  
    constructor(wtg){ 
      if (typeof wtg === 'number' && wtg > 0)
        {
      this.wtg = wtg;
        }else{
          this.wtg = 0;
        }//у него есть мощность 
      this.state = 0;           // и состояние - включен/выключен, по умолчанию выключен
    }
    turnOn(){                   // прибор  можно включить 
      this.state = 1;
    }
    turnOff(){                  // и прибор можно выключить
      this.state = 0;
    }
  }
  
  
  class Lamp extends ElPrib {   // есть лампа
    constructor (brght, wtg) {
      super(wtg);             // и как у электроприбора у нее есть мощность
      this.state = 0 ; 
      if (typeof brght === 'number' && brght > 0){
      this.brightness = brght; 
      }else{
        this.brightness = 0
      }// у лампы есть яркость
    } 
    getInfo(){
      console.log(`это лампа, яркостью ${this.brightness} лм, мощностью ${this.wtg} вт`)
    }
    lightOn(){
      super.turnOn()
    }
    lightOff() {
      super.turnOff()
    }
  }
  
  class Speaker extends ElPrib {   // есть колонка
    constructor (volume, wtg) {
      super(wtg);             // и как у электроприбора у нее есть мощность
      this.state = 0 ; 
      if(typeof volume === 'number' && volume > 0){
      this.volume = volume; 
      }else{
        this.volume=0;
      } // у колонки есть громкость
    } 
    getInfo(){
      console.log(`это колонка, громкостью ${this.volume} лм, мощностью ${this.wtg} вт`)
    }
    sndOn(){
      super.turnOn()
    }
    sndOff() {
      super.turnOff()
    }
  }
  
  const lamp = new Lamp(60, 50);
  const speaker = new Speaker (100,200)
  
  speaker.sndOn();  // включили колонку
  lamp.lightOn();   // включили лампу
  console.log(`суммарная мощность: ${lamp.state * lamp.wtg + speaker.state * speaker.wtg}` );
  
  speaker.sndOff();  // выключили колонку, лампа включена
  console.log(`суммарная мощность: ${lamp.state * lamp.wtg + speaker.state * speaker.wtg}` );
  
  lamp.lightOff();   // выключили лампу
  console.log(`суммарная мощность: ${lamp.state * lamp.wtg + speaker.state * speaker.wtg}` );
  