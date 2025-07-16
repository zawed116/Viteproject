import T1 from "../assets/T1.jpg"
import T2 from "../assets/T2.jpg"
import T3 from "../assets/T3.jpg"
import T4 from "../assets/T4.jpg"


function Testimonial() {
  return (
    <div className="flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row">
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pluse">
      <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex item-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
       
       <img src={T1}
        alt="Testimonial" 
       className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />


       <div className="min-w-0 py-5 pl-28 pr-5">
        <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
            Name Goes here.... 
            </div>

        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
          Assistant Manager
        </div>
        
       </div>
      </div>
          

        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pluse">
      <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex item-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
       
       <img src={T2}
        alt="Testimonial" 
       className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />


       <div className="min-w-0 py-5 pl-28 pr-5">
        <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
            Name Goes here.... 
            </div>

        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
          Assistant Manager
        </div>
        
       </div>
      </div>
          

        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pluse">
      <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex item-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
       
       <img src={T3}
        alt="Testimonial" 
       className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />


       <div className="min-w-0 py-5 pl-28 pr-5">
        <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
            Name Goes here.... 
            </div>

        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
          Assistant Manager
        </div>
        
       </div>
      </div>
          

        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pluse">
      <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex item-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
       
       <img src={T4}
        alt="Testimonial" 
       className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />


       <div className="min-w-0 py-5 pl-28 pr-5">
        <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">
            Name Goes here.... 
            </div>

        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
          Assistant Manager
        </div>
        
       </div>
      </div>
          

        </div>
    </div>
  )
}

export default Testimonial
