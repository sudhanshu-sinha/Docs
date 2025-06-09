import React, { useRef } from "react";
import Card from "./Card";
import { button, i } from "motion/react-client";
import { color } from "motion";

const Foreground = () => {
  const data = [
  {
    desc: "sLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum!",
    size: ".4mb",
    buttonClicked: false,
    isDownloaded: {
      value:false,
    } 
  },
  {
    desc: "sLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum!",
    size: ".4mb",
    buttonClicked: true,
    isDownloaded: {
      value:true,
    }
  },
  {
    desc: "sLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum!",
    size: ".4mb",
    buttonClicked: true,
    isDownloaded: {
      value:false,
    } 
  },
  {
    desc: "sLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum!",
    size: ".4mb",
    buttonClicked: true,
    isDownloaded: {
      value:true,
    }
  },
  {
    desc: "sLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum!",
    size: ".4mb",
    buttonClicked: false,
    isDownloaded: {
      value:false,
    } 
  },
  {
    desc: "sLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum!",
    size: ".4mb",
    buttonClicked: true,
    isDownloaded: {
      value:false,
    }
  },]
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full flex gap-10 flex-wrap h-full p-5"
    >
      {data.map((item,index)=>(
        <Card data={item} reference={ref} key={index}/>
      ))}
    </div>
  );
};

export default Foreground;
