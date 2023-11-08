"use strict"

let fullName = "Kiana Felder";
let firstName = getFirstName(fullName);
let lastName = getLastName(fullName);

function getFirstName(fullName){
    let spaceBetweenName = fullName.indexOf(" ");
    let firstName = fullName.substring(0, spaceBetweenName)
    return firstName
}

function getLastName(fullName){
    let spaceBetweenName = 
}

console.log(fullName)