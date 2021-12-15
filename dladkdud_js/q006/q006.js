var random;
random=Math.floor(Math.random()*100) + 1;

document.write("<div id='cat_flex'>")
for ( var a = 1 ; a < random ; a = a + 1 ){
    document.write("<img id='cat' src='cat.jpg'>");
    document.write("<div class='cat_number'>");
    document.write(a);
    document.write("</div>");
}
document.write("</div>");