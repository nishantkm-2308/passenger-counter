let countDisplay = document.getElementById('count');

let count = 0;
function increment(){
    count +=1;
    countDisplay.innerText = count;
}

let entries = document.getElementById('save');
function save(){
    entries.innerText += ' '+count + '-';
    countDisplay.textContent = 0;
    count = 0;
}
