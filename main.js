console.log("main.js is linked");

const pets = [
    {
        image: 'https://i.ibb.co/fXJVGSy/bizzy.jpg',
        name: 'Biscuit',
        color: 'Black and White',
        specialSkills: 'Grooming, Being Sweet',
        typeOfPet: 'Cat' 
    },
    {
        image: 'https://www.thehappycatsite.com/wp-content/uploads/2018/01/silver-bengal-cat-names.jpg',
        name: 'Luna',
        color: 'Grey',
        specialSkills: 'Climbing, Being Sweet',
        typeOfPet: 'Cat' 
    },
    {
        image: 'https://vetstreet-brightspot.s3.amazonaws.com/03/33/05b00e9745899cccf4f595cbc083/Puggle-AP-JVNZL6-645lc050913.jpg',
        name: 'Basil',
        color: 'Brown',
        specialSkills: 'Being Sweet',
        typeOfPet: 'Dog' 
    },
    {
        image: 'https://i.pinimg.com/474x/6a/4e/f1/6a4ef167f8df75822329048def801e95--pikachu-cat-cute-pikachu.jpg',
        name: 'Pika',
        color: 'Yellow',
        specialSkills: 'Looks like Pikachu',
        typeOfPet: 'Cat' 
    },
    {
        image: 'https://wallpapercave.com/wp/NL7GHpE.jpg',
        name: 'Spike',
        color: 'Brown',
        specialSkills: 'Cool AF',
        typeOfPet: 'Dog' 
    },
    {
        image: 'https://i.kym-cdn.com/photos/images/newsfeed/001/297/938/8e6.png',
        name: 'Yoshi',
        color: 'Green',
        specialSkills: 'Flutter Jump, Ground Pound',
        typeOfPet: 'Dino' 
    }
];

const printToDOM = (message, divID) => {
    document.getElementById(divID).innerHTML = message;
}

const printPets = (arr) => {
    let stringToPrint = '';
    for (let i = 0; i < arr.length; i++) {
        const pet = arr[i];
        stringToPrint += `
        <div class="pet-card">
            <div class="pet-name">
                <h2>${pet.name}</h2>
            </div>
            <img src="${pet.image}"> 
            <p> <b>Color:</b> ${pet.color}</p>
            <p> <b>Special Skills: </b>${pet.specialSkills}</p>
            <div class="${pet.typeOfPet.toLowerCase()}">
            <p><b>${pet.typeOfPet}</b></p>
            </div>
        </div>
        `        
        } 
        printToDOM(stringToPrint, "pet-zone");                  
}

const buttonClick = (e) => {
    const petType = e.target.id;
    const selectedPets = [];
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        if (pet.typeOfPet.toLowerCase() + "s" === petType) {
            selectedPets.push(pet);
        }        
    } 
    printPets(selectedPets);
}
 const clickOnAll = () => {
     printPets(pets);
 }

document.getElementById('dogs').addEventListener('click', buttonClick);
document.getElementById('cats').addEventListener('click', buttonClick);
document.getElementById('dinos').addEventListener('click', buttonClick);
document.getElementById('allPets').addEventListener('click', clickOnAll);
