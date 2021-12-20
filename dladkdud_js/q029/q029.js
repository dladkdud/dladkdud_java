var player = "";

player = prompt ("가위 바위 보 입력");

while (true){
    if (player == "가위" || player == "바위" || player == "보" ) {
        break; 
    } else {
        alert ("다시 입력해주세요.")
    }
}

var com = Math.floor(Math.random() * 3 );


if ( com == 0 ) {
    com = "가위" ;
}
if ( com == 1 ) {
    com = "바위" ;
}
if ( com == 2 ) {
    com = "보" ;
}

dw ( "유저: " + player );
br();
dw ( "컴퓨터: " + com );
br();

var win = "" ; 

switch (player) {
    case "가위" :
        switch (com) {
            case "가위" :
                win = "draw!!";
                break;
            case "바위" : 
                win = "com win!!";
                break;
            case "보" : 
                win = "you win!!";
                break;
        }
        break;
    case "바위" :
        switch (com) {
            case "가위" : 
                win = "you win!!!!";
                break;
            case "바위" : 
                win = "draw!!";
                break;
            case "보" : 
                win = "com win!!";
                break;
        }
        break;
    case "보" :
        switch (com) {
            case "가위" : 
                win = "com win!!";
                break;
            case "바위" : 
                win = "you win!!";
                break;
            case "보" : 
                win = "draw!!";
                break;
        }
        break; 
}

dw (win); 
