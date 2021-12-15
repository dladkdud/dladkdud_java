const star ="☆"
var i = 1

for ( i=1 ; i<=10 ; i++ ) {

    for ( j=10 ; j>=i ; j=j-1 ) {
        document.write ("☆");
    }
    document.write ("<br>");
}