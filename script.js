var addListInput = document.getElementById('addList')
var enterListButton = document.getElementById('enterList')
var shoppingList = document.getElementById('shoppingList')
var listItems = document.querySelectorAll('li')
var deleteButtons = document.querySelectorAll('.delete')


function InputValid() {
    return addListInput.value.length > 0
}

function done() {
    this.classList.toggle("done");
}

function remove() {
    this.parentElement.remove();
}

function createListItem() {
    var li = shoppingList.appendChild(document.createElement('li'));
    li.appendChild(document.createTextNode(addListInput.value));
    var deleteBTN = li.appendChild(document.createElement('button'));
    deleteBTN.appendChild(document.createTextNode('Delete'));
    deleteBTN.classList.add('delete');
    li.onclick = done;
    deleteBTN.onclick = remove;
    addListInputvalue = '';
}

function addListAfterClick() {
    if (InputValid()) {
        createListItem()
    }
}

function addListAfterEnter(event) {
    if (event.keyCode === 13 && InputValid()) {
        createListItem()
    }
}

enterListButton.onclick = addListAfterClick
addListInput.onkeypress = addListAfterEnter

for (item of listItems) {
    item.onclick = done;
}

for (item of deleteButtons) {
    item.onclick = remove;
}

// button change
// clickMeButton.addEventListener("click", function () {
//     clickMeButton.classList.toggle('click');
// })