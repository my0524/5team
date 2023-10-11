const liElements = document.querySelectorAll("li");

for (const liElement of liElements) {
    liElement.addEventListener("click", (event) => {
    const divElement = liElement.querySelector(".my_listA");
    divElement.classList.toggle("active");
});
}