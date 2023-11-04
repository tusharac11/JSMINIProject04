const notesContainer =document.querySelector(".notes-container");
const createBtn =document.querySelector(".btn");
let notes =document.querySelectorAll(".input-box");

//when we come again on home page then it should check if local
//storage contains any information /notes or not

function showNotes(){
    notesContainer.innerHTML =localStorage.getItem("notes");
}
showNotes();//calling
//local staorage

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);//storing wht we write

}

//function
createBtn.addEventListener("click" ,()=>{
    let inputBox =document.createElement("p");
    let img =document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);//to display add it into notescontainer

})
//delete function

notesContainer.addEventListener("click" ,function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();//update after deleting

    }
    else if(e.target.tagName === "p"){
         notes =document.querySelectorAll(".input-box");
         notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();//i.e it will update storage when start stping ,edit,...
            }
         })
    }
})


