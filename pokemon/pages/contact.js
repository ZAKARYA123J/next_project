import Head from 'next/head'
import Link from 'next/link'


export default function contact()
{
    return( 
    <>
    <Head>
        <title>Pagina de contato</title>
    </Head>
    <h1>Página de contato</h1>
    <Link href="/">
    <a>Voltar</a>
    </Link>
    </>
    )
}