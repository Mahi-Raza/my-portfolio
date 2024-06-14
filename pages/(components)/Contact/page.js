import { FaWhatsapp, FaMapMarker, FaEnvelope, FaPhoneSquare, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';



export default function Contact() {
  return (
    <div className="contact" id='contact'>
      <p className="text-center font-bold text-4xl "> Contact Me</p>
      <div className="flex mt-5 last">

        <div className="form">
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="c4f0e41d-bf2e-458a-ae05-d10031ed7699"></input>
            <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
            <p className="name  pt-5 ">Name:</p>
            <input type="text" placeholder="Enter your name here" name='first_name' className="input mt-1 h-8" required />
            <p className="mail pt-3">Email:</p>
            <input type="text" placeholder="Enter your mail here" name='mail' className="input mt-1 h-8" required />
            <p className="msg pt-3">Your Message:</p>
            <textarea name="message" id="" className="input mt-1 h-24 "></textarea>

            <button className="bttn mt-5" type='submit'>Send Message</button>
          </form>
        </div>

        <div className='links'>
          <div className='flex'>
            <FaPhoneSquare size={35} />
            <p className='text-2xl ml-2'>03376201548</p>
          </div>
          <div className='flex '>
            <FaEnvelope size={35} />
            <p className='text-2xl ml-3'>mahdiraza0808@gmail.com</p>
          </div>
          <div className='flex'>
            <FaMapMarker size={35} />
            <p className='text-2xl ml-3'>Peoples colony, Faisalabad, Pakistan</p>
          </div>
          <div className="icons flex gap-10">
            <Link href="https://wa.me/+9233376201548" target='_blank' className='icnw'>
              <FaWhatsapp size={35} />
            </Link>
            <Link href="https://www.facebook.com/" target='_blank' className='icnf'>
              <FaFacebook size={35} />
            </Link>
            <Link href="https://www.instagram.com/" target='_blank' className='icni'>
              <FaInstagram size={35} />
            </Link>
            <Link href="https://www.linkedin.com/" target='_blank' className='icnl'>
              <FaLinkedin size={35} />
            </Link>
            <Link href="https://github.com/" target='_blank' className='icng'>
              <FaGithub size={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
