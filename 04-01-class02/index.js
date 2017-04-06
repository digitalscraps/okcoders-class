var name = "xiu the scrump is prime bork bork"; 
var age = 1; //Setting age to 1
  console.log(name + " and is a good boi, " + "he is " + age + " years old");


var counter = 1;

for (var counter = 1; age <=(21 - counter); counter++) {

    tmpAge = age + counter;
    console.log ("in " + counter + " xiu will be " + tmpAge);

    oldAge = 21 - tmpAge;

if (tmpAge < 21) {
    console.log(name + " and is a good boi, " + "he is " + age + " years old");
} else if (tmpAge ===21) {
    console.log("Xiu is an old bork");
} else {
    console.log("xiu is a good boi");
}
}
