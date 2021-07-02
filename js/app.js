'use strict';


let idArray = ['milk', 'mascarpone', 'salt', 'figs', 'brownSugar', 'water', 'cream', 'sugar', 'eggs', 'lemon', 'butter', 'pecans'];
let labelArray = ['milkLabel', 'mascarponeLabel', 'saltLabel', 'figsLabel', 'brownSugarLabel', 'waterLabel', 'creamLabel', 'sugarLabel', 'eggsLabel', 'lemonLabel', 'butterLabel', 'pecansLabel'];
let newArray = [];

function Strike(){
    this.elementID = '';
    this.elementLabel = '';

    newArray.push(this);
}

Strike.prototype.addElement= function(arrayId, arrayLabel){
    this.elementID = document.getElementById(arrayId);
    this.elementLabel = document.getElementById(arrayLabel);
}


Strike.prototype.check= function(){
    if (this.elementID.checked === true) {
        this.elementLabel.style.textDecoration = 'line-through';
    } else{
        this.elementLabel.style.textDecoration = 'none'
    }
}



let checkStrike = document.getElementById('checkStrike');

checkStrike.addEventListener('change', strikeThrough);

function strikeThrough(event){
    event.preventDefault();

    newArray = [];
    for (let i=0; i<idArray.length; i++){
        let genID = new Strike();
        genID.addElement(idArray[i], labelArray[i]);
        genID.check();
    }

}