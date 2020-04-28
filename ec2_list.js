// Configs
const SERVER_URL = 'localhost';
const SERVER_PORT = '8080';

window.onload = function () {
    document.getElementsByName("loadData").forEach(function (submit) {
        submit.addEventListener("click", loadData);
    });
};

const loadData = (event) => {
    removeError();
    clearData();
    
    fetch("http://" + SERVER_URL + ":" + SERVER_PORT + "/ec2", null).then((response) => {
        return response.json();
    }).then((data) => {
        displayData(data);
    }).catch(() => { 
        displayError();
    });
};

const displayError = () => {
    document.getElementById("errors").innerHTML = "Could not connect to server!";
};

const removeError = () => {
    document.getElementById("errors").innerHTML = "";
};

const displayData = (data) => {
    const table = document.getElementById("dataTable");
    let thead = table.createTHead();
    let row = thead.insertRow();
    let keys = Object.keys(data[0]);

    for (let key of keys) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }

    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
};

const clearData = () => {
    let element = document.getElementsByTagName("tr");
    for (index = element.length - 1; index >= 0; index--)
    {
        element[index].parentNode.removeChild(element[index]);
    }
};