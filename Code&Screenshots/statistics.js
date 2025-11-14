function getNumbers(){
    let str = document.getElementById("nums").value.trim();
    if(str==="") throw "Please enter numbers.";
    let arr = str.split(/\s+/);
    let nums = arr.map(n=>{
        if(!/^[-+]?\d*\.?\d+$/.test(n)) throw "Invalid input. Enter only numbers.";
        return parseFloat(n);
    });
    return nums;
}

function showError(msg){
    document.getElementById("error").innerText = msg;
    document.getElementById("result").innerText = "";
}

function showResult(text){
    document.getElementById("error").innerText = "";
    document.getElementById("result").innerText = text;
}

function calcMean(){
    try{
        let nums = getNumbers();
        let mean = nums.reduce((a,b)=>a+b,0)/nums.length;
        showResult("Mean: " + mean.toFixed(4));
    }catch(e){showError(e);}
}

function calcVariance(){
    try{
        let nums = getNumbers();
        let mean = nums.reduce((a,b)=>a+b,0)/nums.length;
        let variance = nums.reduce((a,b)=>a+(b-mean)**2,0)/nums.length;
        showResult("Variance: " + variance.toFixed(4));
    }catch(e){showError(e);}
}

function calcStd(){
    try{
        let nums = getNumbers();
        let mean = nums.reduce((a,b)=>a+b,0)/nums.length;
        let variance = nums.reduce((a,b)=>a+(b-mean)**2,0)/nums.length;
        let std = Math.sqrt(variance);
        showResult("Standard Deviation: " + std.toFixed(4));
    }catch(e){showError(e);}
}
