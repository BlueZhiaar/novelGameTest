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
  makeButton("話しかける", "button", "talkBtn", "selectButtonArea", sceneTalk);
}

// --- シーン2: 話しかけた場合 ---
function sceneTalk() {
  clearScene();
  clearButton();

  setScene(`${gameState.currentPerson.name}は笑顔で応じてくれた。`);

  // さらに次のシーンへのボタン
  makeButton("次へ", "button", "nextBtn", "selectButtonArea", sceneNextStory);
}

// --- シーン3: 立ち去った場合 ---
function sceneLeave() {
  clearScene();
  clearButton();

  setScene("その場を立ち去った。");
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










