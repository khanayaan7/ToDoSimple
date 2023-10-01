let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let listNum = 0;
let worklist=[]
function darktoggle(){
    if($("#darkmode").is(":checked")){
        $("html").attr("data-bs-theme","dark")
    }
    else
    {
        $("html").attr("data-bs-theme","light")
    }
}

addList=()=>{
    // get
    let inputText = input.value;
    // set 
   if (inputText) {
    list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
                <div class="row">
                <div class="col-1">
                <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
                </div>
                <div class="col-6">
                    <span class=" h4" id="text${listNum}"> ${inputText} </span>
                </div>
                <div class="col-4">
                     <button class=" btn btn-dark" onclick="deleteList(${listNum})">Delete</button>
                     <button class=" btn btn-dark" onclick="editList(${listNum})">Edit</button>
                </div>                  
                 </div>    
                </li> `;
        input.value=" ";
        listNum++;

    }
}

done=(listId)=>{ 
    
    let checkbox = document.getElementById(`check${listId}`);
    let current = document.getElementById(`text${listId}`);
    let val =current.classList.contains("textshadow");
    if(val===true){
        current.classList.remove("textshadow");
    }
    else{
      current.classList.add("textshadow");
    }
}

editList=(listId)=>{
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Wanna Change list?",currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText; 
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
        console.log("deleted");
  
};

function toggleworkspace(){
    for(let i=0;i<listNum;i++){
        deleteList(i);
    }
    $(".container-fluid").toggleClass("headcolor");
    $("#extraspace").toggleClass("headcolor");
    $("#extraspace").toggleClass("bg-body-tertiary");
    $("body").toggleClass("restcolor");
}