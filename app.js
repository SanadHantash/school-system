
//table
// function addRow()
// {

//     let name = document.getElementById('studentname').value;
//     let birthdate = document.getElementById('birthdate').value;
//     const genderElements = document.getElementsByName('gender');
//     let gender = '';
//     for (const element of genderElements) {
//         if (element.checked) {
//             gender = element.value;
//             break;
//         }
//     }
//     let phone = document.getElementById('phonenumber').value;
//     let grade = document.getElementById('grade').value;

    
//         let table = document.getElementsByTagName('table')[0];
        
    
//         let newRow = table.insertRow(table.rows.length);
    
//         let cel1 = newRow.insertCell(0);
//         let cel2 = newRow.insertCell(1);
//         let cel3 = newRow.insertCell(2);
//         let cel4 = newRow.insertCell(3);
//         let cel5 = newRow.insertCell(4);
    
//         cel1.innerHTML = name;
//         cel2.innerHTML = birthdate;
//         cel3.innerHTML = gender;
//         cel4.innerHTML = phone;
//         cel5.innerHTML = grade;

// }

class Student {
    constructor(name, birthdate,gender,phone ,major,imageurl) {
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
        this.phone = phone;
        this.major = major;
        this.imageurl=imageurl;
    }

}


let student = document.getElementById("student");
student.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById('studentname').value;
    let birthdate = document.getElementById('birthdate').value;
    const genderElements = document.getElementsByName('gender');
    let gender = '';
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }
    let phone = document.getElementById('phonenumber').value;
    let major = document.getElementById('major').value;
    let image = document.getElementById('photo').value;
    const student = new Student(name,birthdate,gender,phone,major,image);
    savedata(student);
});
    function savedata(student) {
        const stored = JSON.parse(localStorage.getItem('students'))|| [];
        stored.push(student);
        localStorage.setItem("students",JSON.stringify(stored));
        let info = document.getElementById('info');
        let card = document.createElement('div');
        card.innerHTML =  `
        <div class="card" style="width: 18rem;">
        <img src="media/Profile-Male-PNG.png"  width="100px">
        <div class="card-body ">
        <p>${student.name}</p>
        <p>${student.birthdate}</p>
        <p>${student.gender}</p>
        <p>${student.phone}</p>
        <p>${student.major}</p>
        </div>
        </div>
        `;
        info.appendChild(card); 

    } 

    function render() {
        let info = document.getElementById('info');
        let storedstudent = JSON.parse(localStorage.getItem('students'));
        storedstudent.forEach((student)=>{
            let card = document.createElement('div');
        card.innerHTML =  `
        <div class="card" style="width: 18rem;">
        <img src="media/Profile-Male-PNG.png"  width="100px">
        <div class="card-body ">
        <p>${student.name}</p>
        <p>${student.birthdate}</p>
        <p>${student.gender}</p>
        <p>${student.phone}</p>
        <p>${student.major}</p>
        </div>
        </div>
        `;
        info.appendChild(card); 
        });
    }

    render();
    








