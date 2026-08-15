"use strict";

import { Person } from './world/worldObjects/charactors/persons.js';
import { PERSONS_ARRAY } from './world/worldObjects/charactors/persons.js';
import { Scene } from './world/storyStrings/testScene.js';
import { SCENES_ARRAY } from './world/storyStrings/testScene.js';
import { returnRam } from './world/tools/functions.js';
import { returnPerson } from './world/tools/functions.js';






 let button = document.getElementById("button");
    button.addEventListener("click",makeH1String);

function test(){
    makeH1String(returnPerson(2).introduceSelf());
}

function makeH1String(){
    document.getElementById("novelString").textContent=returnPerson(returnRam(PERSONS_ARRAY.length)).introduceSelf()
}





