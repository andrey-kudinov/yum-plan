import styles from './FormButton.module.css'

export default function FormButton({ children }) {
  return (
    <button
      className={styles['form-button']}
      type="submit"
    >
      {children}
    </button>
  )
}