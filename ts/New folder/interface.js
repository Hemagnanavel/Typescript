var user = { name: "john", id: 1, email: '' };
var employee = { name: "john", id: 1, email: '', salary: 1000 };
var _a = [
    { name: "john", id: 1, email: '' },
    { name: "john1", id: 2, email: '' },
    { name: "john2", id: 3, email: '' },
    { name: "john3", id: 4, email: '' },
], user1 = _a[0], user2 = _a[1], restUsers = _a.slice(2);
console.log(user1);
console.log(user2);
console.log(restUsers);
