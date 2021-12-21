var numbers = new Array (6); 

for ( var i=0 ; i < numbers.length ; i++ ){
    numbers[i] = Math.floor (Math.random() *45+1); 
    dw(numbers[i]);
    br();
}

br();
br();

var player = [1,2,3,4,5,6];

for ( j=0 ; j<6 ; j++) {
    dw (player[j]);
    br();
}