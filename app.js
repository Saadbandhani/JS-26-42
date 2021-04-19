// //chapter 26 -30
// //question 1
// var a =+prompt("Enter an number")
// document.write("number : "+a)
// document.write("<br>round off value : "+Math.round(a));
// document.write("<br>floor value : "+Math.floor(a));
// document.write("<br>ceil value : "+Math.ceil(a));
// //question 2
// var a =+prompt("Enter an number")
// document.write("number : "+a)
// document.write("<br>round off value : "+Math.round(a));
// document.write("<br>floor value : "+Math.floor(a));
// document.write("<br>ceil value : "+Math.ceil(a));
// //question 3
// var a = +prompt("Enter negative number")
// var b = Math.abs(a)
// document.write("The absolute value of "+a+" is " +b)
// //question 4
// var x = Math.floor((Math.random() * 7) + 1);
// document.write("random dice value : "+x)
// //question 5
// var a = Math.floor((Math.random() * 2) + 1);
// if (a==2){
// 	document.write(a+"<br>random coin value : Heads")
// }
// else{
// 	document.write(a+"<br>random coin value : Tails")
// }
// //question 6
// var a = Math.floor((Math.random() * 100) + 1);
// document.write("random number between 1 and 100 : "+a)
// //question 8
// var a = Math.floor((Math.random() * 10) + 1);
// var b =prompt("Input a number")
// if (a==b){
// 	document.write("Congragulation  you gess the same number")
// }
// //chapter 31-34
// //question 1
// var a = new Date();
// document.write(a)
// //question 2
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current Month : "+arr[b])
// //question 3
// var a = new Date();
// var b =a.getDay()
// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// alert("today is "+arr[b]);
// //question 4
// var a = new Date()
// var d = a.getDay()
// if (d==0 || d==6){
// 	alert("It’s Fun day")
// }
// //question 5
// var a = new Date();
// var b = a.getDate();
// if (b<16){
// 	alert("First fifteen days of the month")
// }
// else{
// 	alert("Last days of the month")
// }
// //question 6
// var a = new Date()
// document.write("Current Date : "+a)
// var b= a.getTime()
// document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
// var min = b/(1000*3600)
// document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)
// //question 7
// var a = new Date()
// b=a.getHours()
// if (b < 12){
// 	alert("Its AM")
// }
// else{
// 	alert("It's PM")
// }
// //question 8
// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)
// //question 9
// var a = new Date("Jun 18, 2015")
// b=a.getTime()
// var today = new Date()
// var tomili = today.getTime()
// var d = tomili-b
// d=d/(1000*3600*24)
// //d=Math.round(d)
// document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")
// //question 10
//  var start = new Date("Jan 01, 2015")
//  var startsec = start.getTime()
//  var end = new Date("Dec 05, 2015")
//  var endsec = end.getTime()
//  document.write("On reference date "+end+"<br>")
//  var dif = endsec-startsec;
//  document.write(dif/(1000*60)+" seconds had passed since begining of 2015")
// //question 11
// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getHours()
// var d = new Date();
// a=ab-1
// d.setHours(a)
// document.write("1 hour ago, it was "+d)
// //question 12
// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getFullYear()
// var d = new Date();
// a=ab-100
// d.setFullYear(a)
// document.write("100 year back, it was "+d)
// //question 13
// var age = prompt("enter your age")
// var a = new Date()
// var year = a.getFullYear()
// document.write("Your age is "+age)
// dif=year-age
// document.write("<br>Your birth year is "+dif)
// //question 14
// var name ="ABC Customer"
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = arr[b]
// var unit = 410
// var chrg = 16
// var net = unit*chrg
// var late =350
// var gross =net +late
// document.write("<h1>K-Electric Bill </h1>")
// document.write("<br>Customer Name  "+name)
// document.write("<br> Current Month "+month)
// document.write("<br>  Number of units "+unit)
// document.write("<br> Charges per unit "+chrg+"<br>")
// document.write("<br>Net Amount Payable (within Due Date) "+net)
// document.write("<br>Late Payment Surcharge  "+late)
// document.write("<br>Gross Amount Payable (after Due Date)  "+gross)
// //chapter 35-38
// //question 1
// function dateandtime(){
// 	var a = new Date()
// 	alert(a)
// }
// dateandtime()
// //question 2
// var a = prompt("Enter your First Name")
// var b = prompt("Enter your last Name")
// Name(a,b)
//  function Name(a,b){
//  	document.write("Hello "+a+" "+b)
//  }
 
