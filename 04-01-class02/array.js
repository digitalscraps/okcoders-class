var myFunction = { // create an object

count : 1,  //create variable inside of object

first : function(num) {
    console.log("this is my " + num+ " function");
    num='second';
    return num;
},

counter : function() {
    if(this.count === 1) {
        this.count++;
        return "First";
    }
    return "Not First";
},
}

myFunction.first(myFunction.counter());
var result = myFunction.first(myFunction.counter());

console.log(result);