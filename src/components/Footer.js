import Link from 'next/link'
import react from 'react'

export default function Footer() {
  return (
    <footer>
      <p className='paragraph-footer'>"Feito com Next.JS, muito café e 💙"</p>
      <section className='footer-icons'>
      <Link target='_blank' href='https://www.github.com/vitovls'>
        <img className='github-icon-footer' src='https://i.imgur.com/7rITkqB.png'/>
      </Link>
      <Link target='_blank' href='https://www.linkedin.com/in/vitovls'>
        <img className='linkedin-icon-footer' src='https://i.imgur.com/DhHQ7Y2.png'/>
      </Link>
      </section>
    </footer>
  )
}