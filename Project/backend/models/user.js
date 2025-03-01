class User {
    constructor(id, lastName, firstName, phone, email, city) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.phone = phone;
        this.email = email;
        this.city = city;
    }

    toCSV() {
        return `${this.id}, ${this.lastName}, ${this.firstName}, ${this.phone}, ${this.email}, ${this.city}`
    }

    toJSON() {
        return{
        id:this.id,
        lastName:this.lastName,
        firstName:this.firstName,
        phone:this.phone,
        email:this.email,
        city:this.city  
     }
        
        
   };
}

module.exports = User;