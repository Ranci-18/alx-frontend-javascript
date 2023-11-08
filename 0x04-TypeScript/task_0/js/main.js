var student1 = {
    firstName: 'Frank',
    lastName: 'Wanyoike',
    age: 30,
    location: 'Nairobi'
};
var student2 = {
    firstName: 'Nimmo',
    lastName: 'Rahma',
    age: 28,
    location: 'Nakuru'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
