//첫번째

var orc = new Mon("오크", 200, 50);
var elf = new Character("엘프", 200, 50);

dw("턴이 시작되었습니다.")
br();
hr();


while (true) {

    orc.info();
    elf.info();
    br();
    hr();

    var mon_damage = getRandomAttackValue(orc.attack);
    var player_damage = getRandomAttackValue(elf.attack);

    dw(elf.name + "가 " + orc.name + "에게 데미지를 " + player_damage + " 입혔습니다."); br();
    dw(orc.name + "가 " + elf.name + "에게 데미지를 " + mon_damage + " 입혔습니다."); br();

    orc.currentHp = orc.currentHp - player_damage;
    elf.currentHp = elf.currentHp - mon_damage;

    hr();
    dw("오크의 피가 '" + orc.currentHp + "'만큼 남았습니다");
    br();
    dw("엘프의 피가 '" + elf.currentHp + "'만큼 남았습니다");
    br();
    hr();
    orc.info();
    elf.info();
    br();
    hr();
    hr();

    if (orc.currentHp <=0 || elf.currentHp<=0 ){
        break; 
    }
}