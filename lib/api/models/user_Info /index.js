class UserInfo {
    __constructor(option) {
        this.id = option.id || "";
        this.name = option.name || "";
        this.location = option.type || {};
        this.date = option.date || Date.now();
    };    

    getData() {
        return {
            id: this.id,
            name: this.name,
            location: this.location,
            date: this.date,
        }
    }
}

module.exports = UserInfo;