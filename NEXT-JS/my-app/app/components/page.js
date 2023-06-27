'use client';

import Link from 'next/link'

export default function Home() {
  function handler(){

    return <Link href='/posts' title='demo'></Link>
  }
  return (
   <div className='bg-blue w-400 h-400'>
    <button onClick={handler} className='h-20 w-20 bg-green'>hello thi si button</button>
    <p>hello tyhi sioisddhoho</p>
   </div>
  )
}
