import React, { useState } from 'react'

import AddItem from '../AddItem'
import ItemList from '../ItemList'


export default function Items() {

  const [items, setItems] = useState([]);

  const submit = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const price = event.target.price.value;
    const item = { title, price };
    setItems([...items, item]);
    event.target.reset();
  }
  return (

    <div>

      <AddItem submit={submit} />
      <ItemList items={items} />

    </div>
  )
}
