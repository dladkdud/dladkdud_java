function Cat(){
    this.catName = "" ; //이름
    this.catAge = 0 ; //나이
    this.catWeigth = 0 ; //몸무게
    this.family = "" ; //종류
    this.color = "" ; //털 색
}
new Cat(); 
var kitty = new Cat(); 

kitty.catName = "나비" ;
kitty.catAge = 1 ;
kitty.catWeigth = "300g" ;
kitty.family = "샴" ;
kitty.color = "하양" ;

dw("이름: " + kitty.catName ); br();
dw("나이: " + kitty.catAge ); br();
dw("무게: " + kitty.catWeigth); br();
dw("종: " + kitty.family); br();
dw("색: " + kitty.color); br();