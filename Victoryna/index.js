const fs = require('fs')
let count=0;
let numb;
let victory_arr=[];

		 let arr1=[];
		 function RND(a,b)
	{
		return Math.floor(Math.random()*(b-a+1)+a);
	}
		 function Make()
	{
		var s='';
		for (var i=0;i<5;i++) 
		{
			do 
			{
				var c=RND(1,8);
			}
			while(s.indexOf(c)>=0);
			s=s+c;
			arr1.push(c);
		}
		return arr1;
	}
		
console.log(Make());
for(let i=0;i<arr1.length;i++){		
let fileContent = fs.readFileSync("questions\\q"+arr1[i]+".txt", "utf8");

let a=fileContent.split("\r\n");
console.log(a[0]);


for(let i=2;i<a.length;i++){console.log(a[i])};
const readlineSync = require('readline-sync');
let answer=(readlineSync.question("Введите номер ответа: "));	
if((answer)==a[1]){console.log("Правильно!");count+=1}else console.log("НЕВЕРНО");
}
console.log(count);

