import Image from "next/image"

export default function About() {
  return (
    <div id="aboutme">
    <p className="text-center font-bold text-3xl pt-10">About Me</p>
    <div className="aboutmain">
    <p className="aboutext text-lg font-semibold mr-14">I'm a dedicated programmer with a strong passion for reprogramming and continuous learning. My journey in coding began with a curiosity to understand how technology works and a drive to create efficient, innovative solutions. Over the years, I've developed expertise in multiple programming languages and technologies, enabling me to adapt to various project needs.</p>


    <Image src="/about.gif" alt="Picture of the author" width={400} height={400} />
      
    </div>
    </div>
  )
}
