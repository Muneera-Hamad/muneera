function Course(title) {
    this.title = title
}

// لمنع التكرار
// we add the methods to the prototype
// to avoid the redundancy.

Course.prototype.add = function () {
    console.log("course has been added successfully!")
}

Course.prototype.drop = function () {
    console.log("course has been dropped successfully!")
}


var math = new Course("math") // create new object
console.log(math)
math.add()
math.drop()

var physics = new Course("physics") // create new object
console.log(physics)

var biology = new Course("biology") // create new object
console.log(biology)

