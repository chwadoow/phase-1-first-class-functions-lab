// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    let newArray=arrayOfDrivers.slice(0,2)
    
    return newArray;
}
const  returnLastTwoDrivers = function(arrayOfDrivers){
    let elementCount = arrayOfDrivers.length
    let newArray= arrayOfDrivers.slice(elementCount - 2);
    
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(){
    return function fare(num){
        return num * num;
    }
    
}
const fareDoubler = (num) => {
    return num * 2;} 
const fareTripler = (num)=>{
    return num * 3;
}
function selectDifferentDrivers(arrayOfDrivers ,returnLastTwoDrivers){
    return returnLastTwoDrivers (arrayOfDrivers);
}