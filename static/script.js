document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate-outfit');
    const outfitDisplay = document.getElementById('outfit-display');
    const randomOutfitButton = document.getElementById('random-outfit-button');
    const randomOutfitDisplay = document.getElementById('random-outfit-display');

    const clothingCategories = ['Tops', 'Bottoms', 'Shoes'];

    generateButton.addEventListener('click', generateOutfit);
    randomOutfitButton.addEventListener('click', generateRandomOutfit);

    function generateOutfit() {
        const outfit = {};

        clothingCategories.forEach(category => {
            const randomItem = getRandomItem(category);
            outfit[category] = randomItem;
        });

        displayOutfit(outfit, outfitDisplay);
        showFeedbackMessage('Outfit generated successfully!');
    }

    function generateRandomOutfit() {
        const outfit = {};

        clothingCategories.forEach(category => {
            const randomItem = getRandomItem(category);
            outfit[category] = randomItem;
        });

        displayOutfit(outfit,randomOutfitDisplay);
        showFeedbackMessage('Random outfit generated successfully!');

    }


    function showFeedbackMessage(message) {
        const feedbackMessageElement = document.getElementById('feedback-message');
        feedbackMessageElement.innerHTML = message;

        setTimeout(() => {
            feedbackMessageElement.innerHTML = '';
        }, 3000);

    }
        



    function displayOutfit(outfit, displayElement) {
        let outfitHTML = '<strong>Your Random Outfit:</strong><br>';
        for (const category in outfit) {
            outfitHTML += `<p><em>${category}:</em> ${outfit[category]}</p>`;
        }
        displayElement.innerHTML = outfitHTML;
    }

    function getRandomItem(category) {
        const items = {
            'Tops': ['T-shirt', 'Blouse', 'Sweater'],
            'Bottoms': ['Jeans', 'skirt', 'Shorts'],
            'Shoes': ['Sneakers', 'Heels', 'Slides'],
        };
        const randomIndex = Math.floor(Math.random() * items[category].length);
        return items[category][randomIndex];
    }
});
