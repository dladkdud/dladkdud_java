dw("첫번째 턴이 시작되었습니다.")
br();
hr();


function Mon(name , hp , attack ){
    this.name = name;
    this.currentHp = hp; ///현ㅈ채력
    this.MaxHp = hp;    //최대체력
    this.attack = attack; 
    
    this.info = function(){
        hr();
        dw("["+this.name+"("+this.MaxHp+"/"+this.currentHp+")}");
    }
}


var orc = new Mon( "오크" , 200 , 50 );


function Character(name , hp , attack ){
    this.name = name ;
    this.currentHp = hp; ///현ㅈ채력
    this.MaxHp = hp;    //최대체력
    this.attack = attack ; 
    
    this.info = function(){
        hr();
        dw("["+this.name+"("+this.MaxHp+"/"+this.currentHp+")]");
    }
}

var elf = new Character( "엘프", 200, 50 );

orc.hp = orc.Maxhp - elf.attack;

elf.hp = elf.Maxhp - orc.attack;


function getRandomAttackValue(attack){
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}

var mon_damage = getRandomAttackValue (orc.attack);
var player_damage = getRandomAttackValue (elf.attack);

orc.hp = orc.hp - elf.attack;
dw(elf.name + "가 " + orc.name + "에게 데미지를 " + player_damage + " 입혔습니다.");br();
elf.hp = elf.hp - orc.attack;
dw(orc.name + "가 " + elf.name + "에게 데미지를 " + mon_damage + " 입혔습니다.");br();

orc.currentHp = orc.MaxHp - player_damage ;
elf.currentHp = elf.MaxHp - mon_damage ; 

hr();
dw ("오크의 피가 '" + orc.currentHp + "'만큼 남았습니다");
br();
dw ("엘프의 피가 '" + elf.currentHp + "'만큼 남았습니다");
br();
hr();
orc.info();
elf.info(); 
br();
hr();
