const star ="☆"
const space = "_"

for ( var i=1 ; i<=10 ; i++ ) {
    
    for ( var j=1 ; j<=10 ; j++ ){

        if ( j > (i-1) ) {
            document.write (star);
        } else {
            document.write (space);
        }
        }
    document.write ("<br>");
}