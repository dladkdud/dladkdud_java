function Mon(name , hp , attack ){
    this.name = name;
    this.currentHp = hp; ///현ㅈ채력
    this.MaxHp = hp;    //최대체력
    this.attack = attack; 
    
    this.info = function(){
        hr();
        dw("["+this.name+"("+this.MaxHp+"/"+this.currentHp+")]" + " " );
    }
}

function Character(name , hp , attack ){
    this.name = name ;
    this.currentHp = hp; ///현ㅈ채력
    this.MaxHp = hp;    //최대체력
    this.attack = attack ; 
    
    this.info = function(){
        dw("["+this.name+"("+this.MaxHp+"/"+this.currentHp+")]");
    }
}

function getRandomAttackValue(attack){
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}