//  //question 3
//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// document.write(Add(a,b))
//  function Add(a,b){
//  	return a+b;
//  }
 
//  //question 4
//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// var c = prompt("Enter Character")
// document.write(Calculator(a,b,c))
// function Calculator(a,b,c){
// 	if (c=="+") {
// 		return a+b
// 	}
// 	else if (c=="-") {
// 		return a-b
// 	}
// 	else if (c=="/") {
// 		return a/b
// 	}
// 	else if (c=="%") {
// 		return a%b
// 	}
// }
// //question 5
//  var a = +prompt("Enter number")
// Square(a)
//  function Square(a){
//  	document.write(Math.pow(a,2))
//  }
 
//  //question 6
//  var a = +prompt("Enter number")
//  document.write(Factorial(a))
//  function Factorial(n) { 
//             if (n === 0) {  
//                 return 1;  
//             } 
//             else {  
//                 return n * Factorial( n - 1 );  
//             } 
//  }
 
//  //questionn 7
//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// Counting(a,b)
// function Counting(a,b){
// 	for (var i = a; i <= b; i++){
// 		document.write(i+"<br>")
// 	}
// }
// //question 8 
// function hypotenuse(a, b) {
//                function square(x) { return x*x; }
//                return Math.sqrt(square(a) + square(b));
// }
// document.write(hypotenuse(1,2))
// //question 9
// var a = +prompt("Enter width")
// var b = +prompt("Enter height")
// function CalculatesArea(w,h){
// 	document.write("<br>Area of Rectangle : "+(w*h))
// }
// CalculatesArea(a,b)
// CalculatesArea(8,4)
// //question 10
// function palindrome(str){
// 	var splitString = str.split("");
// 	var reverseArray = splitString.reverse();
// 	var joinArray = reverseArray.join("");
// 	if (str == joinArray){
// 		document.write("String is palindrome")
// 	}
// 	else{
// 		document.write("String is not palindrome")
// 	}
// }
// palindrome("mad")
// palindrome("madam")
// //question 11
// var a ="the quick brown fox";
// UppperCase(a);
// function UppperCase(str){
// 	document.write("Example String : " +str+"<br>")
// 	x=str.slice(0,1)
// 	y=x.toUpperCase()
// 	var sttr= str.split('')
// 	for (var i = 0; i < sttr.length; i++) {
// 		if (sttr[i] == ' '){
// 			j=i+1
// 			k=sttr[j].toUpperCase()
// 			sttr[j]=k
// 		}
// 	}
// 	sttr[0]=y
// 	var abc =sttr.join("")
// 	document.write("Expected Output : "+abc)
// }
// //question 12
// var a="Web Development Tutorial"
// LongestWord(a)
// function LongestWord(str){
// 	var ar =str.split('')
// 	var b =1
// 	var arr=[0]
// 	var word=[]
// 	var count =[]
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i] == ' ') {
// 			arr[b]=i
// 			b+=1
// 		}
// 	}
// 	arr[b]=ar.length
// 	b=0
// 	//document.write(arr)
// 	for (var i = 0; i < arr.length-1; i++) {
// 		j=i+1
// 		word[b]=str.slice(arr[i],arr[j])
// 		b=b+1
// 	}
// 	b=0
// 	//document.write("<br>"+word)
// 	for (var i = 0; i < word.length; i++) {
// 		if (b ==0){
// 		count[b]=word[b].length
// 		b=b+1
// 	}
// 	else{
// 		count[b]=word[b].length-1
// 		b=b+1
// 	}
// 	}
// 	//document.write("<br>"+count)
// 	var max =Math.max(...count)
// 	//document.write(" <br>"+max)
// 	var ind =count.indexOf(max)
// 	document.write("EXAMPLE STRING : "+str)
// 	document.write("<br>EXPECTED OUTPUT : "+word[ind])
// }
// //question 13
// function Occurrences(a,b){
// 	a=a.toLowerCase()
// 	var ar= a.split('')
// 	var count =0
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i]==b) {
// 			count+=1
// 		}
// 	}
// 	document.write("Occurrences of letter "+b+" is : "+count)
// }
// Occurrences("JSResourceS.com","o")
// //question 14
// function calcCircumference(r){
// 	var a = Math.PI
// 	var circum = 2*a*r
// 	document.write("The circumference is : "+circum+"<br>")
// }
// function calcArea(r){
// 	var a = Math.PI
// 	ra =Math.pow(r,2)
// 	var area =a*ra
// 	document.write("The area is : "+area)
// }
// calcCircumference(2)
// calcArea(2)



// //chapter no 38 - 42
// // question 1
// const power = (a,b) => Math.pow(a,b)
// console.log(power(8,2))
// //question 2
// const checkleap = (year) =>{
//     if(year%4===0){
//         console.log(`${year} is leap year`)
//     }
//     else{
//         console.log(`${year } is not leap year`)
//     }
// }
// checkleap(2017)
// //question 3
// const s = (x,y,z) => (x+y+z)/2
// const Area = (a,b,c) => {
//     sa = s(a,b,c)
//     return Math.sqrt(sa*(sa-a)*(sa-b)*(sa-c))
// }
// console.log(Area(3,4,5))
// //question 4
// const avrg = (a,b,c) => (a+b+c)/3
// const percentage = (a,b,c) => (((a+b+c)*100)/300)
// const main = (a,b,c) =>{
//     console.log(`Your averga marks are ${avrg(a,b,c)} 
// Your Percentage is ${percentage(a,b,c)}%`)
// }
// main(70,80,90)
// //question 5
// const findindexof = (str,letter) =>{
//     count=0
//     for(i=1;i<=str.length;i++){
//        if(letter===str.slice(i-1,i)){
//            return i
//        }
//     }
//     return `letter not in the string`
// }
// str="abcdef"
// console.log(findindexof(str,"a"))
// //question 6
// str ="vowels"
// //console.log(str.replace("c",""))
// const replacevowel = (str) =>{
//     if(str.length>25){
//         console.log(`Sorry string length length is greater then 25`)
//     }
//     for (i of str){
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//             str=str.replace(i,"")
//         }
//     }
//     console.log(str)
// }
// replacevowel(str)
// //question 7
// const occurence = (str) =>{
//     document.write(str+"<br>")
//     document.write("Such occurrence are ")
//     for(i=0;i<str.length-1;i++){
//         x=str.slice(i,i+2)
//         if(x==="aa" || x==="ae" || x==="ai" || x==="ao" || x==="au" || x==="ea" || x==="ee" || x==="ei" || x==="eo" || x==="eu" || x==="ia" || x==="ie" || x==="ii" || x==="io" || x==="iu" || x==="oa" || x==="oe" || x==="oi" || x==="oo" || x==="ou" || x==="ua" || x==="ue" || x==="ui" || x==="uo" || x==="uu"){
//             document.write(x+" ,")
//         }
//     }
// }
// occurence("Pleases read this application and give me gratuity")
// //question 8
// km = prompt("Please enter the distance in km")
//  const m = (km) => km*1000
//  const feet = (km) => km*3280.84
//  const inch = (km) => km*39370.1
//  const cm = (km) => km*100000
//  document.write(m(km)+"<br>")
//  document.write(feet(km)+"<br>")
//  document.write(inch(km)+"<br>")
//  document.write(cm(km)+"<br>")
 
// //question 
// amount=prompt("Enter amount to withdraw")
// const cashier = (amount) =>{
//     a=amount%100
//     hndr=amount-a
//     hndr=hndr/100
//     ten=a%50
//     fifty=a-ten
//     fifty=fifty/50
//     ten=ten/10
//     document.write(`you will have ${hndr} hundred notes ${fifty} fifty notes ${ten} Ten notes`)
// }
// cashier(amount)
