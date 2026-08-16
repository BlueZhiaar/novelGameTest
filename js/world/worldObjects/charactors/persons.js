export class Person {
    constructor(name,age,alive,skills){
this.name=name;
this.age=age;
this.alive=alive;
this.skills=skills;
    }

    bio(){
        console.log(`こんにちは、${this.name}です。`);
    }

    returnAlive(is_alive){
        if(this.alive==true){
            return "ちなみに生きてます";
        }else{
            return "ちなみに死んでます"
        }
    }

    introduceSelf() {

    return `こんにちは、${this.name}です。歳は${this.age}、\n${this.skills}。\n${this.returnAlive(persons[2])}。`;
  }
}


//配列に格納して使う

const persons=[
    new Person("花子","28",true,"スキル:歌って踊れます"),
    new Person("バナナ","1521",false,"スキル:自分の皮を道端に落とせます"),
    new Person("草","45",true,"スキル:笑ってやりすごせます"),
    new Person("路傍の石","50021",false,"スキル:たまに転がれます"),
];


export const PERSONS_ARRAY = persons;