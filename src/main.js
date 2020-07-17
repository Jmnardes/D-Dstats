//str
let str = document.querySelector('#str');
const addStr = document.querySelector('#btn-add-str')
const subStr = document.querySelector('#btn-sub-str')
//dex
let dex = document.querySelector('#dex');
const addDex = document.querySelector('#btn-add-dex')
const subDex = document.querySelector('#btn-sub-dex')
//con
let con = document.querySelector('#con');
const addCon = document.querySelector('#btn-add-con')
const subCon = document.querySelector('#btn-sub-con')
//int
let int = document.querySelector('#int');
const addInt = document.querySelector('#btn-add-int')
const subInt = document.querySelector('#btn-sub-int')
//wis
let wis = document.querySelector('#wis');
const addWis = document.querySelector('#btn-add-wis')
const subWis = document.querySelector('#btn-sub-wis')
//cha
let cha = document.querySelector('#cha');
const addCha = document.querySelector('#btn-add-cha')
const subCha = document.querySelector('#btn-sub-cha')
//points
let points = document.querySelector('#points-count')

//verify added points into stats label
function addPoint(value) {
    if (value < 13) return 1;
    if (value >= 13) return 2;
};

//verify subbed points into stats label
function subPoint(value) {
    if (value < 14) return 1;
    if (value >= 14) return 2;
};

//conditionals and function add - 1 into points total label
function checkPointAdd(e){
    let value = e.innerText;
    if((addPoint(Number(value))) > Number(points.innerText)) return false;
    if((addPoint(Number(value))) <= Number(points.innerText)){
        points.innerText = Number(points.innerText) - (addPoint(Number(value)));
        return true;
    };
};

//conditionals and function sub +1 into points total label
function checkPointSub(e){
    let value = e.innerText;
    if((Number(points.innerText) + subPoint(Number(value))) > 27) {
        return false;
    } else {
        return points.innerText = Number(points.innerText) + subPoint(Number(value));
    }
};

//conditional for add eventlistener
function checkAddEvent(value){
    if( Number(value.innerText) < 15 ) {
        if(checkPointAdd(value)){
            value.innerText = Number(value.innerText) + 1;
        } else {
            alert("0 Points left")
        }
    } else {
        alert("Value can't be higher than 15");
    }
}

//conditional for sub eventlistener
function checkSubEvent(value){
    if( Number(value.innerText) > 8 ) {
        if(checkPointSub(value)) value.innerText = Number(value.innerText) - 1;
    } else {
        alert("Value cant be lower than 8")
    } 
}

//events for buttons add and sub
//str
addStr.addEventListener('click', () => checkAddEvent(str));
subStr.addEventListener('click', () => checkSubEvent(str));
//dex
addDex.addEventListener('click', () => checkAddEvent(dex));
subDex.addEventListener('click', () => checkSubEvent(dex));
//con
addCon.addEventListener('click', () => checkAddEvent(con));
subCon.addEventListener('click', () => checkSubEvent(con));
//int
addInt.addEventListener('click', () => checkAddEvent(int));
subInt.addEventListener('click', () => checkSubEvent(int));
//wis
addWis.addEventListener('click', () => checkAddEvent(wis));
subWis.addEventListener('click', () => checkSubEvent(wis));
//cha
addCha.addEventListener('click', () => checkAddEvent(cha));
subCha.addEventListener('click', () => checkSubEvent(cha));