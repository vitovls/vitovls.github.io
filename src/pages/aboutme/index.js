import react from 'react';
import MyHead from '../../components/MyHead.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Sobre() {
  const {pathname} = useRouter()
  return (
    <>
    <MyHead title={'Um pouco sobre mim!'} favicon={'/favicon/about.ico'} />
    <section>
      <Header props={pathname}/>
      <main className='aboutme'>
      <section className='first-section-aboutme'>
        <Image priority={true} className='about-my-photo' width='3000px' alt='Minha Foto de Perfil' height='3000px' src='/Perfil.jpg' />
          <section className='first-text-aboutme'>
          <h1 className='headling-starwars-about'>A LONG AGO IN A GALAXY FAR, FAR AWAY</h1>
          <p className='paragraph-about'>
            <i className='highlights-about'>Entrei no mundo da programação graças ao meu pai. </i> 
            Ele sempre foi muito apaixonado por computação,
            <i className='highlights-about'> aos 7 anos</i> já brincava e bisbilhotava nos computadores dele,
            nesse mesmo tempo conheci alguns jogos,
            onde me apaixonei.
          </p>
          <p className='paragraph-about'>
          <i className='highlights-about'>Aos 12 anos</i> ganhei meu primeiro computador,
            eles eram uns `frankenstein de ex-computadores` que meu pai me dava.
            <i className='highlights-about'> Graças a esse meu contato tão novo
            com os computadores, adquiri uma certa facilidade em entende-los</i>.
            Sempre fui muito curioso, prova disso foram as modificações que tive
            que fazer em alguns jogos, deixando os gráficos o mais enxuto possível,
            <i className='highlights-about'> `O famoso: Como rodar jogo X, sem placa de vídeo, sem cpu, sem pc.` </i>
            Piadas a parte, mesmo sem saber, ali foi
            <i className='highlights-about'> meu primeiro contato com a programação, </i>
            nada muito a fundo, mas já <i className='highlights-about'>despertava</i> a minha <i className='highlights-about'>
            felicidade em resolver problemas.</i> (Que as vezes eu mesmo me metia)
          </p>
          </section>
        </section>
        <h1 className='headling-1-about'>Stacks 👨‍💻</h1>
        <section className='stacks-about'>
          <Image className='stack-img' width='100px' height='100px' alt='HTML Logo'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />                 
          <Image width='100px' height='100px' alt='CSS Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />         
          <Image width='100px' height='100px' alt='JS Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />         
          <Image width='100px' height='100px' alt='React Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />         
          <Image width='100px' height='100px' alt='Redux Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />         
          <Image width='100px' height='100px' alt='Next Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />         
          <Image width='100px' height='100px' alt='Bootstrap Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />             
          <Image width='100px' height='100px' alt='Node Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />         
          <Image width='100px' height='100px' alt='TypeScript Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />             
          <Image width='100px' height='100px' alt='MySQL Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />         
          <Image width='100px' height='100px' alt='Sequelize Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />         
          <Image width='100px' height='100px' alt='MongoDB Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />         
          <Image width='100px' height='100px' alt='Postgree SQL Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />         
          <Image width='100px' height='100px' alt='Express Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />         
          <Image width='100px' height='100px' alt='Docker Logo' className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />       
        </section>
        <section className='second-section-aboutme'>
          <Image className='about-stw-photo' src='/stw.gif' width='200px' style={{marginRight: '15px'}} alt='Obi Wan: "May the force be with you."' height='150px' />
          <section className='second-text-aboutme'>
          <h1 className='headling-1-about'>OFF-CODE 🎮</h1>
          <p className='second-paragraph-about'>
            Primeiro que é bem dificil, pois gosto de ficar praticando
            e <i className='highlights-about'>fazendo infinitos projetos pessoais,
            acho que é o que mais me diverte hoje em dia,</i> mas
            quando não estou codando, <i className='highlights-about'>gosto de jogar,</i>
            <i className='highlights-about'>assistir vídeos aleatórios</i> no youtube
            (sério sou inscrito em muitos canais, mas acabo só vendo os recomendados),
            gosto de <i className='highlights-about'>ler/assistir coisas relacionadas as guerras mundiais </i>
            (principalmente filmes),
            gosto de <i className='highlights-about'> assistir filmes e alguns animes</i>.
          </p>
          </section>
        </section>
      </main>
      <Footer />
    </section>
    </>
  )
}