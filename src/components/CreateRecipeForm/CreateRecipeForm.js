import { useState } from 'react'
import { z } from 'zod'
import FormButton from '@/components/FormButton/FormButton'
import styles from './CreateRecipeForm.module.css'

export default function CreateRecipeForm() {
  const [nameError, setNameError] = useState(null)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: null,
    description: null,
    picture: null,
    duration: null,
    ingredients: [],
    public: false,
  })

  const onChangeName = (e) => {
    const name = e.target.value
    const result = z.string()
    .min(1, 'Название должно содержать не менее одного символа')
    .max(50, 'Название должно содержать не более 50 символов')
    .safeParse(name)
    
    if(!result.success) setNameError(true)
    else {
      setFormValues({...formValues, name })
      setNameError(null)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setButtonLoading(true)

    setButtonLoading(false)
  }
  
  return(
    <form
      onSubmit={onSubmit}
      className={styles.form}
    >
      <label
        htmlFor="name"
      >
        Название
      </label>
      <input
        type="text"
        name="name"
        placeholder="Например, Омлет с томатами быстрый"
        required
        onChange={onChangeName}
        className={nameError !== null ? styles.error : null}
      />
      <label
        htmlFor="description"
      >
        Описание
      </label>
      <textarea
        name="description"
        rows="10"
        placeholder="Опишитие кратко процесс приготовления по шагам (необязательно)"
        onChange={(e) => setFormValues({...formValues, description: e.target.value})}
      />
      <label
        htmlFor="picture"
      >
        Изображение
      </label>
      <input
        type="file"
        name="picture"
      />
      <label
        htmlFor="duration"
      >
        Время (минуты)
      </label>
      <input
        type="number"
        min="10"
        max="180"
        name="duration"
      />
      <label
        htmlFor="ingredients"
      >
        Ингредиенты
      </label>
      <select
        name="ingredients"
        multiple
        onChange={(e) => setFormValues({
          ...formValues,
          ingredients: Array.from(e.target.selectedOptions)
          .map(option => option.text)})}
      >
        <option value={'val'}>1 морковка</option>
        <option value={'val'}>2 капуста</option>
        <option value={'val'}>3 свекла</option>
      </select>
      <label
        htmlFor="public"
      >
        Доступен для всех
      </label>
      <input
        type="checkbox"
        name="public"
        onChange={(e) => setFormValues({...formValues, public: e.target.checked})}
      />
      <FormButton
        caption="Добавить"
        loading={buttonLoading}
      />       
    </form>
  )
}