document.addEventListener('DocumentLoaded', function (){
    const generateButton = document.getElementById('generate-outfit');
    const outfitDisplay = document.getElementById('outfit-display');

    const clothingCategories =['Tops', 'Bottoms','Shoes'];
    generateButton.addEventListener('click',generateOutfit);

    function generateOutfit(){
        const outfit = {};

        clothingCategories.forEach(category=>{
            const randomItem = getRandomItem (category);
            outfit[category] = randomItem;
        });

        displayOutfit(outfit);
    }

    function getRandomItem(category) {
        const items = {
            'Tops': ['T-shirt', 'Blouse', 'Sweater'],
            'Bottoms': ['Jeans', 'skirt', 'Shorts'],
            'Shoes': ['Sneakers', 'Heels', 'Sildes'],
        };
        const randomIndex = Math.floor(Math.random() * itmes[category].length);
        return items [category][randomIndex];
    }

    function displayOutfit(outfit){
        let outfitHTML = '<strong>Your Random Outfit:</strong><br>';
        for (const category in outfit) {
            outfitHTML +=  `<p><em>${category}:</em> ${outfit[category]}</p>`;
        }
        outfitDisplay.innerHTML = outfitHTML;

    }

    const randomOutfitButton = document.getElementById('random-outfit-button');
    const randomOutfitDisplay = document.getElementById('random-outfit-display');

    randomOutfitButton.addEventListener('click', generateRandomOutfit);

    function generateRandomOutfit(){
        const outfit = {}

        clothingCategories.forEach(category => {
            const randomItem = getRandomItem(category);
            outfit[category] = randomItem;
        });

        displayRandomOutfit(outfit);
    }

    function displayRandomOutfit(outfit) {
        let randomOutfitHTML = '<strong>Your Random Outfit:</strong><br>';
        for (const category in outfit) {
            randomOutfitHTML += `<p><em>${category}:</em> ${outfit[category]}</p>`;
        }
        randomOutfitDisplay.innerHTML = randomOutfitHTML;

    }



});