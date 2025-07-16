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
