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
document.querySelector(".submit").addEventListener("click", function (event) {
    let size = document.querySelector(".Size-Cup").value;
    let flavor = document.querySelector(".Smoothie-Flavor").value;
    let milk = document.querySelector(".milk-type").value;
    let addons = [];

    for (let box of document.querySelectorAll(".addon:checked")) {
        addons.push(box.value);
    }
    let order = new Smoothie(size, flavor, milk, addons);
    output.textContent = order.description();

    let smoothieImage = document.createElement("img");
    switch (flavor) {
        case "strawberry":
            smoothieImage.src = "images/strawberry.jpg";
        break;
        case "banana":
            smoothieImage.src = "images/banana.jpg";
        break;
        case "mango":
            smoothieImage.src = "images/mango.jpg";
        break;
        case "chocolate":
            smoothieImage.src = "images/chocolate.jpg";
        break;
        case "green-apple":
            smoothieImage.src = "images/greenapple.jpg";
        break;
        case "pineapple":
            smoothieImage.src = "images/pineapple.jpg";
        break;
        case "mixed-berry":
            smoothieImage.src = "images/mixedberry.jpg";
        break;
        case "passionfruit":
            smoothieImage.src = "images/passionfruit.jpg";
        break;
        default:
            smoothieImage.src = "images/smoothieCup.jpg";
    }
    smoothieImage.height = 150;
    output.appendChild(smoothieImage);
} );