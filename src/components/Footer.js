import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <p className='paragraph-footer'>{`"Feito com Next.JS, muito café e 💙"`}</p>
      <section className='footer-icons'>
      <a target='_blank' href='https://www.github.com/vitovls' rel="noreferrer">
        <Image className='github-icon-footer' alt='GitHub Logo' width='50px' height='50px' src='/SocialLogos/Github-Logo.png' />
      </a>
      <a target='_blank' href='https://www.linkedin.com/in/vitovls' rel="noreferrer">
      <Image className='linkedin-icon-footer' alt='Linkedin Logo' width='50px' height='50px' src='/SocialLogos/Linkedin-Logo.png' />
      </a>
      </section>
    </footer>
  )
}
