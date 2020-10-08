const temp = {
    "Dinos": [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
}

function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

function Human(name, height_inches, weight, diet) {
    this.name = name;
    this.height = height_inches;
    this.weight = weight;
    this.diet = diet;
}

/*
This code snippet was modified from a StackOverflow example
*/
function hideForm() {
    var x = document.getElementById("dino-compare");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function dinoFromStr(dino) {
    let str = "This species was from " + dino.where;
    return str;
}

function dinoDatedStr(dino) {
    let str = "This species was alive during the " + dino.when + " period";
    return str;
}

function dinoFactStr(dino) {
    return dino.fact;
}

function compareDinoHumanHeight(dino, human) {
    let dino_ht = dino.height;
    let human_ht = human.height;
    let diff_ht = dino_ht - human_ht;
    let str = "";
    if (diff_ht < 0) { // human is taller
        str = "You are taller than " + dino.species + " by " + (diff_ht * -1).toString() + " inches!";
    } else { // dinosaur is taller
        str = "You are shorter than " + dino.species + " by " + diff_ht.toString() + " inches!";
    }
    return str;
}

function compareDinoHumanWeight(dino, human) {
    let dino_wt = dino.weight;
    let human_wt = human.weight;
    let diff_wt = dino_wt / human_wt;
    let str = "";
    if (dino_wt < human_wt) { // dino is lighter than the human
        str = dino.species + " was a small dinosaur. You are about " + (human_wt / dino_wt).toFixed(2) + " times heaveier than they were.";
    } else { // dino is heavier than the human
        str = "The " + dino.species + " was " + diff_wt.toFixed(0) + " times heavier than you!"
    }
    return str;
}

function compareDinoHumanDiet(dino, human) {
    let num = dino.diet.localeCompare(human.diet.toLowerCase());
    if ( num == 0) {
        return "Looks like you and this dino were both " + dino.diet + "s";
    } else {
        return "This dino had a different diet than you. They were a " + dino.diet;
    }
}

function randomFact(dino, human) {
    let rand = Math.floor(Math.random() * 6) + 1; // give us a random number between 1 and 6 inclusive.
    switch(rand) {
        case 1:
        return dinoFromStr(dino);
        case 2:
        return dinoDatedStr(dino);
        case 3:
        return dinoFactStr(dino);
        case 4:
        return compareDinoHumanHeight(dino, human);
        case 5:
        return compareDinoHumanWeight(dino, human);
        case 6:
        return compareDinoHumanDiet(dino, human);
    }
    return "A bad random number was generated";
}

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

/*
This code snippet was modified from:
https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
*/
function addTiles(dinos, human) {

    const ul = document.getElementById('grid');

    for (let i = 0; i < dinos.length; i++) {
        let dino = dinos[i];
        let li = createNode('li'),
        h3 = createNode('h3');
        img = createNode('img'),
        p = createNode('p');
        let nameLowercase = dino.species.toLowerCase();
        let randFact = (i == 7 ? "All birds are Dinosaurs" : randomFact(dino, human));
        img.src = "images/" + nameLowercase + ".png";
        li.setAttribute("class", "grid-item");
        h3.innerHTML = dino.species;
        p.innerHTML = randFact;
        append(li, h3);
        append(li, img); // Append all our elements
        append(li, p);
        append(ul, li);

        if (i == 3) { // need to manually add the human tile
            let li = createNode('li'),
            h3 = createNode('h3'),
            img = createNode('img');
            img.src = "images/human.png";
            li.setAttribute("class", "grid-item");
            h3.innerHTML = human.name;
            append(li, h3);
            append(li, img); // Append all our elements
            append(ul, li);
        }
    }

}

function createInfographic() {
    let dinos = [];
    let i;

    for (i = 0; i < temp['Dinos'].length; i++) {
        const tempDino = new Dino(temp['Dinos'][i].species, temp['Dinos'][i].weight, temp['Dinos'][i].height, temp['Dinos'][i].diet,
        temp['Dinos'][i].where, temp['Dinos'][i].when, temp['Dinos'][i].fact);
        dinos.push(tempDino);
    }

    let name = document.getElementById("name").value;
    let height_ft = Number(document.getElementById("feet").value);
    let height_in = Number(document.getElementById("inches").value);
    let weight = document.getElementById("weight").value;
    let diet = document.getElementById("diet").value;
    let total_height_in = (height_ft * 12) + height_in;

    let person = new Human(name, total_height_in, weight, diet);

    hideForm();
    addTiles(dinos, person);
}
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

