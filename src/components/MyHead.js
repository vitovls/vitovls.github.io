import Head from 'next/head';

export default function MyHead({title, favicon}) {
  return (
    <Head>
      <link rel="shortcut icon" href={favicon}/>
      <title>{title}</title>
    </Head>
  )
}