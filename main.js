student_array =[];
function submit (){
    displaystudent_array =[];
    for(i=1;i<=4;i++){
        var name=document.getElementById("name_of_the_student_"+i).value
        console.log(name)
        student_array.push(name)
    }
    console.log(student_array)
    var length_studentarray=student_array.length
    console.log(length_studentarray)
    for(j=0;j<length_studentarray;j++){
    displaystudent_array.push("<h4> Name: "+student_array[j]+"</h4>");
    console.log(displaystudent_array)
    }
    document.getElementById("display_name_with_commas").innerHTML=displaystudent_array
    var remove_comma=displaystudent_array.join("");
    console.log(remove_comma)
    document.getElementById("display_name_without_commas").innerHTML=displaystudent_array
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    student_array.sort()
    console.log(student_array)
    displaystudent_newarray=[""]
    var length_studentarray=student_array.length
    console.log(length_studentarray)
    for(j=0;j<length_studentarray;j++){
    displaystudent_newarray.push("<h4> Name: "+student_array[j]+"</h4>");
    console.log(displaystudent_newarray)
    var remove_comma=displaystudent_newarray.join("");
    console.log(remove_comma)
    document.getElementById("display_name_without_commas").innerHTML=displaystudent_newarray
    }
}