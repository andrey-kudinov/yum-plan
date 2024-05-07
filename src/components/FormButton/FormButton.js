import styles from './FormButton.module.css'

export default function FormButton({ caption, loading }) {
  return (
    <button
      type="submit"
      className={styles.button}
      disabled={loading}
    >
      {!loading && caption}
      {loading && <span className={styles.loader}></span>}
    </button>
  )
}