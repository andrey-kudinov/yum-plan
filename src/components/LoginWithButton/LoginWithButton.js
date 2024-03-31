import Image from 'next/image'
import githubImg from 'public/images/github-mark-white.svg'
import styles from './LoginWithButton.module.css'

export default function LoginWithButton({ providerType }) {
  
  return (
    <button
      className={styles['login-with-button']}
    >
      <Image
        src={githubImg}
        width={50}
        height={50}
      />
      {providerType}
    </button>
  )
}