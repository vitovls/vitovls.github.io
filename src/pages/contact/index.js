import react, {useState} from 'react';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import MyHead from '../../components/MyHead';
import Link from 'next/link';
import FormsMail from '../../components/FormsMail';
import Footer from '../../components/Footer'
import Image from 'next/image';


export default function Contato() {
  const {pathname} = useRouter()
  return (
  <>
  <MyHead title={'Entre em contato comigo!'} favicon='https://img.icons8.com/dusk/344/apple-mail.png'/>
    <section>
      <Header props={pathname}/>
      <main className='contact'>
        <section className='section-mail-header-contact'>
          <Image width='60px' height='60px' alt='Icone de Enviar Email' className='icon-contact' src='/icons/send.png'/>
          <p>Me envie um email!</p>
        </section>
        <FormsMail />
        <section className='social-media-contact'>
        </section>
        <section className='section-social-contact'>
          <a href='https://www.github.com/vitovls'>
            <>
              <Image alt='GitHub Logo' width='80px' height='80px' src='/SocialLogos/Github-Logo.png' />
              <p>Meu GitHub</p>
            </>
          </a>
         
          <a href='https://www.linkedin.com/in/vitovls'>
            <>
              <Image alt='Linkedin Logo' width='80px' height='80px' src='/SocialLogos/Linkedin-Logo.png' />
              <p>Meu Linkedin</p>
            </>
          </a>
        </section>
        <Footer />
      </main>
    </section>
  </>
  )
}