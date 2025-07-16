import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from '../assets/Girl.jpeg';

const Hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
      <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-white-300'>Web developer</p>
        <h1 className='text-6xl'>Zawed Akhter</h1>
        <p className='mt-10 text-xl text-white-300 font-sans'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nulla ex non facere accusamus! Mollitia, exercitationem natus! Blanditiis cum corporis accusamus, ipsam eos fugit sit, natus eius dolor nisi aut.
        </p>
      </div>
      <div className='w-1/3 items-center ssm:w-fit ' >
        <img 
          src={HeroPic} 
          alt="Abdullahi Umer"  
          className='rounded-full w-64 h-64 object-cover border-8 border-white'
        />
      </div>
      <div className='w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-4'>About Me</p>
        <p className='text-white-300'>
          let's build quality in programming ad design with our services
        </p>
        <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white' >
          show more...
        </button>

        <div className='flex mt-5 space-x-4 cursor-pointer'> 
          <BsFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
          <BsInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
          <BsTwitter size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
          <BsPinterest size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
        </div>
      </div>
    </section>
  )
}

export default Hero