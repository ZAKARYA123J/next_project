import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <Head>
      <title>Página Inicial</title>
      <meta name="keyworkds" content='Roupas, Calçados, Boné'></meta>
      <meta name="descripition" content='Encontre a melhor roupa para você'></meta>
    </Head>
    <div>
    <h1 className={styles.title}>Hello World next.js</h1>
    <Image src="/images/4.jpg" width="1500px" height="500px" alt='javascript' ></Image>
    </div>
    </>
  )
}
