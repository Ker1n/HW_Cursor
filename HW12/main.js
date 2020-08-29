const responce = axios.get('https://swapi.dev/api/planets')
const BASE = 'https://swapi.dev/api/';
console.log("response", responce)

function getInformation() {
    const planets = document.createElement("input");
        planets.type = "button";
        planets.value = "Planets";
        planets.id = "getPlanets";
        document.querySelector('.mainButton').appendChild(planets)

    const people = document.createElement("input");
        people.type = "button";
        people.value = "People";
        people.id = "getPeople";
        document.querySelector('.mainButton').appendChild(people)
};

document.getElementById("getIinform").addEventListener("click", getInformation);
document.getElementById("getPeople").addEventListener("click",  getPeopleByButton);
document.getElementById("getPlanets").addEventListener("click", getPlanetsByButton);



function getPeopleByButton() {
    function createButtonNext() {
        const prev = document.createElement("input");
        prev.type = "button";
        prev.value = "Prev";
        prev.id = "prevPeople";
        document.getElementById('buttons').appendChild(prev)
     };

     function createButtonPrev() {
        const next = document.createElement("input");
        next.type = "button";
        next.value = "Next";
        next.id = "nextPeople";
        document.getElementById('buttons').appendChild(next)
     };
    
    function getPeoples(page) {
        const config = {
            method: 'GET',
            url: BASE + "people",
            params: {
                page: page
            }
        };
        return axios(config).then((res) => {
            return res.data.results;

        }).catch((err) => {
            console.log("Something went wrong");
            return [];
        });
    };


    function renderPeople(people) {
        console.log("renderPeople -> people", people);

        const container = document.querySelector('.container');
        container.innerHTML = " ";
        people.forEach(people => {
            const peopleElement = document.createElement('div');
            peopleElement.className = 'people'
            peopleElement.innerHTML = `
            <h2>${"Name: " + people.name}</h2>
            <h4>${"Years: " + people.birth_year}</h4>
            <h4> ${"Gender: " + people.gender}</h4>
         `
            container.append(peopleElement);
        });
    };

    function paginationInit() {
        let currentPage = 1;
        document.getElementById('prevPeople').addEventListener('click', () => {
            getPeoples(--currentPage).then(renderPeople);
            if (currentPage < 1 ) getPeoples(currentPage = 1).then(renderPeople);    
        });
        document.getElementById('nextPeople').addEventListener('click', () => {
            getPeoples(++currentPage).then(renderPeople);
        });
    };

    createButtonNext();
    createButtonPrev();
    getPeoples().then(renderPeople);
    paginationInit();
};


function getPlanetsByButton() {
    
    function createButtonPrev() {
        const next = document.createElement("input");
        next.type = "button";
        next.value = "Next";
        next.id = "nextPlanets";
        document.getElementById('buttons').appendChild(next)
     };
     function createButtonNext() {
        const prev = document.createElement("input");
        prev.type = "button";
        prev.value = "Prev";
        prev.id = "prevPlanets";
        document.getElementById('buttons').appendChild(prev)
     };

    function gePlanets(page) {
        const config = {
            method: 'GET',
            url: BASE + "planets",
            params: {
                page: page
            }
        };
        return axios(config).then((res) => {
            return res.data.results;

        }).catch((err) => {
            console.log("Something went wrong");
            return [];
        });
    };
    
   
    
    function renderPlanets(planets) {
        console.log("renderPlanets -> planets", planets);
        const container = document.querySelector('.container');
        container.innerHTML = " ";
        planets.forEach(planets => {
            const planetsElement = document.createElement('div');
            planetsElement.className = 'planets'
            planetsElement.innerHTML = `
            <h2>${"Name: " + planets.name}</h2>
            <h4>${"population: " + planets.population}</h4>
            <h4>${"climate: " + planets.climate}</h4>
            <h4> ${"diameter: " + planets.diameter}</h4>
         `
            container.append(planetsElement);
        });
    };

    function paginationInit() {
        let currentPage = 1;
        document.getElementById('prevPlanets').addEventListener('click', () => {
            gePlanets(--currentPage).then(renderPlanets);
            if (currentPage < 1)  gePlanets(currentPage = 1).then(renderPlanets);
        });
        document.getElementById('nextPlanets').addEventListener('click', () => {
            gePlanets(++currentPage).then(renderPlanets);
        });

    };
   
    createButtonNext();
    createButtonPrev();
    gePlanets().then(renderPlanets)
    paginationInit();
   
};



