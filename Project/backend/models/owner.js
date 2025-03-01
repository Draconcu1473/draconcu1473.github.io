class Owner {
    constructor(userId, autoId, registrationDate, deregistrationDate){
        userId = this.userId;
        autoId = this.autoId;
        registrationDate = this.registrationDate;
        deregistrationDate = this.deregistrationDate;
    }

    toCSV(){
        return`${this.userId}, ${this.autoId}, ${this.registrationDate}, ${this.deregistrationDate}`
    }

    toJSON(){
        return{
            userId: this.userId,
            autoId: this.autoId,
            registrationDate: this.registrationDate,
            deregistrationDate: this.deregistrationDate,
        }
    };
}

module.exports = Owner;