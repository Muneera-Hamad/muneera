// we define the constructor
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

// we add methods to prototype
// to avoid redundancy

User.prototype.login = function () {
    console.log("logged in!");
}

User.prototype.logout = function () {
    console.log("logged out!");
}

// we create the object using the constructor
var user1 = new User("Muneera Hamad", "muneera123@gmail.com", "1234abcd");
var user2 = new User("Ali Abdulaziz", "ali_abdulaziz@gmail.com", "pa$$W0rd#123");

console.log(user1.name);
console.log(user1.email);
user1.login();
user1.logout();
