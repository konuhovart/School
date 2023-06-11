// написать приложение, которое позволяет загрузить и отобразить данные про коктейли. 
// ссылка на API (выдает данные про 25 коктейлей) https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
// каждая карточка должна содержать картинку, наименование коктейля и рецепт. 


const rootElement = document.querySelector('#root'); 
 
function render({strDrink, strInstructions, strDrinkThumb}) { 
    const nameEl = document.createElement('p'); 
    const imgEl = document.createElement('img'); 
 
    const container = document.createElement('div'); 
    nameEl.innerText = `${strDrink} - ${strInstructions}`; 
    imgEl.src = strDrinkThumb; 
 
  container.classList.add('container')
 
    container.append(imgEl, nameEl); 
    root.append(container); 
    
} 
 
const GetCoctail = async () => { 
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'); 
  const info = await response.json(); 
 
  const coctails = info.drinks.map(({strDrink, strInstructions, strDrinkThumb}) => ({ 
    strDrink, strInstructions, strDrinkThumb 
  })); 
 
  coctails.forEach(drinks => render(drinks)); 
} 
 
GetCoctail();