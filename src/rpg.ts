interface ICharacter {
  name: string;
  attack(): void;
}

class BaseCharacter implements ICharacter {
  public name: string;
  private hp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }
  attack(): void {
    throw new Error("Method not implemented.");
  }

  takeDamege(damege: number): void {
    this.hp -= damege;
    if (this.hp < 0) {
      this.hp = 0;
    }
    console.log(`${this.name}が${damege}ダメージを受けた! 残り${this.hp}hp`);
  }
}

class Warrior extends BaseCharacter {
  constructor(name: string, hp: number) {
    super(name, hp);
  }

  attack(): void {
    console.log(`${this.name}の剣攻撃`);
  }
}

class Mage extends BaseCharacter {
  constructor(name: string, hp: number) {
    super(name, hp);
  }

  attack(): void {
    console.log(`${this.name}の魔法攻撃`);
  }
}

console.log("戦闘開始");
const Arthur = new Warrior("アーサー", 100);
const Merlin = new Mage("マーリン", 80);

const myCharacter: ICharacter[] = [Arthur, Merlin];

for (const team of myCharacter) {
  team.attack();
}

console.log("被ダメ計算");
Arthur.takeDamege(150);
