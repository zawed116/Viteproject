import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from '../assets/Girl.jpeg'; // Make sure filename matches exactly (case-sensitive)

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 bg-indigo-700 text-white">
      
      {/* Left Section */}
      <div className="lg:w-1/3 ssm:w-full">
        <p className="text-4xl mb-5">Web developer</p>
        <h1 className="text-6xl font-bold">Zawed Akhter</h1>
        <p className="mt-10 text-xl font-sans text-white/80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nulla ex non facere accusamus!
          Mollitia, exercitationem natus! Blanditiis cum corporis accusamus, ipsam eos fugit sit, natus eius dolor nisi aut.
        </p>
      </div>

      {/* Center Image */}
      <div className="lg:w-1/3 ssm:w-fit flex justify-center">
        <img 
          src={HeroPic} 
          alt="Zawed Akhter"  
          className="rounded-full w-64 h-64 object-cover border-8 border-white"
        />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 ssm:w-full">
        <p className="text-4xl mb-4 font-semibold">About Me</p>
        <p className="text-white/80">
          Let's build quality in programming and design with our services.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-4 rounded-full hover:bg-indigo-800 hover:text-white transition">
          show more...
        </button>

        <div className="flex mt-5 space-x-4">
          <BsFacebook size={36} className="p-2 border-4 rounded-full hover:border-indigo-300 transition" />
          <BsInstagram size={36} className="p-2 border-4 rounded-full hover:border-indigo-300 transition" />
          <BsTwitter size={36} className="p-2 border-4 rounded-full hover:border-indigo-300 transition" />
          <BsPinterest size={36} className="p-2 border-4 rounded-full hover:border-indigo-300 transition" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
