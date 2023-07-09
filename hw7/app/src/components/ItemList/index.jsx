import React from 'react'
import NewItem from '../NewItem'

import s from './style.module.css'


export default function ItemList({ items }) {
  return (

    <div className={s.list}>
      {
        items.map(item => (<NewItem key={item} item={item} />))
      }
    </div>
  )
}
// не смог разобратся, что не так. не выводит наименование, а только цену.