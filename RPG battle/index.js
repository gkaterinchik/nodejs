
const readlineSync = require('readline-sync');
const readlineSync1 = require('readline-sync');
let player_cooldown=[0,0,0,0];
let comp_cooldown=[0,0,0];
let playerHealth= readlineSync.question("Введите здоровье мага: "+"\n");
console.log(playerHealth);



const monster = {
        maxHealth: 10,
        name: "Лютый",
        moves: [
            {
                "name": "paw",
                "physicalDmg": 3, // физический урон
                "magicDmg": 0,    // магический урон
                "physicArmorPercents": 20, // физическая броня
                "magicArmorPercents": 20,  // магическая броня
                "cooldown": 0,     // ходов на восстановление
				"availability":true
            },
            {
                "name": "fire",
                "physicalDmg": 0,
                "magicDmg": 4,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 3,
				"availability":true
            },
            {
                "name": "tail strike",
                "physicalDmg": 2,
                "magicDmg": 0,
                "physicArmorPercents": 50,
                "magicArmorPercents": 0,
                "cooldown": 2,
				"availability":true
            },
        ]
    }


	
	const player = {
        maxHealth: playerHealth,
        name: "Евстафий",
	moves: [
            {
                "name": "censer",
                "physicalDmg": 2,
                "magicDmg": 0,
                "physicArmorPercents": 0,
                "magicArmorPercents": 50,
                "cooldown": 0,
				"availability":true
            },
            {
                "name": "kick",
                "physicalDmg": 4,
                "magicDmg": 0,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 4,
				"availability":true
            },
            {
                "name": "fireball",
                "physicalDmg": 0,
                "magicDmg": 5,
                "physicArmorPercents": 0,
                "magicArmorPercents": 0,
                "cooldown": 3,
				"availability":true
            },
            {
                "name": "magic block",
                "physicalDmg": 0,
                "magicDmg": 0,
                "physicArmorPercents": 100,
                "magicArmorPercents": 100,
                "cooldown": 4,
				"availability":true
            },
        ]
	}
	while(monster.maxHealth>0&player.maxHealth>0){
		let comp_skill=get_turn();
	
	console.log("\n"+"компьютер сходил: "+comp_skill+"\n");
	
	console.log(monster.moves[comp_skill]);
	console.log("\n"+"\n");
	
	
	let usingSkill;
function player_turn(){	
let useSkill= readlineSync1.question("Введите название умения мага: "+"\n"+"для выхода из программы введите exit"+"\n");
if (useSkill=="exit"){return} else{
//let usingSkill;

	for(let i=0; i<player.moves.length; i++){
		if (player.moves[i].name==useSkill) {usingSkill=i;player_cooldown[i]=player.moves[i].cooldown;
		if (player.moves[i].name!=useSkill){console.log("введите доступное умение");player_turn()}}
	}
	if (player.moves[usingSkill]==undefined){console.log("введите доступное умение");player_turn()}else
	if (player.moves[usingSkill].availability==false){console.log("умение недоступно");player_turn()} 

	
	
	return usingSkill;
}
}
console.log("Доступные умения:  ");
for(let i=0;i<player.moves.length;i++){
	if(player.moves[i].availability==true){console.log(player.moves[i])}
}
	usingSkill=player_turn();
	
		function get_turn(){
		let skill_arr = [ 0, 1, 2];
		
         let comp_skill = skill_arr[Math.floor(Math.random() * skill_arr.length)];
		if (monster.moves[comp_skill].availability==false){return get_turn()}else{comp_cooldown[comp_skill]=monster.moves[comp_skill].cooldown}
		return comp_skill}
		//let comp_skill=get_turn();
	
	//console.log("компьютер сходил: ");
	//console.log(comp_skill);
	console.log(player_cooldown);
	console.log(comp_cooldown);

	
	// считаем урон нанесенный монстру
	let player_physic_dmg=(player.moves[usingSkill].physicalDmg-(player.moves[usingSkill].physicalDmg*(monster.moves[comp_skill].physicArmorPercents/100)));
	if(player_physic_dmg<0){player_physic_dmg=0};
	let player_magic_dmg=(player.moves[usingSkill].magicDmg-(player.moves[usingSkill].magicDmg*(monster.moves[comp_skill].magicArmorPercents/100)));
	if(player_magic_dmg<0){player_magic_dmg=0};
	let playerTotalDmg=player_physic_dmg+player_magic_dmg;
	monster.maxHealth=monster.maxHealth-playerTotalDmg;
	console.log("Игрок нанес "+playerTotalDmg+" урона");
	if(monster.maxHealth<=0){console.log("    МОНСТР ПОВЕРЖЕН    ")}else{
	console.log("У монстра осталось "+monster.maxHealth+" здоровья")};
	
	// Считаем урон нанесенный игроку
	
	let monster_physic_dmg=(monster.moves[comp_skill].physicalDmg-(monster.moves[comp_skill].physicalDmg*(player.moves[usingSkill].physicArmorPercents/100)));
	console.log(monster_physic_dmg);
	if(monster_physic_dmg<0){monster_physic_dmg=0};
	
	
	
	let monster_magic_dmg=(monster.moves[comp_skill].magicDmg-(monster.moves[comp_skill].magicDmg*(player.moves[usingSkill].magicArmorPercents/100)));
	if(monster_magic_dmg<0){monster_magic_dmg=0};
	
	let monsterTotalDmg=monster_physic_dmg+monster_magic_dmg;
	
	player.maxHealth=player.maxHealth-monsterTotalDmg;
	
	console.log("Монстр нанес "+ monsterTotalDmg+" урона");
	
	
	if(player.maxHealth<=0){console.log("   ВЫ УБИТЫ   ")}else{
	console.log("У игрока осталось"+player.maxHealth+" здоровья")};
	
	
	//считаем кулдауны
	
	for (let i=0;i<player_cooldown.length;i++){player_cooldown[i]=player_cooldown[i]-1;
	
	if (player_cooldown[i]<=0){player_cooldown[i]=0;player.moves[i].availability=true}else if(player_cooldown[i]>0){player.moves[i].availability=false}};


    for (let i=0;i<comp_cooldown.length;i++){comp_cooldown[i]=comp_cooldown[i]-1;
	if (comp_cooldown[i]<=0){comp_cooldown[i]=0;monster.moves[i].availability=true}else if(comp_cooldown[i]>0){monster.moves[i].availability=false}};
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	