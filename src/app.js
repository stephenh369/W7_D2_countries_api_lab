import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            countries: [],
            selectedCountry: ''
        },

        mounted: function() {
            this.fetchCountries();
        },

        computed:{
            totalPopulation: function() {
                console.log(this.countries);
                return this.countries.reduce((total, country) => total + country.population, 0);
            }            
        },

        methods: {
            fetchCountries: function() {
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(data => this.countries = data);
            }
        }
    });
});