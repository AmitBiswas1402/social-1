import Link from "next/link";
import { BiHomeCircle } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiTwitterXFill } from "react-icons/ri";
import { RiHashtag } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const NAVIGATION_ITEMS = [
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: RiHashtag,
  },
  {
    title: "Notification",
    icon: GoBell,
  },
  {
    title: "Messages",
    icon: HiOutlineEnvelope,
  },
  {
    title: "Bookmarks",
    icon: IoBookmarkOutline,
  },
  {
    title: "Profile",
    icon: FiUser,
  },
];

const LeftSidebar = () => {
  return (
    <section className="fixed w-72 flex text-lg flex-col h-screen space-y-4 my-4 pl-40">
      <Link href={"/"} className="p-2 text-2xl">
        <RiTwitterXFill className="h-8 w-8" />
      </Link>
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          className="hover:bg-white/50 transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl p-2.5"
          href={`/${item.title.toLowerCase()}`}
          key={item.title}
        >
          <div>
            <item.icon className="mr-6 h-7 w-7" />
          </div>
          <div>{item.title}</div>
        </Link>
      ))}
      <button className="w-60 rounded-full bg-primary px-6 py-4 text-lg text-center hover:bg-opacity-70">
        Post
      </button>
      <button className="w-60 rounded-full flex items-center space-x-2 px-6 py-4 text-lg text-center hover:bg-slate-700">
        <div className="rounded-full bg-primary w-10 h-10 text-center">
          <FaUser className="mt-2 mb-2 ml-3" />
        </div>
        <div className="items-center">
          <div className="text-sm font-bold">Username</div>
          <div className="text-xs font-semibold text-slate-400">
            login email
          </div>
        </div>
        <div>
          <BsThreeDots className="h-6 w-6 ml-10" />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
