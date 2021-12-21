var numbers = new Array (6); 
var player = [25,13,42,41,1,2];
var bonus_num = 0; 


// 1 
numbers[0] = Math.floor (Math.random() *45+1); 
dw(numbers[0] + ", ");
// 2
while ( true ){
    numbers[1] = Math.floor (Math.random() *45+1); 
    if ( numbers[0]== numbers[1]){
        continue; 
    }
    break; 
}
dw(numbers[1] + ", ");
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
dw(numbers[2] + ", ");
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
dw(numbers[3] + ", ");
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
dw(numbers[4] + ", ");
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

// 보너스 로또 중복방지 // 
while (true){
    bonus_num = Math.floor(Math.random() * 45 + 1); 
    if ( bonus_num== numbers[0]){
        continue; 
    }else if (bonus_num== numbers[1]){
        continue;
    }else if (bonus_num== numbers[2]){
        continue;
    }else if (bonus_num== numbers[3]){
        continue;
    }else if (bonus_num== numbers[4]){
        continue;
    }
    break; 
}
    dw("보너스: " + bonus_num);


br();
br();

for ( var j=0 ; j<6 ; j++) {
    dw (player[j] + ", ");
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

dw("숫자가 " + lotto  + "개 일치합니다."); 

br();
br();


if (lotto == 3 ){
    dw ("5등입니다.");
} else if (lotto == 4 ){
    dw ("4등입니다.");
} else if (lotto == 5 ){
    if (player[0] == bonus_num){
        dw ("2등입니다.");    
    }else if (player[1] == bonus_num){
        dw ("2등입니다."); 
    }else if (player[2] == bonus_num){
        dw ("2등입니다.");
    }else if (player[3] == bonus_num){
        dw ("2등입니다.");
    }else if (player[4] == bonus_num){
        dw ("2등입니다.");
    }else if (player[5] == bonus_num){
        dw ("2등입니다.");
    }else{
        dw ("3등입니다.");
    }
} else if (lotto == 6 ){
    dw ("1등입니다.");
}else {
    dw("당첨되지 않았습니다.");
}