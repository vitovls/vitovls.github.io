import Link from 'next/link';
import { useRouter } from 'next/router';
import react from 'react';

export default function Logo() {
  
  const router = useRouter()

  function setMemoji() {
    if(router.pathname === '/' || router.pathname === '/home') {
      return <img className='logo' src='https://i.imgur.com/Yl4TUVw.png' />
    }
    if(router.pathname === '/aboutme') {
      return <img className='logo' src='https://i.imgur.com/2LPHyYE.png' />
    }
    if(router.pathname === '/contact') {
      return <img className='logo' src='https://i.imgur.com/iozSfSZ.png' />
    }
    if(router.pathname === '/projects') {
      return <img className='logo' src='https://i.imgur.com/QysXrcL.png' />
    }
    return '404'
  }

  return (
    setMemoji()
  )
}