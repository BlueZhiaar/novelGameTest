export class Person {
    constructor(name,age,alive,skills,persons_end){
this.name=name;
this.age=age;
this.alive=alive;
this.skills=skills;
this.persons_end=persons_end;
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
    new Person("花子","28",true,"スキル:歌って踊れます",`「ありがとうございます。一生ついていきます。」\n......鐘の音が聞こえる。キーンコーンカーンコーン。どうやら私は学校のトイレで寝ていたようだ。なにか夢を見ていた気がする\n......内容は思い出せない。\n左手の薬指に、ミミズが這ったような痣がついている。どこかにぶつけたのだろうか。\n\n---END---`),
    new Person("バナナ","1521",false,"スキル:自分の皮を道端に落とせます",`ふと目が覚めたら、そこは見覚えのありすぎる場所。いや、我が家だった。\nトイレに行くために階段を下りる。ふと、足元にバナナの皮が落ちていることに気が付いた。あぶないあぶない。どうしてこんなところにバナナの皮が。そう思って廊下の先のトイレのドアに視線を向けると、ちょうど20センチおきくらいの間隔でバナナの皮が落ちていた。\n\n---END---`),
    new Person("草","45",true,"スキル:笑ってやりすごせます",`wwwwwwwwwww大草げーーーーーーーんwwwwwww \n wwwwwwwwwwwwwwwwwwww\n\n---END---`),
    new Person("路傍の石","50021",false,"スキル:たまに転がれます",`疲れたので怠けます\n\n---END---`),
];


export const PERSONS_ARRAY = persons;