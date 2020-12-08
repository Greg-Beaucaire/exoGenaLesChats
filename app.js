// Cette fonction affiche les utilisateurs dans la console

async function userList(){
    let url = 'users.json';
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;
    for(let i=0; i<arrayLength; i++){
        console.log(commits.customers[i].user_name)
    }
}


// Cette fonction créé un array avec le nom de tout les animaux, ensuite on le tri et le transforme en string

async function petList(){
    let arrayPet = [];
    let url = 'users.json';
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;
    for(let i=0; i<arrayLength; i++){
        let arrayPetLength = commits.customers[i].user_pets.length;
        for(let y=0; y<arrayPetLength; y++){
            arrayPet.push(commits.customers[i].user_pets[y].pet_name);
        }
    }
    console.log(arrayPet.sort().join(" "));
}


// Cette fonction n'affiche que les utilisateurs possédents au moins un animal. Même méthode utilisée que celle du dessus.

async function userWithPetList(){
    let arrayUser = [];
    let url = 'users.json';
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;
    for(let i=0; i<arrayLength; i++){
        let arrayPetLength = commits.customers[i].user_pets.length;
        if(arrayPetLength >= 1){
            arrayUser.push(commits.customers[i].user_name);
        }
    }
    console.log(arrayUser.sort().join(" "));
}


//add

async function addMickey(){
    let url = 'users.json';
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;
    for(let i=0; i<arrayLength; i++){
        let arrayPetLength = commits.customers[i].user_pets.length;
        let y = arrayPetLength;
        var Mickey = { pet_name: "Mickey", pet_type: "Souris", pet_age: "0.1"};
        commits.customers[i].user_pets[y] = Mickey;
        console.log(commits.customers[i].user_pets);
    }
}

//Fact Cats o/

// Création d'une variable request à laquelle on assigne un objet XMLHttpRequest
function catFactFunc() {var request = new XMLHttpRequest()

// Création de la connection en utilisant du GET pour récupérer depuis l'url renseignée juste après 
request.open('GET', 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    data.forEach((catFact) => {
        console.log(catFact.text);
    })
}

// Execution de la requête
request.send()
}