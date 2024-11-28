const convertLength = document.getElementById("convertLength");
const toSelectLength = document.getElementById("toSelectLength");
const fromSelectLength = document.getElementById("fromSelectLength");
const lengthInput = document.getElementById("lengthInput");
const lengthOutput = document.getElementById("lengthOutput");
const convertTemp = document.getElementById("convertTemp");
const fromSelectTemp = document.getElementById("fromSelectTemp");
const tempOutput = document.getElementById("tempOutput");
const tempInput = document.getElementById("tempInput");
const convertVol = document.getElementById("convertVol");
const fromSelectVol = document.getElementById("fromSelectVol");
const VolInput = document.getElementById("VolInput");
const toSelectVol = document.getElementById("toSelectVol");
const volOutput = document.getElementById("volOutput");
const convertWeight = document.getElementById("convertWeight");
const fromSelectWeight = document.getElementById("fromSelectWeight");
const weightInput = document.getElementById("weightInput");
const toSelectWeight = document.getElementById("toSelectWeight");
const weightOutput = document.getElementById("weightOutput");
const inch ={"Inch":1, "Foot":12, "Yard": 3*12, "Mile":5280*12, "Millimeter":0.0393701, "Centimeter": 0.393701, "Meter": 39.3701, "Kilometer": 39370.1}; //multiple factors
const gallon = {"OZ": 0.0078125, "Cup":0.0634013, "Pint": 0.125, "Quart": 0.2500, "Gallon": 1, "Liter": 0.26417208333232150563, "Milliliter": 0.00026417208333232152992}
const pound = {"OZ": 0.0625, "Pound": 1, "Ton": 2000, "MetricTon": 2204.62, "Milligram": 2.2046e-6, "Gram": 453.592, "Kilogram": 0.453592};

convertLength.addEventListener("click", function(){
    lengther();
});

convertTemp.addEventListener("click", function(){
    temper();
    
});

convertVol.addEventListener("click", function(){
    volume();
});

convertWeight.addEventListener("click", function(){
    weight();
})
//TODO: event listener for Enter





function lengther(){
    if (fromSelectLength.value == "Inch"){
        var inches = lengthInput.value;
    }else{
        var unit = fromSelectLength.value;
        var inches = lengthInput.value*(inch[unit]);
    }
      
    var unitTo = toSelectLength.value;
    if (unitTo =="Inch"){
        lengthOutput.value = parseFloat(inches/(inch[unitTo])).toFixed(2) +" "+unitTo + " OR " + Math.floor(inches/(inch[unitTo])/12) +"'" + inches/(inch[unitTo])%12 + '"';
    }else if(unitTo =="Foot"){
        lengthOutput.value = parseFloat(inches/(inch[unitTo])).toFixed(2) +" "+unitTo + " OR " + Math.floor(inches/(inch[unitTo])) +"'" + (Math.floor(inches/(inch[unitTo]))-Math.floor(inches/(inch[unitTo])))*12 + '"'; //TODO: IF this is less then one need to fice so the second part works. 
    }else{
        lengthOutput.value = parseFloat(inches/(inch[unitTo])).toFixed(2);
    } 
}

function temper(){
    if(fromSelectTemp.value == "C"){
        tempOutput.value = parseFloat((tempInput.value*(9/5))+(32)).toFixed(1)+ " F";
    }else if (fromSelectTemp.value == "F"){
        tempOutput.value = parseFloat((tempInput.value - 32)*(5/9)).toFixed(1) + " C";
    }else{
        tempOutput.value = "Error Try Again"
    }
}

function volume(){
    if(fromSelectVol.value == "Gallon"){
        var vol = VolInput.value;
    }else{
        var unit = fromSelectVol.value;
        var vol = VolInput.value *(gallon[unit]);
    }

    var unitTo = toSelectVol.value;
    volOutput.value = parseFloat(vol/(gallon[unitTo])).toFixed(2);
}

function weight(){
    if(fromSelectWeight.value == "Pound"){
        var we = weightInput.value;
    }else{
        var unit = fromSelectWeight.value;
        var we = weightInput.value *(pound[unit]);
    }

    var unitTo = toSelectWeight.value;
    weightOutput.value = parseFloat(we/(pound[unitTo])).toFixed(2);
}