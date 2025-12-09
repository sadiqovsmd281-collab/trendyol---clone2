let search = document.querySelector(".search");
let input = document.getElementById("searchIn");

input.addEventListener('focus', () =>{
    search.classList.add("active");
});

input.addEventListener('blur', () => {
    if (input.value === "") {
        search.classList.remove("active");
    }
});