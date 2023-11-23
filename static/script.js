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

        displayOutfit(outfit, randomOutfitDisplay);
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
            const item = outfit[category];
            outfitHTML += `<p><em>${category}:</em> ${item.name}</p>`;
            outfitHTML += `<img src="${item.imageUrl}" alt="${item.name}">`;
        }
        displayElement.innerHTML = outfitHTML;
    }

    function getRandomItem(category) {
        const items = {
            'Tops': [
                { name: 'T-shirt', imageUrl:'/static/images/tshirt1 (2).jpeg' },
                { name: 'Blouse', imageUrl:'/static/images/tshirt2 (2).jpeg' },
                { name: 'Sweater', imageUrl:'/static/images/tshirt3.jpeg' }
            ],
            'Bottoms': [
                { name: 'Jeans', imageUrl: '/static/images/pants1.jpeg' },
                { name: 'Skirt', imageUrl: '/static/images/pants2.jpeg' },
                { name: 'Shorts', imageUrl: '/static/images/pants3.jpeg' }
            ],
            'Shoes': [
                { name: 'Sneakers', imageUrl: '/static/images/shoes1.jpeg' },
                { name: 'Heels', imageUrl: '/static/images/shoes2.jpeg' },
                { name: 'Slides', imageUrl: '/static/images/shoes3.jpeg' }
            ],
        };

        const randomIndex = Math.floor(Math.random() * items[category].length);
        return items[category][randomIndex];
    }

    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const historyLink = document.getElementById('history-link');

    homeLink.addEventListener("click", showHomePage);
    aboutLink.addEventListener("click", showAboutPage);
    historyLink.addEventListener("click", showHistoryPage);

    showHomePage();

    function showHomePage() {
        clearFeedbackMessage();
        showPageImage('/static/images/about.jpeg');

        const aboutContent = `
            <h2>About LICH</h2>
            <p>LICH, the digital makeover platform, seamlessly merges "Clueless" inspiration with modern style evolution. Currently, it empowers users to effortlessly redefine their fashion narratives, fostering creativity and confidence. LICH envisions a present where fashion is a universal tool for self-discovery and personal expression.</p>
        `;
        document.getElementById('main').innerHTML = aboutContent;
    }

    function showAboutPage() {
        clearFeedbackMessage();
        // Assuming there's a different image for the About page
        showPageImage('/static/images/about.jpeg');

        // Add the content for the About page here
        const aboutContent = `
            <h2>About LICH</h2>
            <p>Your customized content for the About page goes here.</p>
        `;
        document.getElementById('main').innerHTML = aboutContent;
    }

    function showHistoryPage() {
        clearFeedbackMessage();
        showPageImage('/static/images/history.jpeg');

        const historyContent = `
            <h2>History of LICH</h2>
            <p>LICH has a rich history, blending the charm of Pinterest and the sophistication of "Sex and the City." Born from a mission to democratize fashion, it's more than just a digital makeover platform; it's a movement. LICH empowers users to effortlessly redefine their style narratives, sparking creative confidence and embracing simplicity. In a world where fashion is often elusive, LICH envisions a future where it becomes a universal tool for self-discovery, your very own personal Pinterest but more effective.</p>
        `;
        document.getElementById('main').innerHTML = historyContent;
    }
});
