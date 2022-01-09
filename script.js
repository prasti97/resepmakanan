let keyword = '';

const appID = '741d0846';
const appKey = '575cb687de9ae40007a60837402ae062';

const divSResult = document.querySelector('.search-result');

const findFoods = () => {
  keyword = document.querySelector('input').value;
  console.log(keyword);
  fetchAPI();
};

async function fetchAPI() {
  const response = await fetch(`https://api.edamam.com/search?q=${keyword}&to=15&app_id=${appID}&app_key=${appKey}`);
  const data = await response.json();
  getRecipes(data.hits);
  console.log(data);
}

function getRecipes(dataRecipe) {
  let listRecipes = '';
  dataRecipe.map((result) => {
    listRecipes += `
          <div class="item">
            <img src="${result.recipe.image}" alt="" id="gItem"/>
            <div class="flex-container">
              <h1 class="title">${result.recipe.label}</h1>
              <a href="${result.recipe.url}" target="_blank" class="v-button">View Recipe</a>
            </div>
            <p class="item-data">dish type : ${result.recipe.dishType[0]}</p>
            <p class="item-data">diet labels : ${result.recipe.dietLabels}</p>
            <p class="item-data">${result.recipe.cuisineType[0]}</p>
          </div>
          `;
  });

  divSResult.innerHTML = listRecipes;
}
