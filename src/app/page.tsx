import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import Rightsidebar from "@/components/Rightsidebar";

const page = () => {
  return (
    <div className="w-full relative h-full flex items-center justify-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* {side navigation} */}
        <LeftSidebar />
        {/* <main>Home Timeline</main> */}
        <MainComponent />
        {/* <section>right section</section> */}
        <Rightsidebar />
      </div>
    </div>
  );
};

export default page;
