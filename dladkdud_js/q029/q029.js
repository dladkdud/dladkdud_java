let player = prompt("가위(0) 바위(1) 보(2) 입력: ");
var com = Math.floor(Math.random() * 3);

if (player==com) {
    dw("draw")
} else if (player=="0" && com==1 ) {
    dw("computer win!!");
} else if (player=="0" && com==2 ) {
    dw ("player win!!");
} else if (player=="1" && com==0 ) {
    dw ("player win!!");
} else if (player==1 && com==2 ) {
    dw ("computer win!!");
} else if (player==2 && com==0 ) {
    dw ("computer win!!!!");
} else if (player==2 && com==1 ) {
    dw ("player win!!");
} 