console.log("Hello there");

var addBtn = document.getElementById("addBtn");
var txtArea = document.getElementById("txtArea");
var headArea = document.getElementById("headArea");
var notes = document.querySelector("#notes");

function addnotes() {
    let txtval = txtArea.value;

    let headval = headArea.value;

    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card-body mt-3">
                <h2 class="card-title">${headval}</h2>
                <p>${txtval}</p>
                <button  class="btn btn-primary" id = "dltBtn">delete note</a>
            </div>

    `;
    notes.appendChild(card);

    var deleteBtn = card.querySelector("#dltBtn");

    deleteBtn.addEventListener("click", function () {
        card.remove();
    });
}

addBtn.addEventListener("click", function () {
    if (headArea.value == " ") {
       alert("please enter Title and discription to create notes ")
    }
    else{
        addnotes();
        txtArea.value = " ";
        headArea.value = " ";
    }
});
