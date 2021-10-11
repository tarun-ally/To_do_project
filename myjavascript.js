var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');
// var

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemlist.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItem);
// add item
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById("item").value;

    //  create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';
    // console.log(li);
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);
    // li

    itemlist.appendChild(li);

}
// remove item
function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure about removing these item?')) {
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }

    }
}
// filter item
function filterItem(e) {
    // convert text to lowerCase
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display ='none';
        }
    })
}