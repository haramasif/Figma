import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className='flex h-full'>
        <div className="w-1/2 flex flex-col justify-center items-start p-10">
        <h1 className='font-bold text-[30px] mb-0 mt-'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className="text-[30px] w-short whitespace-pre-line mb-6">
          An example of intricate workmanship and detail, elegent necklaces and long and short chains from a part of our desirable collection.
        </p>
        <button className='bg-[#A29875] lg:w-[288px] h-[58px] p-[10px] text-white text-[30px]'>
          Explore Now
        </button>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center p-10">
        <img
        src="/rs-group-wrap ⏵ rs-group.png"
        alt="Figma Image"
        width="462"
        height="647"
        className='object-cover'
         />
        </div>
      </div>
    </div>
  );
};
export default Page;
