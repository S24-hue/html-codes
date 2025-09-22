let student={
    name:"sree rajesh",
    grade:85,
    subject:["math","science","english"],

    displayinfo:function(){
        console.log("name :"+this.name);
        console.log("grade:"+this.grade);
        console.log("subject:"+this.subject.join(","));
    }


}
function CheckGrade(studentObj){
    if(studentObj.grade>=50 ){
        studentObj:passed=true;

    }
    else{
        studentObj:passed=false;
    }
}
student.displayinfo();
CheckGrade(student);
console.log("\n student object details:");
for(let key in student){
    console.log(`${key}:${student[key]}`);
}