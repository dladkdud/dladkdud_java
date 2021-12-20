let player = prompt("가위 바위 보 입력: ");
var com = Math.floor(Math.random() * 3);

if (player=="가위" && com==0 ) {
    dw ("draw!!");
} else if (player=="가위" && com==1 ) {
    dw("computer win!!");
} else if (player=="가위" && com==2 ) {
    dw ("player win!!");
} else if (player=="바위" && com==0 ) {
    dw ("player win!!");
} else if (player=="바위" && com==1 ) {
    dw ("draw!!");
} else if (player=="바위" && com==2 ) {
    dw ("computer win!!");
} else if (player=="보" && com==0 ) {
    dw ("computer win!!!!");
} else if (player=="보" && com==1 ) {
    dw ("player win!!");
} else if (player=="보" && com==2 ) {
    dw ("draw!!");
}
