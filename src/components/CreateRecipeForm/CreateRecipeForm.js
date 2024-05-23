import { useState } from 'react'
// import { z } from 'zod'
import FormButton from '@/components/FormButton/FormButton'
import styles from './CreateRecipeForm.module.css'

export default function CreateRecipeForm() {
  const [buttonLoading, setButtonLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: {value: null, error: null},
    description: {value: null, error: null},
    picture: {value: null, error: null},
    duration: {value: null, error: null},
    ingredients: {value: [], error: null},
    public: {value: false, error: null},
  })

  // const validateForm = () => {
  //   const result = z.string()
  //   .min(1, 'Название должно содержать не менее одного символа')
  //   .max(50, 'Название должно содержать не более 50 символов')
  //   .safeParse()
    
  //   if(!result.success) setNameError(true)
    
  // }

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
        onChange={(e) => setFormValues({
          ...formValues,
          name: {
            ...formValues.name,
            value: e.target.value
          }})}
        className={formValues.name.error && styles.error}
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
        onChange={(e) => setFormValues({
          ...formValues,
          description: {
            ...formValues.description,
            value: e.target.value
        }})}
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
        onChange={(e) => setFormValues({
          ...formValues,
          duration: {
            ...formValues.duration,
            value: e.target.value
        }})}
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
          ingredients: {
            ...formValues.ingredients,
            value: Array.from(e.target.selectedOptions)
                        .map(option => option.text)
        }})}
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
        onChange={(e) => setFormValues({
          ...formValues,
          public: {
            ...formValues.public,
            value: e.target.checked
        }})}
      />
      <FormButton
        caption="Добавить"
        loading={buttonLoading}
      />       
    </form>
  )
}