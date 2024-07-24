import { AiOutlineRetweet } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";

const MainComponent = () => {
  return (
    <main className="ml-[425px] flex w-[600px] h-full min-h-screen flex-col border-r-[0.5px] border-l-[0.5px] border-gray-900">
          <h1 className="text-2xl font-bold p-4 backdrop-blur sticky top bg-white/10">Home</h1>
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
                  <button className="rounded-full w-full mr-4 mt-4 bg-[#008AD8] px-4 py-2 text-lg text-center hover:bg-opacity-70 transition duration-200">
                    Post 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            {
              Array.from({length: 5}).map((_, i) => (
                <div key={i} className="p-4 flex space-x-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="font-bold">Amit Biswas</div>
                        <div className="text-slate-400">@amitbiswas</div>
                        <div className="text-slate-400">1 hour ago</div>
                      </div>
                      <div className="cursor-pointer rounded-full p-1 hover:bg-white/10">
                        <BsThreeDots />
                      </div>
                    </div>
                    <div className="text-white text-base my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus, velit libero delectus, molestias cum, fugiat optio architecto tenetur provident obcaecati nobis veritatis eveniet adipisci dicta. Corrupti id nobis maiores ad sunt dolorum nemo quod necessitatibus error quaerat laudantium temporibus esse ipsa expedita molestias, ea reprehenderit fugiat eaque veniam voluptas?
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mb-4"></div>
                    <div className="flex items-center space-x-20 w-full">
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                        <FaRegComment />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                        <AiOutlineRetweet />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                        <FaRegHeart />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                      <IoStatsChartOutline />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                        <MdOutlineShare />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
  )
}

export default MainComponent
