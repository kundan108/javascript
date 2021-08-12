const tudos = document.querySelector(".todos");
const addFrm = document.addfrm;
const text = addFrm.add;
const searchText = document.querySelector(".search input");
console.log(searchText);

addFrm.addEventListener("submit", (e) => {
    e.preventDefault();
    let item = text.value;
    console.log(item);
    if (item.length > 0) {
        addItem(item);
        text.value = "";
    }
});

function addItem(item) {
    tudos.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`
}

tudos.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});
// ul.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         console.log(li.parentElement);
//     });
// });

let searchItem = (text) => {
    let listitems = tudos.children;
    for (let li of listitems) {
        if (li.innerText.toLowerCase().indexOf(text) === -1) {
            li.classList.add("filtered");
        } else {
            li.classList.remove("filtered");
        }
    }
}

searchText.addEventListener("keyup", (e) => {
    e.preventDefault();
    searchItem(searchText.value.toLowerCase())
});