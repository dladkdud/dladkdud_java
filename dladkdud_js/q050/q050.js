function Mon(name , hp , attack ){
    this.name = name;
    this.hp = hp;
    this.attack = attack; 

    this.info = function(){
        dw(name); br();
        dw(hp); br();
        dw(attack); br();
        br();
    }
}


var orc = new Mon( "오크" , 200 , 50 );

orc.info();

function Elf(name , hp , attack ){
    this.name = name ;
    this.hp = hp ;
    this.attack = attack ; 

    this.info = function(){
        dw(name); br();
        dw(hp); br();
        dw(attack); br();
        br();
    }
}

var elf = new Elf( "엘프", 200, 60 );

elf.info(); 
