const input = document.getElementById("numbers");
const errorEl = document.getElementById("error");
const resultsEl = document.getElementById("results");
const meanEl = document.getElementById("meanResult");
const varEl = document.getElementById("varianceResult");
const stdEl = document.getElementById("stddevResult");
const meanBtn = document.getElementById("meanBtn");
const varBtn = document.getElementById("varianceBtn");
const stdBtn = document.getElementById("stddevBtn");
function parseNumbers(str){
  const tok = str.trim().split(/\s+/).filter(Boolean);
  if(tok.length===0) throw "Please enter at least one number.";
  const numPattern = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
  const nums = tokens.map((t)=>{
    if(!numPattern.test(t)) throw "Input contains invalid non-numeric values.";
    return Number(t);
  });
  return nums;
}
function showResults(mean,variance,stddev){
  errorEl.textContent = "";
  resultsEl.style.display = "block";
  meanEl.innerHTML =  format(mean);
  varEl.innerHTML =  format(variance);
  stdEl.innerHTML =  format(stddev);
}
function computeAll(){
  try{
    const nums = parseNumbers(input.value);
    const n = nums.length;
    const sum = nums.reduce((a,b)=>a+b,0);
    const mean = sum / n;
    const variance = nums.reduce((a,b)=>a+Math.pow(b-mean,2),0) / n;
    const stddev = Math.sqrt(variance);
    showResults(mean,variance,stddev);
    return {mean,variance,stddev};
  }catch(e){
    showError(String(e));
    return null;
  }
}


























