import project1Img from '../assets/project1.jpeg'
import project2Img from '../assets/project2.jpeg'
import project4Img from '../assets/project4.jpeg'


function Project() {
  return (
   <> 
   <div className='bg-indigo-800 m-20 max-w-full'>
    <div className='grid justify-items-center m-10'>
        <h1 className='text-3xl text-white mt-10'>Project</h1>
    </div>

    <div>
        <div className='grid grid-cols-2 gap-4 p-5'>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse '>

                <div className='md:flex '> 
                      <div className='p-8 '>
                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                            Hospital management System
                        </div>

                       <a href="#">Subheading</a>
                       <p className='mt-2 text-slate-500'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
                         laudantium repel
                          
                       </p>

                    </div>

                    <div className='md:shrink-0 p-5'>
                    <img src={project1Img} alt="Project1" width={100} height={100} />
                    </div>
                </div>

            </div>
              
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse '>

<div className='md:flex '>
<div className='md:shrink-0 p-5'>
                    <img src={project2Img} alt="Project2" width={100} height={100} />
                    </div>
    <div className='p-8 '>
        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
            School management  system
        </div>

       <a href="#">Subheading</a>
       <p className='mt-2 text-slate-500'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
         laudantium repel
          
       </p>

    </div>

</div>

</div>


        </div>
        <hr />
        <div className='grid grid-cols-2 gap-4 p-5'>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse '>

                <div className='md:flex '> 
                      <div className='p-8 '>
                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                            Inventory Management System
                        </div>

                       <a href="#">Subheading</a>
                       <p className='mt-2 text-slate-500'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
                         laudantium repel
                          
                       </p>

                    </div>

                    <div className='md:shrink-0 p-5'>
                    <img src={project4Img} alt="Project1" width={100} height={100} />
                    </div>
                </div>

            </div>
              
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse '>

<div className='md:flex '>
<div className='md:shrink-0 p-5'>
                    <img src={project4Img} alt="Project2" width={100} height={100} />
                    </div>
    <div className='p-8 '>
        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
           POS Management System
        </div>

       <a href="#">Subheading</a>
       <p className='mt-2 text-slate-500'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
         laudantium repel
          
       </p>

    </div>

</div>

</div>


        </div>
    </div>
   </div>
   </>
  )
}

export default Project
