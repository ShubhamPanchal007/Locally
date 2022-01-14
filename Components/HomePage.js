import React, { useState } from "react";
import Header from "./Header";
import Image from "next/image";
import helperImg from "../public/concrete-finisher.png";
import rajMistryImg from "../public/rajmistri.png"
import tileWorkerImg from "../public/tileWorker.png"
import painterImg from '../public/painter.png'
import carpenterImg from '../public/carpenter.png'
import welderImg from '../public/welder.png'
import electricianImg from '../public/electrician.png'
import plumberImg from '../public/plumber.png';
import maidImg from '../public/maid.png'
import { useRouter } from "next/dist/client/router";

function HomePage() {
  const router = useRouter()
  const searchHandler = (buttonName) =>{
      router.push({
        pathname:`/${buttonName}/${1}`
      })
  }
  return (
    <div>
      <Header />
      <section>
        <div className="grid grid-cols-2 max-w-7xl mx-auto space-x-4 sm:grid-cols-3  items-center">

          <button className="categoryCards" onClick={() => searchHandler("Raj Mistry")}>
            <div className="relative h-20 w-20">
              <Image src={rajMistryImg} layout="fill" placeholder="blur" alt={"Get Raj Mistry"}/>
            </div>
            <p className="font-medium text-center" >Raj Mistry</p>
          </button>

          <button className="categoryCards" onClick={() => searchHandler("Tile Granite worker")}>
            <div className="relative h-20 w-20">
              <Image src={tileWorkerImg} layout="fill" placeholder="blur"alt={"Get Tile Granite worker"} />
            </div>
            <p className="font-medium text-center">Tile Granite worker</p>
          </button>
          <div className="categoryCards"onClick={() => searchHandler("Painter")}>
            <div className="relative h-20 w-20">
              <Image src={painterImg} layout="fill" placeholder="blur" alt={"Get Painter"}/>
            </div>
            <p className="font-medium text-center">Painter</p>
          </div>
          <div className="categoryCards" onClick={() => searchHandler("Carpenter")}>
            <div className="relative h-20 w-20">
              <Image src={carpenterImg} layout="fill" placeholder="blur" alt={"Get Carpenter"}/>
            </div>
            <p className="font-medium text-center">Carpenter</p>
          </div>
          <div className="categoryCards" onClick={() => searchHandler("Welder")}>
            <div className="relative h-20 w-20">
              <Image src={welderImg} layout="fill" placeholder="blur" alt={"Get Welder"}/>
            </div>
            <p className="font-medium text-center">Welder</p>
          </div>
          <div className="categoryCards"  onClick={() => searchHandler("Electrician")}>
            <div className="relative h-20 w-20">
              <Image src={electricianImg} layout="fill" placeholder="blur" alt={"Get Electrician"}/>
            </div>
            <p className="font-medium text-center" >Electrician</p>
          </div>
          <div className="categoryCards" onClick={() => searchHandler("Plumber")}>
            <div className="relative h-20 w-20">
              <Image src={plumberImg} layout="fill" placeholder="blur" alt={"Get Plumbers"}/>
            </div>
            <p className="font-medium text-center">Plumber</p>
          </div>
          <div className="categoryCards" onClick={() => searchHandler("Maid")}>
            <div className="relative h-20 w-20">
              <Image src={maidImg} layout="fill" placeholder="blur" alt={"Get Maids"}/>
            </div>
            <p className="font-medium text-center">Maid</p>
          </div>
          <button className="categoryCards" onClick={() => searchHandler("Labour")}>
            <div className="relative h-20 w-20">
              <Image src={helperImg} layout="fill" objectFit="contain" placeholder="blur"alt={"Get Labour"}/>
            {/*Icons made by <a href="https://www.flaticon.com/authors/skyclick" title="Skyclick">Skyclick</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
            </div>
            <p className="font-medium text-center">Labour</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
