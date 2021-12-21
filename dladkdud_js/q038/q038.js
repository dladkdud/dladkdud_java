var numbers = new Array (6); 
var player = [1,2,3,4,5,6];

for ( var i=0 ; i < numbers.length ; i++ ){
    numbers[i] = Math.floor (Math.random() *45+1); 
    dw(numbers[i]);
    br();
}

br();
br();

for ( var j=0 ; j<6 ; j++) {
    dw (player[j]);
    br();
}

var lotto = 0;

if (player[0] == numbers[0]){
    lotto= lotto + 1
}else if (player[0] == numbers[1]){
    lotto= lotto + 1
}else if (player[0] == numbers[2]){
    lotto= lotto + 1
}else if (player[0] == numbers[3]){
    lotto= lotto + 1
}else if (player[0] == numbers[4]){
    lotto= lotto + 1
}else if (player[0] == numbers[5]){
    lotto= lotto + 1
}

if (player[1] == numbers[0]){
    lotto= lotto + 1
}else if (player[1] == numbers[1]){
    lotto= lotto + 1     
}else if (player[1] == numbers[2]){
    lotto= lotto + 1     
}else if (player[1] == numbers[3]){
    lotto= lotto + 1     
}else if (player[1] == numbers[4]){
    lotto= lotto + 1     
}else if (player[1] == numbers[5]){
    lotto= lotto + 1     
}

if (player[2] == numbers[0]){
    lotto= lotto + 1     
}else if (player[2] == numbers[1]){
    lotto= lotto + 1     
}else if (player[2] == numbers[2]){
    lotto= lotto + 1 
}else if (player[2] == numbers[3]){
    lotto= lotto + 1 
}else if (player[2] == numbers[4]){
    lotto= lotto + 1 
}else if (player[2] == numbers[5]){
    lotto= lotto + 1 
}

if (player[3] == numbers[0]){
    lotto= lotto + 1 
}else if (player[3] == numbers[1]){
    lotto= lotto + 1 
}else if (player[3] == numbers[2]){
    lotto= lotto + 1 
}else if (player[3] == numbers[3]){
    lotto= lotto + 1
}else if (player[3] == numbers[4]){
    lotto= lotto + 1 
}else if (player[3] == numbers[5]){
    lotto= lotto + 1 
}

if (player[4] == numbers[0]){
    lotto= lotto + 1 
}else if (player[4] == numbers[1]){
    lotto= lotto + 1 
}else if (player[4] == numbers[2]){
    lotto= lotto + 1 
}else if (player[4] == numbers[3]){
    lotto= lotto + 1 
}else if (player[4] == numbers[4]){
    lotto= lotto + 1
}else if (player[4] == numbers[5]){
    lotto= lotto + 1 
}
if (player[5] == numbers[0]){
    lotto= lotto + 1 
}else if (player[5] == numbers[1]){
    lotto= lotto + 1 
}else if (player[5] == numbers[2]){
    lotto= lotto + 1 
}else if (player[5] == numbers[3]){
    lotto= lotto + 1 
}else if (player[5] == numbers[4]){
    lotto= lotto + 1 
}else if (player[5] == numbers[5]){
    lotto= lotto + 1
}

br();
br();
dw("숫자가 " + lotto + "개 일치합니다."); 