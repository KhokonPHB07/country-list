// script.js
const countriesList = document.querySelector('.countries-list');

async function fetchCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        // Display country information
        data.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('country-card');
            countryCard.innerHTML = `
                <h2>${country.name.common}</h2>
                <img src="${country.flags.png}" alt="${country.name.common}" />
                <p>Population: ${country.population}</p>
                <p>Region: ${country.region}</p>
                <p>Capital: ${country.capital}</p>
            `;
            countriesList.appendChild(countryCard);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchCountryData();
