var numbers = new Array (6); 
var player = [1,2,3,4,5,6];



// 1 
numbers[0] = Math.floor (Math.random() *45+1); 
dw(numbers[0]);
br();
// 2
while ( true ){
    numbers[1] = Math.floor (Math.random() *45+1); 
    if ( numbers[0]== numbers[1]){
        continue; 
    }
    break; 
}
dw(numbers[1]);
br();
// 3
while (true){
    numbers[2] = Math.floor (Math.random() *45+1); 
    if ( numbers[0]== numbers[2]){
        continue; 
    }else if (numbers[1]== numbers[2]){
        continue;
    }
    break; 
}
dw(numbers[2]);
br();
// 4
while (true){
    numbers[3] = Math.floor (Math.random() *45+1); 
    if ( numbers[0]== numbers[3]){
        continue; 
    }else if (numbers[1]== numbers[3]){
        continue;
    }else if (numbers[2]== numbers[3]){
        continue;
    }
    break; 
}
dw(numbers[3]);
br();
// 5
while (true){
    numbers[4] = Math.floor (Math.random() *45+1); 
    if ( numbers[0]== numbers[4]){
        continue; 
    }else if (numbers[1]== numbers[4]){
        continue;
    }else if (numbers[2]== numbers[4]){
        continue;
    }else if (numbers[3]== numbers[4]){
        continue;
    }
    break; 
}
dw(numbers[4]);
br();
// 6
while (true){
    numbers[5] = Math.floor (Math.random() *45+1); 
    if ( numbers[0]== numbers[5]){
        continue; 
    }else if (numbers[1]== numbers[5]){
        continue;
    }else if (numbers[2]== numbers[5]){
        continue;
    }else if (numbers[3]== numbers[5]){
        continue;
    }else if (numbers[4]== numbers[5]){
        continue;
    }
    break; 
}
dw(numbers[5]);
br();

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

br();
br();


if (lotto == 3 ){
    dw ("5등입니다.");
}
if (lotto == 4 ){
    dw ("4등입니다.");
}
if (lotto == 5 ){
    dw ("3등입니다.");
}
if (lotto == 6 ){
    dw ("1등입니다.");
}