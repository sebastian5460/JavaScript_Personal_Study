

let greeting = {

    greetingText: 'Hello',
    title: 'Sr.',

    greets: function(name, surName){

        console.log(`${this.greetingText} ${this.title} ${name} ${surName}`);
        
    }
    
    
}

let Mrs = {

    title: 'Mrs.',
    greetingText: 'Good Morning'
    
}

greeting.greets("Francesca", "White");
greeting.greets.call(Mrs, "Julia", "Gomez");
greeting.greets.apply(Mrs, ["Mary", "Gallo"]);
