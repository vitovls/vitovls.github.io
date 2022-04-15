import react from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import MyHead from '../../components/MyHead';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import CardProjects from '../../components/CardProjects';

export default function Projetos() {
  const {pathname} = useRouter()
  return (
    <>
    <MyHead title={'Aqui está o que eu já fiz!'} favicon='/favicon/projects.ico' />
    <Header props={pathname}/>
    <section className='projects'>
      <main className='main-projects'>
        <CardProjects />
      </main>
    <Footer />
    </section>
    </>
  )
}