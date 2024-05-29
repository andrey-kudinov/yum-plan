import { useEffect, useState } from 'react'
import { z } from 'zod'
import FormButton from '@/components/FormButton/FormButton'
import styles from './CreateRecipeForm.module.css'

export default function CreateRecipeForm() {
  const [initialRender, setInitialRender] = useState(true)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: null,
    description: null,
    picture: null,
    duration: null,
    ingredients: [],
    public: false,
  })
  const [formErrors, setFormErrors] = useState()

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false)
      return
    }
    
    const result = z.object({
      name: z.string()
        .min(1, 'Название должно содержать не менее одного символа')
        .max(50, 'Название должно содержать не более 50 символов')
      ,
      duration: z.number()
        .min(10, 'Продолжительность должна быть не менее 10 минут')
        .max(180, 'Продолжительность должна быть не более 180 минут')
    }).safeParse(formValues)

    if(result.success) return

    setFormErrors({
      name: false,
      duration: false
    })
    for (const error of result.error.issues) {
      setFormErrors(prev => ({
        ...prev,
        [error.path[0]]: error.message
      }))
    }

  }, [formValues])

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
        onChange={(e) => setFormValues(prev => ({
          ...prev,
          name: e.target.value
        }))}
        className={formErrors?.name && styles.error}
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
        onChange={(e) => setFormValues(prev => ({
          ...prev,
          description: e.target.value
        }))}
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
        onChange={(e) => setFormValues(prev => ({
          ...prev,
          duration: Number(e.target.value)
        }))}
      />
      <label
        htmlFor="ingredients"
      >
        Ингредиенты
      </label>
      <select
        name="ingredients"
        multiple
        onChange={(e) => setFormValues(prev => ({
          ...prev,
          ingredients: Array.from(e.target.selectedOptions)
                      .map(option => option.text)
        }))}
      >
        <option value={'val1'}>1 морковка</option>
        <option value={'val2'}>2 капуста</option>
        <option value={'val3'}>3 свекла</option>
      </select>
      <label
        htmlFor="public"
      >
        Доступен для всех
      </label>
      <input
        type="checkbox"
        name="public"
        onChange={(e) => setFormValues(prev => ({
          ...prev,
          public: e.target.checked
        }))}
      />
      <FormButton
        caption="Добавить"
        loading={buttonLoading}
      />       
    </form>
  )
}