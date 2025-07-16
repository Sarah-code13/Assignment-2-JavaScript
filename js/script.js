const output = document.querySelector(".output");
class Smoothie {
    constructor(size,flavor,milk, addons){
        this.size = size;
        this.flavor = flavor;
        this.milk = milk;
        this.addons = addons;
    }
    description() {
        let addText = this.addons.length > 0 ? this.addons.join(", ") : "no add ons chosen";
        return `You ordered a smoothie with a size ${this.size} with the flavor of ${this.flavor} with the type of milk ${this.milk}, and requested ${addText}.`;
    }
}
document.querySelector(".smoothie-form").addEventListener("click", function (event) {
    let size = document.querySelector(".size-cup").value;
    let flavor = document.querySelector(".smoothie-flavor").value;
    let milk = document.querySelector(".milk-type").value;
    let addons = [];

    for (let box of document.querySelectorAll(".addon:checked")) {
        addons.push(box.value);
    }
    let order = new Smoothie(size, flavor, milk, addons);
    output.textContent = order.description();

    let smoothieImage = document.createElement("img");
    smoothieImage.src = "images/smoothieCup.jpg";
    smoothieImage.height = 150;
    output.appendChild(smoothieImage);
} );