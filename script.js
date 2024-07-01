let data = [];

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault(); // Corrected: Call preventDefault as a function
    fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
        .then(res => res.json())
        .then(d => {
            data = d;
            data.forEach(element => {
                let table = document.querySelector("table");
                let tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${element.id}</td>
                    <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
                    <td>${element.gender}</td>
                    <td>${element.class}</td>
                    <td>${element.marks}</td>
                    <td>${element.passing}</td>
                    <td>${element.email}</td>
                `;
                table.appendChild(tr);
            });
        });
});

// Search function
function search() {
    let search = document.getElementById('search').value;
    console.log(search);
    let table = document.querySelector("table");

    // Clear existing rows from the table
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
        </tr>
    `;

    data.forEach(element => {
        if (
            element.id.toString().includes(search) ||
            element.first_name.toString().includes(search) ||
            element.last_name.toString().includes(search) ||
            element.gender.toString().includes(search) ||
            element.class.toString().includes(search) ||
            element.marks.toString().includes(search) ||
            element.passing.toString().includes(search) ||
            element.email.toString().includes(search)
        ) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${element.id}</td>
                <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
                <td>${element.gender}</td>
                <td>${element.class}</td>
                <td>${element.marks}</td>
                <td>${element.passing}</td>
                <td>${element.email}</td>
            `;
            table.appendChild(tr);
            console.log(table);
        }
    });
}

// Sort A-Z function
function shortAZ() {
    let table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
        </tr>
    `;

    data.sort((a, b) => {
        if (a.first_name < b.first_name) return -1;
        if (a.first_name > b.first_name) return 1;
        return 0;
    });

    data.forEach(element => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.id}</td>
            <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
            <td>${element.gender}</td>
            <td>${element.class}</td>
            <td>${element.marks}</td>
            <td>${element.passing}</td>
            <td>${element.email}</td>
        `;
        table.appendChild(tr);
    });
}

// Sort Z-A function
function shortZA() {
    let table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
        </tr>
    `;

    data.sort((a, b) => {
        if(a.first_name>b.first_name) return -1;
        
    });

    data.forEach(element => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.id}</td>
            <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
            <td>${element.gender}</td>
            <td>${element.class}</td>
            <td>${element.marks}</td>
            <td>${element.passing}</td>
            <td>${element.email}</td>
        `;
        table.appendChild(tr);
    });
}

// Sort by marks function
function marks() {
    let table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
        </tr>
    `;

    data.sort((a, b) => {
        if (a.marks < b.marks) return -1;
        if (a.marks > b.marks) return 1;
        return 0;
    });

    data.forEach(element => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.id}</td>
            <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
            <td>${element.gender}</td>
            <td>${element.class}</td>
            <td>${element.marks}</td>
            <td>${element.passing}</td>
            <td>${element.email}</td>
        `;
        table.appendChild(tr);
    });
}

// Sort by passing function
function passing() {
    let table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
        </tr>
    `;

    data.sort((a, b) => {
        if (a.passing < b.passing) return -1;
        if (a.passing > b.passing) return 1;
        return 0;
    });

    data.forEach(element => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.id}</td>
            <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
            <td>${element.gender}</td>
            <td>${element.class}</td>
            <td>${element.marks}</td>
            <td>${element.passing}</td>
            <td>${element.email}</td>
        `;
        table.appendChild(tr);
    });
}

// Sort by class function
function clas() {
    let table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
        </tr>
    `;

    data.sort((a, b) => {
        if (a.class < b.class) return -1;
        if (a.class > b.class) return 1;
        return 0;
    });

    data.forEach(element => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.id}</td>
            <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
            <td>${element.gender}</td>
            <td>${element.class}</td>
            <td>${element.marks}</td>
            <td>${element.passing}</td>
            <td>${element.email}</td>
        `;
        table.appendChild(tr);
    });
}



function gender() {
    let table = document.querySelector('table');
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
        </tr>
    `;
    data.sort((a, b) => {
        if (a.gender.localeCompare(b.gender) < 0) return -1;
        if (a.gender.localeCompare(b.gender) > 0) return 1;
        return 0;
    });
    data.forEach((element) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.id}</td>
            <td><img src="${element.img_src}"> ${element.first_name} ${element.last_name}</td>
            <td>${element.gender}</td>
            <td>${element.class}</td>
            <td>${element.marks}</td>
            <td>${element.passing}</td>
            <td>${element.email}</td>
        `;
        table.appendChild(tr);
        console.log(table);
    });
}