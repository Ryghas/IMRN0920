// 1. Animasi Class

//  Release 0

var leg = 4;
var coldBlood = false;

class Animal {
    constructor (name) {
        this.name = name;
        this.legs = leg;
        this.cold_blooded = coldBlood;
    }
    get anam() {
      return this.name;
    }
    set anam(x) {
      this.name = x;
    }

}
 
var sheep = new Animal("shaun");
 
console.log(sheep.anam)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

console.log('')

// Release 1

class Ape extends Animal {
  constructor (name, coldBlooded, leg) {
    super(name, coldBlooded);
    this.leg = 2;
  }
  yell = () => {
    var Auoo = console.log('Auooo')
    return Auoo
  }
}

class Frog extends Animal {
  constructor (name, coldBlooded, leg) {
    super(name, coldBlooded, leg);
  }
  jump = () => {
    var hop = console.log('hop hop')
    return hop
  }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.name)
sungokong.yell()
 
var kodok = new Frog("buduk")
console.log(kodok.name)
kodok.jump() 

console.log('')

// 2. Function to Class

class Clock {

  constructor(template) {
    this.template = template;
    this.timer = this.timer;
  }

  render = () =>  {
    let time = new Date();
    let hours = time.getHours();
    if (hours < 10) hours = "0" + hours;
    let minutes = time.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = time.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;

    let output = hours + ":" + minutes + ":" + seconds;

    console.log(output);
  }

  stop = () => {
    clearInterval(this.timer);
  }

  start = () => {
    this.timer = setInterval(this.render, 1000);
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();