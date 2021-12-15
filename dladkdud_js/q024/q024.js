var random;
random=Math.floor(Math.random()*10) + 1;

// var r = Math.floor(Math.random) * 10() +1;

for (i = 1; i <= 10; i++) {
    if (i == random) {
        continue;
    }
    document.write(i);
    document.write("<br>")
}