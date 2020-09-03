function HW12() {
  const response = axios.get(
    "https://swapi.dev/api/films/" +
      document.getElementById("selectEpisode").value +
      "/"
  );
  console.log("response", response);
  const BASE = "https://swapi.dev/api/";

  //btn People
  let btnPeople = document.createElement("div");
  btnPeople.id = "btnPeople";
  btnPeople.innerHTML = '<input type="button", value = "People">';
  document.getElementById("select").appendChild(btnPeople);
  //btn Planet
  let btnPlanet = document.createElement("div");
  btnPlanet.id = "btnPlanet";
  btnPlanet.innerHTML = '<input type="button", value = "Planets">';
  document.getElementById("select").appendChild(btnPlanet);

  document.getElementById("btnPeople").addEventListener("click", () => {
    document.getElementById("nextAndPrev").innerHTML = "";
    getPeopleByButton();
  });
  document.getElementById("btnPlanet").addEventListener("click", () => {
    document.getElementById("nextAndPrev").innerHTML = "";
    getPlanetsByButton();
  });

  function getPeopleByButton() {
    function getNextAndPrevButtonsForPeople() {
      //btn Next
      const btnNext = document.createElement("div");
      btnNext.id = "nextPeople";
      btnNext.innerHTML = '<input type="button", value = "Next">';
      document.getElementById("nextAndPrev").appendChild(btnNext);
      //btn Prev
      const btnPrev = document.createElement("div");
      btnPrev.id = "prevPeople";
      btnPrev.innerHTML = '<input type="button", value = "Prev">';
      document.getElementById("nextAndPrev").appendChild(btnPrev);
    }

    function getPeoples(page) {
      const config = {
        method: "GET",
        url: BASE + "people",
        params: {
          page: page,
        },
      };
      return axios(config)
        .then((res) => {
          return res.data.results;
        })
        .catch((err) => {
          console.log("Something went wrong");
          return [];
        });
    }

    function renderPeople(people) {
      const info = document.querySelector(".info");
      info.innerHTML = " ";
      people.forEach((people) => {
        const peopleElement = document.createElement("div");
        peopleElement.className = "people";
        peopleElement.innerHTML = `
                <h2>${"Name: " + people.name}</h2>
                <h4>${"Years: " + people.birth_year}</h4>
                <h4> ${"Gender: " + people.gender}</h4>
             `;
        info.append(peopleElement);
      });
    }

    function paginationInit() {
      let currentPage = 1;
      document.getElementById("prevPeople").addEventListener("click", () => {
        if (currentPage <= 1) return (currentPage = 1);
        getPeoples(--currentPage).then(renderPeople);
      });
      document.getElementById("nextPeople").addEventListener("click", () => {
        if (currentPage > 8) return (currentPage = 8);
        getPeoples(++currentPage).then(renderPeople);
      });
    }
    getNextAndPrevButtonsForPeople();
    getPeoples().then(renderPeople);
    paginationInit();
  }

  function getPlanetsByButton() {
    function getNextAndPrevButtonsForPlanet() {
      //btn Next
      const btnNext = document.createElement("div");
      btnNext.id = "nextPlanets";
      btnNext.innerHTML = '<input type="button", value = "Next">';
      document.getElementById("nextAndPrev").appendChild(btnNext);
      //btn Prev
      const btnPrev = document.createElement("div");
      btnPrev.id = "prevPlanets";
      btnPrev.innerHTML = '<input type="button", value = "Prev">';
      document.getElementById("nextAndPrev").appendChild(btnPrev);
    }

    function gePlanets(page) {
      const config = {
        method: "GET",
        url: BASE + "planets",
        params: {
          page: page,
        },
      };
      return axios(config)
        .then((res) => {
          return res.data.results;
        })
        .catch((err) => {
          console.log("Something went wrong");
          return [];
        });
    }

    function renderPlanets(planets) {
      const info = document.querySelector(".info");
      info.innerHTML = " ";
      planets.forEach((planets) => {
        const planetsElement = document.createElement("div");
        planetsElement.className = "planets";
        planetsElement.innerHTML = `
                    <h2>${"Name: " + planets.name}</h2>
                    <h4>${"population: " + planets.population}</h4>
                    <h4>${"climate: " + planets.climate}</h4>
                    <h4> ${"diameter: " + planets.diameter}</h4>
                 `;
        info.append(planetsElement);
      });
    }
    function paginationInit() {
      let currentPage = 1;
      document.getElementById("prevPlanets").addEventListener("click", () => {
        if (currentPage <= 1) return (currentPage = 1);
        gePlanets(--currentPage).then(renderPlanets);
      });
      document.getElementById("nextPlanets").addEventListener("click", () => {
        if (currentPage > 5) return (currentPage = 5);
        gePlanets(++currentPage).then(renderPlanets);
      });
    }
    getNextAndPrevButtonsForPlanet();
    gePlanets().then(renderPlanets);
    paginationInit();
  }
}
 export default {
  HW12
 }