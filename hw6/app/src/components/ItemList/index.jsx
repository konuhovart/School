import React from 'react'
import NewItem from '../NewItem'

export default function ItemList({items, remove}) {
  return (
    <div>
        {
            items.map(item => (<NewItem key={item} item={item} remove={remove} />))
        }
    </div>
  )
}
