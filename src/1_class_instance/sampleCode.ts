class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark(): void {
    console.log(`${this.name} says: Waon!`);
  }
}

const myDog = new Dog("tarou", 3);

console.log(`名前は${myDog.name}です`);
console.log(`年齢は${myDog.age}歳です`);

myDog.bark();

class Cat {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  meow(): void {
    console.log(`${this.name} says: Nyaa!`);
  }
}

const myCat = new Cat("Tama", "White");
console.log(`この猫の色は${myCat.color}です`);
myCat.meow();
