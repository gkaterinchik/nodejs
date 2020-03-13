function main()
{
	
let difficult_arr = [ 1000, 10000, 100000];
difficult = difficult_arr[Math.floor(Math.random() * difficult_arr.length)];
function getRandom() 
{                                                            
	rand=Math.random();
	if (rand<0.1){getRandom()}
	else rand=Math.ceil(rand*difficult);
	return rand;
}
console.log(getRandom());

rand+="";
let str="";
for(let i=0; i<rand.length;i++){str+=" * "};
console.log("Угадайте число"+"\n");
console.log(str+"\n");


const readlineSync = require('readline-sync');



let number = readlineSync.question("Введите число: "+"\n");
if (number=="exit"||number=="выход") return;
if(number==rand){console.log("Вы угадали!");}

while(rand!=number)
{

let arr_number=number.split("");
let arr_rand=rand.split("");
let arr_match=new Array();
let arr_contains= new Array();
let a=0;


for(let i=0;i<arr_rand.length; i++)
	{if(arr_rand[i]==arr_number[i])
		{a+=1;
		arr_match.push(i);
		}
	}
let b=0;

for(let i=0; i<arr_match.length; i++)
	{
		delete arr_rand[arr_match[i]];
	}
	
	
for(let i=0;i<arr_number.length;i++)
	{
		for(let j=0;j<arr_rand.length;j++)
		{
			if(arr_number[i]==arr_rand[j])
				{
					b+=1;
				}
		}
	}

console.log("цифр на своих местах: "+a+"\n");
//console.log(arr_match);
//console.log(arr_rand);
//console.log(arr_rand.length);
console.log("совпавших цифр не на своих местах: "+b+"\n");
number = readlineSync.question("Введите число: "+"\n");
if (number=="exit"||number=="выход") return;
if(number==rand){console.log("Вы угадали!"+"\n");return;}


}
}

main();
