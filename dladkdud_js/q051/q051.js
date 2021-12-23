dw("전투가 시작되었습니다.")
br();
br();


function orc(name , hp , attack ){
    this.name = name;
    this.hp = hp;
    this.attack = attack; 

    this.info = function(){
        dw(name + "는"); br();
        dw("피가 " + hp + " 남았습니다."); br();
        dw(attack + " 만큼 공격을 했습니다."); br();
        br();
    }
}


var orc = new orc( "오크" , 200 , 50 );


function Character(name , hp , attack ){
    this.name = name ;
    this.hp = hp ;
    this.attack = attack ; 
    
    this.info = function(){
        dw(name + "는"); br();
        dw("피가 " + hp + " 남았습니다."); br();
        dw(attack + " 만큼 공격을 했습니다."); br();
        br();
    }
}

var elf = new Character( "엘프", 200, 60 );

orc.info();
elf.info(); 
br();


orc.hp = orc.hp - elf.attack;

elf.hp = elf.hp - orc.attack;

dw ("몬스터의 피가 " + orc.hp + "만큼 남았습니다");
br();
dw ("엘프의 피가 " + elf.hp + "만큼 남았습니다");