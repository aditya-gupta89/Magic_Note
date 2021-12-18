showNotes();
let addBtn = document.getElementById('addBtn');


addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    let addTitle=document.getElementById('addTitle');
    let addObj={
        Text:addTxt.value,
        Title:addTitle.value
    }
    if (notes == null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);
    notesObj.push(addObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    addTitle.value='';
    showNotes();
})
    function showNotes() {
        let notes = localStorage.getItem('notes');
        if (notes == null)
            notesObj = [];
        else
            notesObj = JSON.parse(notes);
        let html = '';
        let notesElm=document.getElementById('notes');
        if(notesObj.length==0){
        html='Nothing to show';
        notesElm.innerHTML=html;
        }
        else
        notesObj.forEach(function (element, index) {
            html += `
            <div class="noteCard my-2 mx-2 card " style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.Title}</h5>
              <p class="card-text">${element.Text}</p>
              <button onclick="deleteNodes(${index})" class="btn btn-primary">Delete Notes</button>
            </div>
          </div>    `;
          
          notesElm.innerHTML=html; 
          console.log("Aditya");
        })
    }
function deleteNodes(element)
{
    console.log(element);
    let notes = localStorage.getItem('notes');
    if (notes == null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);
    notesObj.splice(element,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
let search=document.getElementById('searchTxt');
let button=document.getElementById('bu')
button.addEventListener("click", function(e){
    e.preventDefault();
    let inputVal = search.value;
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
        
        
    })
})
search.addEventListener('input',function()
{
    let inputval=search.value;
    if(inputval=='')
    showNotes();
    
})