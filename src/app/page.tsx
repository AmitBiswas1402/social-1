import LeftSidebar from "@/components/LeftSidebar";
import { BsThreeDots } from "react-icons/bs";

const page = () => {
  return (
    <div className="w-full relative h-full flex items-center justify-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* {side navigation} */}
        <LeftSidebar />
        {/* <main>Home Timeline</main> */}
        <main className="ml-[425px] p-3 flex w-[600px] h-full min-h-screen flex-col border-r-[0.5px] border-l-[0.5px] border-gray-900">
          <h1 className="text-2xl font-bold ">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-700 h-40  relative p-4">
            <div className="w-10 h-10 bg-slate-900 rounded-full flex-none"></div>
            <div className="flex flex-col">
              <div className="border-b-[0.5px] ">
                <input 
                type="text" 
                placeholder="What's happening?" 
                className="w-full h-full underline-offset-0 bg-transparent outline-none border-none border-gray-700"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div></div>
                <div>
                  <button className="rounded-full w-full m-4 bg-primary px-4 py-2 text-lg text-center hover:bg-opacity-70 transition duration-200">
                    Post 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            {
              Array.from({length: 5}).map((_, i) => (
                <div className="border-t-[0.5px] border-b-[0.5px] px-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <div>Amit Biswas</div>
                      <div>@amitbiswas</div>
                      <div>
                        <BsThreeDots />
                      </div>
                      <div>1 hour ago</div>
                    </div>
                    <div className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus, velit libero delectus, molestias cum, fugiat optio architecto tenetur provident obcaecati nobis veritatis eveniet adipisci dicta. Corrupti id nobis maiores ad sunt dolorum nemo quod necessitatibus error quaerat laudantium temporibus esse ipsa expedita molestias, ea reprehenderit fugiat eaque veniam voluptas?</div>
                    <div></div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
        {/* <section>right section</section> */}
      </div>
      
    </div>
  )
}

export default page
