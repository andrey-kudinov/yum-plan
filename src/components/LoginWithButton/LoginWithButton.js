import Image from 'next/image'
import githubImg from 'public/images/github-mark-white.svg'
import styles from './LoginWithButton.module.css'

const providersImages = {
  'GitHub': githubImg,
}

export default function LoginWithButton({ providerType, onClick }) {
  
  return (
    <button
      className={styles['login-with-button']}
      onClick={onClick}
    >
      <Image
        src={providersImages[providerType]}
        alt={providerType}
        width={50}
        height={50}
      />
      {providerType}
    </button>
  )
}