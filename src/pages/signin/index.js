import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import SigninLayout from "@/layouts/SigninLayout/SigninLayout"
import styles from "./signin.module.css"

export default function Signin({ providers }) {
  return (
    <SigninLayout>
      <div className={styles['signin']}>
        <div className={styles['signin-block']}>
          <h1 className={styles['signin-title']}>Войти с помощью:</h1>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </SigninLayout>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  
  if (session) {
    return { 
      redirect: { 
        destination: "/",
        permanent: false
      }
    }
  }
  
  const providers = await getProviders()
  
  return {
    props: { providers: providers}
  }
}