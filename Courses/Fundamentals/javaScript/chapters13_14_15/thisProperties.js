
let object = {

    number: 123,
    color: 'red',
    description: function() {
        console.log(this.color);
    }
    
}

object.description();