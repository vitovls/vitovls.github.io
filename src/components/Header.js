import Link from 'next/link';
import react from 'react';
import Logo from './Logo';


export default function Header({props}) {

  return (
    <>
    <header>
      <section>
        <Logo />
      </section>
      <nav className='navigator'>
        <Link href='/'>
          <div className={props === '/' ? 'selectedPage' : 'link'}>Home</div>
        </Link>
        <Link href='/projects'>
          <div className={props === '/projects' ? 'selectedPage' : 'link'}>Projetos</div>
        </Link>
        <Link href='/aboutme'>
          <div className={props === '/aboutme' ? 'selectedPage' : 'link'}>Sobre</div>
        </Link>
        <Link href='/contact'>
          <div className={props === '/contact' ? 'selectedPage' : 'link'}>Contato</div>
        </Link>
      </nav>
    </header>
    <div className='animated-border'/>
    </>
  )
}