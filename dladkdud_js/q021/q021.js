const star ="☆"
const space = "_"

for ( var i=1 ; i>=10 ; i++ ) {
    
    for ( var j=10 ; j>=1 ; j++ ){

        if ( i > (j-1) ) {
            document.write (star);
        } else {
            document.write (space);
        }
        }
    document.write ("<br>");
}