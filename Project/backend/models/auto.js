class Auto {
    constructor(id, brand, model, color, licensePlate) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.licensePlate = licensePlate;
    }

    toCSV() {
            return`${this.id}, ${this.brand}, ${this.model}, ${this.color}, ${this.licensePlate}`
    }

    toJSON(){
        return {
            id: this.id,
            brand: this.brand,
            model: this.model,
            color: this.color,
            licensePlate: this.licensePlate,
        };
    }
}

module.exports = Auto;