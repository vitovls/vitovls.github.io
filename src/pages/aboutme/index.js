import react from 'react';
import MyHead from '../../components/MyHead.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sobre() {
  const {pathname} = useRouter()
  return (
    <>
    <MyHead title={'Um pouco sobre mim!'} favicon={'https://img.icons8.com/office/344/user.png'} />
    <section>
      <Header props={pathname}/>
      <main className='aboutme'>
      <section className='first-section-aboutme'>
        <img className='about-my-photo' src='https://www.github.com/vitovls.png'/>
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
            eles eram uns "frankenstein de ex-computadores" que meu pai me dava.
            <i className='highlights-about'> Graças a esse meu contato tão novo
            com os computadores, adquiri uma certa facilidade em entende-los</i>.
            Sempre fui muito curioso, prova disso foram as modificações que tive
            que fazer em alguns jogos, deixando os gráficos o mais enxuto possível,
            <i className='highlights-about'> O famoso: "Como rodar jogo X, sem placa de vídeo, sem cpu, sem pc". </i>
            Piadas a parte, mesmo sem saber, ali foi
            <i className='highlights-about'> meu primeiro contato com a programação, </i>
            nada muito a fundo, mas já <i className='highlights-about'>despertava</i> a minha <i className='highlights-about'>
            felicidade em resolver problemas.</i> (Que as vezes eu mesmo me metia)
          </p>
          </section>
        </section>
        <h1 className='headling-1-about'>Stacks 👨‍💻</h1>
        <section className='stacks-about'>        
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />        
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />    
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />    
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
          <img className='image-stack-about' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
        </section>
        <section className='second-section-aboutme'>
          <img className='about-stw-photo' src='https://media4.giphy.com/media/dnIsXwv78BC4U/giphy.gif?cid=790b7611e0be766f83ea4c80190ea3c277a97112f72ae4fb&rid=giphy.gif&ct=g' />
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