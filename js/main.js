"use strict";

/**
 * import部分
 * 
 */

import { Person } from './world/worldObjects/charactors/persons.js';
import { PERSONS_ARRAY } from './world/worldObjects/charactors/persons.js';
import { Scene } from './world/storyStrings/testScene.js';
import { SCENES_ARRAY } from './world/storyStrings/testScene.js';
import { returnRam } from './world/tools/functions.js';
import { returnPerson } from './world/tools/functions.js';
import { refreshScene } from './world/tools/functions.js';
import { messageArea } from './world/tools/functions.js';
import { setScene } from './world/tools/functions.js';
import { makeButton } from './world/tools/functions.js';
import { clearScene } from './world/tools/functions.js';
import { gameState } from './world/tools/functions.js';
import { clearButton } from './world/tools/functions.js';


/**
 * 最初のシーン
 * 
 */

setScene(SCENES_ARRAY[0].ststring);


// --- 初期実行 ---
// 最初のボタンを作成
makeButton("運命のボタン", "button", "unmeiButton", "selectButtonArea", sceneEncounter);






// 呼び出し側
// 呼び出し側（実行したい一連の処理をそのまま素直に中に書く）

// --- シーン1: 最初の運命の出会い ---
function sceneEncounter() {
  clearScene();
  clearButton();

  // 状態の更新
  gameState.currentPerson = PERSONS_ARRAY[returnRam(PERSONS_ARRAY.length)];
 

  const text1 = gameState.currentPerson.introduceSelf();
  const text2 = SCENES_ARRAY[1].ststring;

  // 改行などで連結して1回だけ呼ぶ
setScene(`${text1}\n${text2}`);
  

  // 次の行動ボタンを生成（クリックしたらシーン2へ進む）
  makeButton("冒険に行く", "button", "talkBtn", "selectButtonArea", goBoken);
  makeButton("嫌です。冒険に行きません。", "button", "leaveBtn", "selectButtonArea", sceneLeave);
  
}

// --- シーン2: 話しかけた場合 ---
function goBoken() {
  clearScene();
  clearButton();

  setScene(`${gameState.currentPerson.name}ははちきれんばかりの笑顔をこちらに向けてケタケタと笑い出した`);

  // さらに次のシーンへのボタン
  makeButton("次へ", "button", "nextBtn", "selectButtonArea", personsEnds);
}

// --- シーン3: 立ち去った場合 ---
function sceneLeave() {
  clearScene();
  clearButton();

  setScene(`私はその場を立ち去った。\n何もない。何も聞こえない。何も起こらない。\n永久にこの暗闇に私はいなければならないのだろうか。永久とはなんだろう。わからないわからないわからないわからないわからない。\nわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからないわからない\n\n----END----`);
}

function personsEnds(){
      clearScene();
  clearButton();

  setScene(`${gameState.currentPerson.persons_end}`);

}





/** 

// ボタン作成とクリック時の動作
makeButton("運命のボタン", "button", "unmeiButton", "selectButtonArea", () => {
    clearScene();
  gameState.currentPerson = PERSONS_ARRAY[returnRam(PERSONS_ARRAY.length)];
  setScene(gameState.currentPerson.introduceSelf());
  clearButton();


});

*/









/**
 * 二番目のシーン
 * 
 */










