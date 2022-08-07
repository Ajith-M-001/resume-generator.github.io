function addNewWefield() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weFeild')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Experience')


    let weob = document.getElementById('we')
    let weAddButtonob = document.getElementById('weAddButton')

    weob.insertBefore(newNode, weAddButtonob)
}

function addNeweqfield() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqFeild')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Education')


    let eqob = document.getElementById('eq')
    let eqAddButtonob = document.getElementById('eqAddButton')

    eqob.insertBefore(newNode, eqAddButtonob)
}

function generateresume() {

    let nameField = document.getElementById('namefield').value

    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField

    document.getElementById('nameT2').innerHTML = nameField


    document.getElementById('contactT').innerHTML = document.getElementById('contactfield').value


    document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value


    document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value


    document.getElementById('instaT').innerHTML = document.getElementById('instafield').value


    document.getElementById('linkedT').innerHTML = document.getElementById('linkedfield').value


    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value


    let wes = document.getElementsByClassName('weFeild')

    let str = " ";

    for (let e of wes) {
        str = str + `<li>${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML = str;


    let eqs = document.getElementsByClassName('eqFeild')

    let str1 = " ";

    for (let e of eqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }


    document.getElementById('eqT').innerHTML = str1;

    let file = document.getElementById('imgfield').files[0]
    console.log(file)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result)

    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result
    }

    document.getElementById('cv-from').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'
}


function printcv() {
    window.print();
}