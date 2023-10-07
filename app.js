
//table
function addRow()
{

    var name = document.getElementById('studentname').value;
    var birthdate = document.getElementById('birthdate').value;
    const genderElements = document.getElementsByName('gender');
    var gender = '';
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }
    var phone = document.getElementById('phonenumber').value;
    var grade = document.getElementById('grade').value;

    
        var table = document.getElementsByTagName('table')[0];
        
    
        var newRow = table.insertRow(table.rows.length);
    
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
    
        cel1.innerHTML = name;
        cel2.innerHTML = birthdate;
        cel3.innerHTML = gender;
        cel4.innerHTML = phone;
        cel5.innerHTML = grade;

}

class Student {
    constructor(name, birthdate, gender,phone ,major,imageurl) {
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
        this.phone = phone;
        this.major = major;
        this.imageurl=imageurl;
    }
}

var studentinfo=[];
function student() {
    var name = document.getElementById('studentname').value;
    var birthdate = document.getElementById('birthdate').value;
    const genderElements = document.getElementsByName('gender');
    var gender = '';
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }
    var phone = document.getElementById('phonenumber').value;
    var major = document.getElementById('major').value;
    var image = document.getElementById('photo').value;

    studentinfo.push(new Student(name,birthdate,gender,phone,major,image));
    localStorage.setItem("students",JSON.stringify(studentinfo));
}


function card() {
    var info = document.getElementById('info');
    var data = JSON.parse(localStorage.getItem("students")); // Corrected key here
    if (data) {  // Check if data is not null or undefined
        data.forEach(data => {
           const card = document.createElement('div');
            card.innerHTML =  `
            <div class="row">
            <div class="col">
            <img src="media/Profile-Male-PNG.png"  width="100px" >
            <div class="card-body">
            <p>${data.name}</p>
            <p>${data.birthdate}</p>
            <p>${data.gender}</p>
            <p>${data.phone}</p>
            <p>${data.major}</p>
            </div>
            </div>
            <hr>
        
            `;
            info.appendChild(card);
        });
    } else {
        console.log("No data found in localStorage.");
    }

    
}

card();


