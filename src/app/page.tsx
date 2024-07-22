import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { HiMagnifyingGlass } from "react-icons/hi2";


const page = () => {
  return (
    <div className="w-full relative h-full flex items-center justify-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* {side navigation} */}
        <LeftSidebar />
        {/* <main>Home Timeline</main> */}
        <MainComponent />
        {/* <section>right section</section> */}
        <section className='fixed flex flex-col space-y-4 right-0'>
          <div>
            <div className="w-full h-full relative">
              <label htmlFor="searchBox" className="absolute top-0 left-0 h-full flex items-center justify-center">
                <HiMagnifyingGlass className="w-5 h-5 text-gray-500" />
              </label>
              <input 
              id='searchBox'
              type="text" 
              placeholder="Search" className="outline-none bg-transparent border-none w-full h-full rounded-xl py-4 px-8" />
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
      
    </div>
  )
}

export default page
