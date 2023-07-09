import React from 'react'
import s from './style.module.css'

export default function AddItem({ submit }) {                            
  return (
    <div className={s.item}>
      <form onSubmit={submit}>       {/* Событие onSubmit возникает при отправке формы ,это происходит, когда пользователь нажимает кнопку Submit.*/}
        <input className={s.input} type="text" name='title' placeholder='Название' />
        <input className={s.input} type="number" name='price' placeholder='Цена' />
        <button className={s.btn}>Добавить</button>
      </form>
    </div>
  )
}