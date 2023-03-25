import {Poppins} from '@next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export default function Home() {
	return (
		// <div className="h-screen w-full flex justify-center items-center">
		// 	Welcome to the Cisco Dashboard
		// </div>

		<main className={poppins.className}>

		<header>
			<nav className=" flex py-4 px-4 justify-between">
				<div className="py-1" >
					<img src="cisco-disco.svg" alt="logo" className="h-30 w-60" />
				</div>
				<ul className="gap-12 flex items-center w-fit text-cisco-blue text-2xl uppercase">
					<li className="cursor-pointer">Features</li>
					<li className="cursor-pointer">Pricing</li>
					<li className="cursor-pointer">Contact</li>
					<button type="button" className="bg-cisco-red text-white rounded-md px-7 py-3 uppercase">Login</button>
				</ul>
			</nav>
		</header>
		<section className="relative">
			<div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
				<div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-cisco-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 p-16 justify-center">

            Forget about managing your Inventory.
          </h2>			
          <p className="text-cisco-grey text-4xl text-center lg:text-left mb-6 px-24 justify-center">
            Let us do it for you.
          </p>	
		  <div className="flex flex-wrap gap-8 px-24 py-20">
            <button type="button" className="shadow-md py-8 px-16 rounded-md transistion duration-300 bg-cisco-purple text-white hover:bg-cisco-white hover:text-black text-2xl">
              Get Started
            </button>
			</div>

          </div>	
		  <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="inventory.svg" alt="inventory dudes" />
        	
				</div>
			</div>
		</section>
		</main>

	)
}
