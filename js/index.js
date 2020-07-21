var count = 0;
var selectedRow = null;

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}


function add(data) {
    count++;
    var table = document.getElementById("tbl_info").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = count;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="edit(this)" class = 'btn btn-warning'>Sửa</button>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onClick="onDelete(this)" class = 'btn btn-danger'>Xóa</button>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;
}

function edit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").innerHTML = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td) {
    if (confirm("Bạn có chắc muốn xóa bản ghi này không?")) {
        row = td.parentElement.parentElement;
        document.getElementById("tbl_info").deleteRow(row.rowIndex);
        resetForm();
    }
}

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        add(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}