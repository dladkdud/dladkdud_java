function Cat(Name, Age, Weigth, family, color) {
    this.Name = Name ; //이름
    this.Age = Age ; //나이
    this.Weigth = Weigth ; //몸무게
    this.family = family ; //종류
    this.color = color ; //털 색
}
new Cat(); 
var kitty = new Cat(); 

kitty.catName = "나비" ;
kitty.catAge = 1 ;
kitty.catWeigth = 300 ;
kitty.family = "샴" ;
kitty.color = "white" ;

kitty.crying = function(){
    dw("야옹"); 
}


var dog = new Cat (
    "멍멍이",
    2 ,
    400 , 
    "푸들",
    "brown",
    );
    
dog.crying = function(){
    dw("멍멍"); 
}

if (kitty.catAge > dog ){
    dw("형님: " + kitty.catName); br();
    dw("동생: " + dog.Name);
}else {
    dw("형님: " + dog.Name); br();
    dw("동생: " + kitty.catName);
}

br();
kitty.crying(); 
br();
dog.crying();