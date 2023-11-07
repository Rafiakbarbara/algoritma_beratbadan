let beratbadan = prompt("timbang berat badan")
let teksBeratBadan;

if(beratbadan >=100 && beratbadan <=120){
    confirm("gendut")
}else if(beratbadan >=85 && beratbadan <90){
    confirm("ga terlalu gendut")
}else if(beratbadan >=65 && beratbadan <70){
    confirm("agak kurus")
}else if(beratbadan >=40 && beratbadan <50){
    confirm("kurus")
}else if(beratbadan >=20 && beratbadan <30){
    confirm("sangat kurus")
}else{
    confirm("tulang")
}