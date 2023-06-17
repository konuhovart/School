//реализовать приложение на React, которое выводит компоненты с данными из массива объектов.
// Массив содержит данные о товаре (id, название, цена).

import Products from "./products";


function App() {

const products = [

  {id: 1, title: 'товар_1', price:'10'},
  {id: 2, title: 'товар_2', price:'15'},
  {id: 3, title: 'товар_3', price:'20'},
  {id: 4, title: 'товар_4', price:'25'},
  {id: 5, title: 'товар_5', price:'30'}
]

  return (
    <div>
        {
          products.map(product => <Products key = {products.id} {...product}/>
          )
        }
    </div>
  );
}

export default App;
