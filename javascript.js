console.log('Project');

const new_btn = document.getElementById('new-btn');
const submit_btn = document.getElementById('submit-btn');
const mod = document.getElementById('mod');
let table = document.getElementById('data-table');
table = table.querySelector('tbody');

const data = () => {
    table.innerHTML = localStorage.getItem('save-table');
}
data();

new_btn.onclick = () => mod.style.display = 'block';

const roll_no = document.getElementById('roll-no');
const name = document.getElementById('name');
const office = document.getElementById('office');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const salary = document.getElementById('salary');

submit_btn.onclick = (e) => {
    e.preventDefault();
    mod.style.display = 'none';
    document.createElement('tr');
    let html = `
            <tr>
                <td onclick="input(this)">${roll_no.value}</td>
                <td onclick="input(this)">${name.value}</td>
                <td onclick="input(this)">${office.value}</td>
                <td onclick="input(this)">${age.value}</td>
                <td onclick="input(this)">${email.value}</td>
                <td onclick="input(this)">${phone.value}</td>
                <td onclick="input(this)">Rs. ${salary.value}</td>
                <td class="del" onclick="del(this)">x</td>
            </tr>`;
    table.insertAdjacentHTML('beforeend', html);
    roll_no.value = name.value = office.value = age.value = email.value = phone.value = salary.value = '';
    save();
}


function del(elem) {
    let conf = confirm('Are you sure to delete this record?');
    if (conf) {
        elem.parentElement.remove();
        save();
    }
}


const input = (element) => {    
    let or_text = element.innerText;
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = or_text;
    input.style.width = element.clientWidth - (2) + 'px';
    input.style.height = element.clientHeight - (2) + 'px';
    input.style.border = '0';
    input.style.background = 'rgb(235, 240, 173)';
    
    if (element == element.parentElement.children[6]) {
        input.setAttribute('type', 'number');
    }

    input.onblur = () => {
        if(input.type == 'number'){
            element.innerHTML = 'Rs. ' + input.value;
        }
        else {
            element.innerHTML = input.value;
        }
        element.style.padding = '10px';
        save();
    }

    input.onkeydown = (e) => {
        if (e.key == 'Enter') {
            input.blur();
        }
    }

    element.innerHTML = '';
    element.style.padding = '0';
    element.append(input);
    element.firstElementChild.select();
}


const save = () => {
    localStorage.setItem('save-table', table.innerHTML);
}
// localStorage.clear();