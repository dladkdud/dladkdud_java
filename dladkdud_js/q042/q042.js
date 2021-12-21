//3 함수의 첫번째 매개변수에 1번 함수를 넣고 두번째 매개변수에 2번 함수를 넣은다음 
//3 함수가 실행되서 리턴 되는 값을 출력하기


function one() {
    return 100;
}

function two() {
    return 200;
}

function three( a, b ){
    return a + b ;
}

var a = three( one() , two() );

dw(a);