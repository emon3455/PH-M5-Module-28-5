console.log(new Date());

let day1 = new Date("2002-03-18");
let day2 = new Date("2002-012-18");

if(day1.getTime() < day2.getTime()){
    console.log("March is before december")
}
else{
    console.log("March was not before december");
}
