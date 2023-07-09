import React, { useState } from 'react'

import AddItem from '../AddItem'
import ItemList from '../ItemList'


export default function Items() {

    const [items, setItems] = useState([]);                         {/*  useState() отвечает за работу с состоянием внутри компонента. */}

    const submit = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;
        const item = { title, price };
        setItems([...items, item]);
        event.target.reset();                                       {/* обновляет карточки*/}
    }

    const remove = (itemToRemove) => {
        const newList = items.filter(item => item !== itemToRemove);
        setItems(newList);                                            {/*  функция, которая позволяет удалить  */}
    };

  return (

    <div>
             <AddItem submit={submit} />                               {/* submit - отправляем в форму */}
            <ItemList items={items} remove={remove} />                  
    </div>
  )
}
