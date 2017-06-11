let holder = "";
function run(x){
    holder = holder.concat(x.value);
    setValue(holder);
    console.log(x);
}
function runClear(){
  holder = "";
  setValue(holder);
}
function runEqual() {
  var total = eval(holder);
  setValue(total);
}
function runMult() {
  holder = holder.concat("*");
  setValue(holder);
}
function runSqrrt() {
  var total = eval(holder);
  var sqrRoot = Math.sqrt(total);
  setValue(sqrRoot);
}

function setValue(setValue) {
  var newValue =  document.getElementById('numberBar');
  newValue.value = setValue;
}
function runMove() {
   nicksCageImg.style.position = "relative";
   nicksCageImg.style.left += "70%";
}
function runCageTime(){
  document.body.style.backgroundImage = "url('https://www.placecage.com/200/300')";
}
function runCageTimeCoolDown() {
  document.body.style.backgroundImage = "";
  nicksCageImg.style.position = "absolute";
  nicksCageImg.style.left -= "70%";
}
