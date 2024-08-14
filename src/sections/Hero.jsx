import React, { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constant';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-4">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-6 pt-28">
        <p className="text-lg font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-8 font-palanquin text-8xl lg:text-6xl  max-sm:text-[48px] max-sm:leading-[56px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-6">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-base leading-7 mt-6 mb-12 sm:max-w-sm">
          Experience the superior quality of Nike shoes, with selected materials and the latest technology that provides maximum comfort. Light stride, optimal performance, only with Nike.
        </p>
        <Button label="Order Now" iconUrl={arrowRight}  />
        <div className="flex justify-start items-start flex-wrap w-full mt-16 lg:mt-5 gap-12">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-6 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className= "relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-10 bg-primary bg-hero bg-cover bg-center">
        <img className="object-contain relative z-10 " src={bigShoeImg} width={370} height={270} alt=""/>
        <div className="flex sm:gap-4 gap-3 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
