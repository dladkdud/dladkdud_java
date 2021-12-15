var random; //변수
// 1~n 까지 범위 내에서 랜덤하게 숫자 하나 뽑아주는 애.
random = Math.floor(Math.random() * 6 ) + 1 ;

document.write("<img class='dice' src='dice6_" + random + ".jpg'>");
