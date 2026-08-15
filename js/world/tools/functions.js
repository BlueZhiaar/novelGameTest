"use strict";
import { PERSONS_ARRAY } from "../worldObjects/charactors/persons.js";
import { Person } from "../worldObjects/charactors/persons.js";








export function returnRam(lim){


    return Math.floor(Math.random() * lim)
}

export function returnPerson(per_id){
   let result = PERSONS_ARRAY[per_id];

   
    return result;

}

export function makeH1String(h1_str){
    document.getElementById("novel_string").textContent=h1_str;
}





