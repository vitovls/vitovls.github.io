import react from 'react';
import MyHead from '../../components/MyHead'
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const {pathname} = useRouter()
  return (
    <>
      <MyHead title={'Bem vindX, ao meu portfólio pessoal!'} favicon='/favicon/home.ico'/>
      <Header props={pathname}/>
      <section className='home'>
        <main className='main-home'>
          <Image className='image-text-home' width='400px' height='400px' alt='Emoji com Computador' src='/Logos/Projetos.PNG' />
          <section className='text-home'>
          <p className='paragraph-home'>Olá, meu nome é, <i className='name-main-home'><br/>Victor Veloso</i></p>
          <p className='paragraph-home'>Sou um <i className='highlights-home'>Desenvolvedor Fullstack.</i></p>
          <p className='paragraph-home'>Aqui você pode conhecer <br/><i className='highlights-home'>Meu Trabalho.</i></p>
          </section>
        </main>
        <section className='buttons-home'>
        <Link passHref href='/projects'><button className='more-button'>Conhecer mais!</button></Link>
        <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1MFLgkyVsI_QuRoaprqPBgiuXlgUaj7E7/view'><button className='dowload-cv-button'> CV ⬇️ </button></a>
        </section>
        <Footer />
      </section>
    </>
  )
}