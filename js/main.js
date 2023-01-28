var num1=parseInt(prompt("Enter number 1"));
var num2=parseInt(prompt("Enter number 2"));
var num3=parseInt(prompt("Enter number 3"));

if (num1>=num2 && num1>=num3){
    if (num2>=num3){
        console.log("Descending is", num1, num2, num3);
        console.log("Ascending is ", num3, num2, num1);
    }
    else{
        console.log("Descending is", num1, num3, num2);
        console.log("Ascending is ", num2, num3, num1);
    }
}
else if (num2>=num1 && num2>=num3){
    if (num1>=num3){
        console.log("Descending is", num2, num1, num3);
        console.log("Ascending is ", num3, num1, num2);
    }
    else{
        console.log("Descending is", num2, num3, num1);
        console.log("Ascending is ", num1, num3, num2);
    }
}
else if (num3>=num1 && num3>=num2){
    if (num1>=num2){
        console.log("Descending is", num3, num1, num2);
        console.log("Ascending is ", num2, num1, num3);
    }
    else{
        console.log("Descending is", num3,num2, num1);
        console.log("Ascending is ", num1,num2, num3);
    }
}