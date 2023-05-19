const controls =
 document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
//adição de const a alguns elementos e definição do let como 0
controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }
        if (currentItem < 0){
            currentItem = maxItems - 1;
        } //adição de diferentes itens e variaveis ao coerente comando

        items.forEach((item) =>
        item.classList.remove("current-item"));

        items[currentItem].scrollIntoView ({
            behavior: "smooth",
            inline: "center"
        }); //rolagem do carousel funcional

        items[currentItem].classList.add("current-item");
    });
});