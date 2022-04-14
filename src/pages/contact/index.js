import react, {useState} from 'react';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import MyHead from '../../components/MyHead';
import Link from 'next/link';
import FormsMail from '../../components/FormsMail';
import Footer from '../../components/Footer'


export default function Contato() {
  const {pathname} = useRouter()
  return (
  <>
  <MyHead title={'Entre em contato comigo!'} favicon='https://img.icons8.com/dusk/344/apple-mail.png'/>
    <section>
      <Header props={pathname}/>
      <main className='contact'>
        <section className='section-mail-header-contact'>
          <img className='icon-contact' src='https://img.icons8.com/color/344/secured-letter--v1.png' />
          <p>Me envie um email!</p>
        </section>
        <FormsMail />
        <section className='social-media-contact'>
        </section>
        <section className='section-social-contact'>
          <Link href='https://www.github.com/vitovls'>
            <>
              <img className='icon-contact' src='https://i.imgur.com/7rITkqB.png' />
              <p>Meu GitHub</p>
            </>
          </Link>
         
          <Link href='https://www.linkedin.com/in/vitovls'>
            <>
              <img className='icon-contact' src='https://i.imgur.com/DhHQ7Y2.png' />
              <p>Meu Linkedin</p>
            </>
          </Link>
        </section>
        <Footer />
      </main>
    </section>
  </>
  )
}