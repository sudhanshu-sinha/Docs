import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { motion, scale } from "motion/react";
const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="select-none relative w-60 h-72 bg-zinc-900/80 rounded-[45px] text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center px-8 mb-5">
          <h5 className={`${data.isDownloaded.value && "text-green-600"}`}>
            {data.size}
          </h5>
          <span className="flex items-center justify-center w-7 h-7 bg-zinc-600 rounded-full">
            {data.buttonClicked ? (
              data.isDownloaded.value ? (
                <MdDeleteOutline />
              ) : (
                <IoIosClose />
              )
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.buttonClicked && (
          <div
            className={`tag w-full py-4 ${
              data.isDownloaded.value ? "bg-green-600" : "bg-sky-600"
            } flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold">
              {data.isDownloaded.value ? "Open Now" : "Downloading..."}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
