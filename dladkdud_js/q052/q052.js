dw("전투가 시작되었습니다.")
br();
br();


function orc(name , hp , attack ){
    this.name = name;
    this.hp = hp;
    this.attack = attack; 
    
    this.info = function(){
        br();
        dw(name + "는"); br();
        dw("피가 " + hp + " 남았습니다."); br();
        br();
    }
}


var orc = new orc( "오크" , 200 , 50 );


function Character(name , hp , attack ){
    this.name = name ;
    this.hp = hp ;
    this.attack = attack ; 
    
    this.info = function(){
        br();
        dw(name + "는"); br();
        dw("피가 " + hp + " 남았습니다."); br();
        br();
    }
}

var elf = new Character( "엘프", 200, 50 );

orc.hp = orc.hp - elf.attack;

elf.hp = elf.hp - orc.attack;

br();
orc.info();
elf.info(); 
br();

var mon_damage = getRandomAttackValue (orc.attack);
var player_damage = getRandomAttackValue (elf.attack);

orc.hp = orc.hp - elf.attack;
dw(elf.name + "가 " + orc.name + "에게 데미지를 " + player_damage + " 입혔습니다.");br();
elf.hp = elf.hp - orc.attack;
dw(orc.name + "가 " + elf.name + "에게 데미지를 " + mon_damage + " 입혔습니다.");br();


br();
dw ("몬스터의 피가 " + (orc.hp - player_damage) + "만큼 남았습니다");
br();
dw ("엘프의 피가 " + (elf.hp - mon_damage) + "만큼 남았습니다");
br();

function getRandomAttackValue(attack){
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}