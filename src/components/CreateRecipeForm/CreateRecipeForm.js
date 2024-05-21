import FormButton from '@/components/FormButton/FormButton'
import styles from './CreateRecipeForm.module.css'

export default function CreateRecipeForm() {
  return(
    <form
      onSubmit={(e) => e.preventDefault()}
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
      />
      <FormButton
        caption="Добавить"
        loading={false}
      />       
    </form>
  )
}