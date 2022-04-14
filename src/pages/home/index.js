import react from 'react';
import MyHead from '../../components/MyHead'
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const {pathname} = useRouter()
  return (
    <>
      <MyHead title={'Bem vindX, ao meu portfólio pessoal!'} favicon='https://img.icons8.com/office/344/home--v1.png'/>
      <Header props={pathname}/>
      <section className='home'>
        <main className='main-home'>
          <img className='image-text-home' src='https://i.imgur.com/QysXrcL.png'/>
          <section className='text-home'>
          <p className='paragraph-home'>Olá, meu nome é, <i className='name-main-home'><br/>Victor Veloso</i></p>
          <p className='paragraph-home'>Sou um <i className='highlights-home'>Desenvolvedor Fullstack.</i></p>
          <p className='paragraph-home'>Aqui você pode conhecer <br/><i className='highlights-home'>Meu Trabalho.</i></p>
          </section>
        </main>
        <section className='buttons-home'>
        <Link href='/projects'><button className='more-button'>Conhecer mais!</button></Link>
        <a href='encurtador.com.br/mEFU6' download='cv-victor-veloso'><button className='dowload-cv-button'> Baixar CV ⬇️ </button></a>
        </section>
        <Footer />
      </section>
    </>
  )
}