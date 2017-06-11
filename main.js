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
function runAdd() {
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
