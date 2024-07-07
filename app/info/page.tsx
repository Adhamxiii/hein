import Image from "next/image";
import React from "react";

const InfoPage = () => {
  return (
    <div className="grid grid-cols-12 gap-10 p-10 max-w-7xl mx-auto h-[calc(100vh-190px)]">
      <div className="col-start-1 col-end-6 pr-5 border-r border-black">
        <h3 className="text-xl font-semibold mb-3">Info</h3>
        <p className="text-sm mt-4 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In laborum
          beatae nam mollitia expedita sequi sapiente dolorem ex. Possimus
          assumenda alias in voluptate animi pariatur commodi magni quam
          delectus adipisci!
        </p>
        <p className="text-sm mt-4 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In laborum
          beatae nam mollitia expedita sequi sapiente dolorem ex. Possimus
          assumenda alias in voluptate animi pariatur commodi magni quam
          delectus adipisci!
        </p>
        <p className="text-sm mt-4 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In laborum
          beatae nam mollitia expedita sequi sapiente dolorem ex. Possimus
          assumenda alias in voluptate animi pariatur commodi magni quam
          delectus adipisci!
        </p>
      </div>
      <div className="col-start-6 col-end-11 flex items-center justify-center relative">
        <Image
          src="https://i.pinimg.com/564x/3c/90/28/3c9028f9dfd00639d5c159f2e6ec6326.jpg"
          alt=""
          fill
          className=""
        />
      </div>
      <div className="col-start-11 col-end-13 pl-5 border-l border-black">
        <h2 className="text-sm uppercase">General Inquires</h2>
        <p className="text-sm mb-5">adhamxiii22@gmail.com</p>
        <p className="text-sm mb-5">+2017734643</p>

        <h2 className="text-sm uppercase">Studio</h2>
        <p className="text-sm mb-5">708 Borum Road</p>

        <h2 className="text-sm uppercase">Instagram</h2>
        <p className="text-sm mb-5">adhma.xiii</p>
      </div>
    </div>
  );
};

export default InfoPage;
