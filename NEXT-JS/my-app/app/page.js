import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  function handler(){

    return <Link href='/posts' title='demo'></Link>
  }
  return (
   <button onClick={handler} className='h-20 w-20 bg-green' />
  )
}
