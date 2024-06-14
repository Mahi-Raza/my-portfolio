import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp,FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


export default function Sec1() {
  return (

    <div className='sec1'>
      
        <Image src="/my.jpg" alt="Picture of the author" width={250} height={250} className='img rounded-full imge' />
        
         <div className='ml-5'>
          <p className='font-bold mytext'>Hi, I'm Mahdi Raza!</p> 
          <div className="flex text-2xl mt-3 center">
            <p>Lets Connect : </p>  
            <div className="icons flex pt-1 gap-3 ml-3">
                  <Link href="https://wa.me/+923376201548" target='_blank' className='icnw'>
                    <FaWhatsapp size={27} /> 
                  </Link>
                  <Link href="https://www.facebook.com"  target='_blank' className='icnf'>
                    <FaFacebook size={26} /> 
                  </Link>
                  <Link href="https://www.instagram.com/fahsak_rassadum/" target='_blank' className='icni'>
                    <FaInstagram size={26} /> 
                  </Link>
                  <Link href="https://www.linkedin.com/" target='_blank' className='icnl'>
                    <FaLinkedin size={26} /> 
                  </Link>
                  <Link href="https://github.com" target='_blank' className='icng'>
                    <FaGithub size={26} /> 
                  </Link>
            </div>
          </div>
          </div>

    </div>
  )
}
