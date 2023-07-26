import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import {getDatabase, ref, push} from  "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

    
 



const  appSettings = {
    databaseURL: "https://play-ground-9fa1d-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp (appSettings)
const database = getDatabase (app)
const moviesInDB = ref(database, "movies")

console.log(app)
const addBtn = document.getElementById("add-button")
const inputEl = document.getElementById("input-field")
const listEl = document.getElementById("list")





addBtn.addEventListener("click" , function(){
    let inputvalue = inputEl.value

   
    push(moviesInDB , inputvalue)
    clearInputField() 
    appendItemToShoppingList(inputvalue)
     
})

function clearInputField() {
    inputEl.value = ""

}

function appendItemToShoppingList(itemValue){
    listEl.innerHTML += `<li>${itemValue}</li>`

}

