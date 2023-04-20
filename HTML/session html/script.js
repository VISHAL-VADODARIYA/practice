function initiate() 
{
    var saveButton = document.getElementById('save');
    var retrieveButton = document.getElementById('retrieve');
    var deleteButton = document.getElementById('delete');
    var reviewButton = document.getElementById('review');

    saveButton.addEventListener('click', saveItem);
    retrieveButton.addEventListener('click', retrieveItem);
    deleteButton.addEventListener('click', deleteItem);
    reviewButton.addEventListener('click', reviewAll);
}

function saveItem() 
{
    var key = document.getElementById('key').value;
    var value = document.getElementById('value').value;
    sessionStorage[key] = value;
     
}

function retrieveItem(){

    var data = document.getElementById('data');
    var key = document.getElementById('key').value;
    var value = sessionStorage[key];
    data.innerHTML = '<div>' + key + ': ' + value + '<div>'; 
}

function deleteItem(){
    if(confirm('Delete?'))
    {
        var key = document.getElementById('key').value;
        sessionStorage.removeItem(key);
        data.innerHTML = '<div>Deleted.</div>';
    }
}

function reviewAll()
{
    for (var i = 0 ; i < sessionStorage.length ; i++) 
    {
        var key = sessionStorage.key(i);
        var value = sessionStorage[key];
        data.innerHTML += '<div>' + key + ': ' + value + '<br></div>';    
        
    }
}

addEventListener("load", initiate);