var random;
random=Math.floor(Math.random()*100) + 1;

document.write("<div id='cat_flex'>")
for ( var a = 1 ; a < random ; a = a + 1 ){
    if (a==7){
        document.write("<div class='cat_number_gold'>");
    } else {
        document.write("<div class='cat_card'>");
    }
    document.write("<img id='cat' src='cat.jpg'>");
    document.write("<p class='cat_number'>" + a + "</p>");
    document.write("</div>");
}
document.write("</div>");
