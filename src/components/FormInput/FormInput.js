import styles from './FormInput.module.css'

export default function FormInput({ inputType = 'text'}) {
  return (
    <input className={styles['form-input']} type={inputType} />
  )
}