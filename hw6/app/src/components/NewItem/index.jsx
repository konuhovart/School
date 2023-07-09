import React from 'react'
import s from './style.module.css'

export default function NewItem({ item, remove }) {
  return (
    <div className={s.item}>
      <p className={s.itemTitle}>{item.title}</p>
      <p className={s.itemPrice}>{item.price}</p>
      <button className={s.removeBtn} onClick={() => remove(item)}>X</button>
    </div>
  );
}
//функция которая создает новые карточки, которые отображаются в html, с кнопкой удалить карточку