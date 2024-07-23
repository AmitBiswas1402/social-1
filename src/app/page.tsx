import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { BsThreeDots } from "react-icons/bs";
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
        <section className="sticky flex flex-col space-y-4 right-0 pl-3 pt-1">
          <div>
            <div className="w-full h-full relative">
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 px-4 py-2 pt-4 h-full flex items-center justify-center"
              >
                <HiMagnifyingGlass className="w-5 h-5 text-gray-500" />
              </label>
              <input
                id="searchBox"
                type="text"
                placeholder="   Search in X"
                className="outline-none bg-neutral-900/90 focus:border-primary border-2 w-full h-10 rounded-3xl py-4 px-8 mt-2"
              />
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className="font-bold text-xl my-3 p-3">What's happening?</h3>
            <div>
              {
                Array.from({length: 5}).map((_, i) => (
                  <div key={i} className="hover:bg-white/10 p-3 last:rounded-b-xl">
                    <div className="flex justify-between">
                      <div>
                      <div className="font-bold text-lg">#trending {i+1}</div>
                      <div className='text-xs text-neutral-400'>35.4k</div>
                      </div>
                      <div><BsThreeDots /></div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className="font-bold text-xl my-1 p-3">Who to follow?</h3>
            <div>
              {
                Array.from({length: 3}).map((_, i) => (
                  <div key={i} className="hover:bg-white/10 p-3 last:rounded-b-xl">
                    <div className="flex items-center justify-start">
                      <div className="rounded-full bg-neutral-600 h-9 w-9 mr-3"></div>
                      <div>
                        <div className="font-bold text-sm">Name {i+1}</div>
                        <div className='text-xs text-neutral-400'>@username</div>
                      </div>
                      <button className="rounded-3xl bg-slate-50 text-black font-semibold py-2 px-4 ml-12">Follow</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
