var numbers = new Array (7);

for (var i = 0 ; i < numbers.length ; i++ ) {
    numbers[i] = Math.floor(Math.random()*46+1); 
    dw (numbers[i]);
    br();
}