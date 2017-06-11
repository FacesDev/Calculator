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
function runModulus() {
  holder = holder.concat("%");
  setValue(holder);
}

function setValue(setValue) {
  var newValue =  document.getElementById('numberBar');
  newValue.value = setValue;
}
function runMove() {
   nicksCageImg.style.position = "relative";
   nicksCageImg.style.left += "60%";
}
function runCageTime(){
  document.body.style.backgroundImage = "url('http://data.whicdn.com/images/70078309/large.gif')";
  oneButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_007.jpg)";
  twoButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_008.jpg)";
  threeButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_009.jpg)";
  fourButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_006.jpg)";
  fiveButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_005.jpg)";
  sixButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_004.jpg)";
  sevenButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_001.jpg)";
  eightButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_002.jpg)";
  nineButton.style.backgroundImage = "url(https://srv3.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-KGRlZSwZr1/image_part_003.jpg)";

}
function runCageTimeCoolDown() {
  document.body.style.backgroundImage = "";
  nicksCageImg.style.position = "absolute";
  nicksCageImg.style.left -= "60%";
  oneButton.style.backgroundImage = "";
  twoButton.style.backgroundImage = "";
  threeButton.style.backgroundImage = "";
  fourButton.style.backgroundImage = "";
  fiveButton.style.backgroundImage = "";
  sixButton.style.backgroundImage = "";
  sevenButton.style.backgroundImage = "";
  eightButton.style.backgroundImage = "";
  nineButton.style.backgroundImage = "";

}
