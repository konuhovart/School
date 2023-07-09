import React from 'react'
import s from './style.module.css'

export default function NewItem({ item }) {
  return (
    <div className={s.item}>
      <p className={s.title}>{item.title}</p>
      <p className={s.price}>{item.price}</p>
    </div>
  );
}