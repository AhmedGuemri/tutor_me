import Image from 'next/image'

import logo from '../public/logo.png'
import main_img from '../public/main.png'
import mask from '../public/mask.png'
import step1 from '../public/step1.png'
import pattern from '../public/pattern.svg'
import team from '../public/about_us.jpg'

const text = [
  {
    'title': '1. Sign up on the platform.',
    'description': ["Create a FREE account on Tutor Me. The process is simple and quick.", "All you have to do is provide us with your some information and your", "email which you'll have to verify."]
  },
  {
    'title': '2. Find a tutor.',
    'description': ["You can search by subject, grade level, or specific keywords.", "Our platform will connect you to the top-rated tutors.", "Refine your search by specifying your preferences,", "such as the tutor's availability, price range, or location."]
  },
  {
    'title': '3. Contact your tutor.',
    'description': ["Reach out to the tutor to introduce yourself,", "discuss your goals, and inquire about their", "availability for lessons."]
  },
]

function HomePage () {
  return (
    <div className=' w-screen h-screen relative'>
      <div className=' w-full h-full absolute pointer-events-none'>
        <Image src={main_img} priority={true} style={{
          objectFit: 'cover',
        }} alt="girl studying" fill/>
      </div>
      <div className=' w-full h-full absolute pointer-events-none '>
        <Image src={mask} priority={true} fill alt=""/>
      </div>
      <div className='absolute bottom-16 md:pl-24 pl-8 flex flex-col gap-4'>
          <Image src={logo} width={200} height={200} alt='logo'></Image>
          <h1 className=' md:text-6xl text-xl'>Your Go-To Online <br/>Tutoring Platform</h1>
      </div>
    </div>
  )
}

function HowPage() {
  return (
    <div className=' w-screen relative flex flex-col gap-8 p-8'>
      <p className=' text-6xl text-center'>How It Works</p>
      <div className='flex flex-col justify-start p-16 gap-16 bg-how' >
        {text.map((txt, i) => (
          <div key={i} className={`flex w-full ${i % 2 == 0? 'justify-start': 'justify-end'}`}>
              <div className={` rounded-xl bg-white p-8 border-2 ${i % 2 == 0? 'border-yellow-400': 'border-blue-400'}`} >
                <p className={` text-3xl text-center ${i % 2 == 0? 'text-yellow-400': 'text-blue-400'}`}>{txt.title}</p>
                <div className='flex md:flex-row flex-col items-center'>
                  <Image src={step1} height={200} width={200} alt='person logging in'/>
                  <div className='p-4 text-lg text-center font-serif'>{txt.description.map((item, i) => <p key={i}>{item}<br/></p>)}</div>
                </div>
              </div>
            </div>
        ))}
            
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className='w-screen relative flex flex-col items-center gap-8 p-8 mb-16'>
      <p className=' text-6xl text-center'>ABOUT US</p>
      <p className={` text-3xl text-center`}>We're a Tunisia-based startup launched in 2020 <br/> with a mission to revolutionize in the field <br/> of online education.</p>
      <div>
        <Image src={team} width={400} style={{ borderRadius: "64px"}} height={400} alt='team working'></Image>
      </div>
    </div>
  )
}

function SignUpPage() {
  return (
    <div className='w-screen relative flex flex-col items-center gap-8 p-8 bg-how'>
            <p className=' text-6xl text-center'>Join Us Now!</p>
      <p className={` text-3xl text-center`}>Get started with a FREE account now!</p>
      <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">SIGN UP</button>

    </div>
  )
}

function FooterPage() {
  return (
    <div className='w-screen relative flex flex-row justify-around items-center gap-8 p-8 bg-blue-400 shadow-xl'>
      <div>
        <Image src={logo} height={64} width={100} alt='logo'/>
      </div>
      <p>Copyright © 2023 Tutor Me </p>
      <p><i>This platform is purely fictional.</i></p>
      <p>Made with ˗ˏˋ☕ˎˊ˗</p>

    </div>
  )
}

export default function Home() {
  return (
    <div className='absolute flex flex-col'>
      <HomePage />
      <HowPage />
      <AboutPage />
      <SignUpPage />
      <FooterPage />
    </div>
  )
}
