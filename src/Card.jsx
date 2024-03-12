import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { FaRegFileLines } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import {motion} from 'framer-motion';

export default function Card({ item,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} className='w-60 h-72 flex-shrink-0 bg-zinc-900 rounded-[40px] overflow-hidden  relative text-lime-50 py-8 px-5'>
      <span><FaRegFileLines /></span>
      <p className='leading-tight mt-5 text-sm font-semibold'>{item.description} </p>
      <div className=" footer w-full      left-0    absolute bottom-0 " >
        <div className='flex mb-3 w-full px-8 py-3 items-center justify-between'>
          <h5>{item.file_size}</h5>
          <span className='w-7 h-7  flex rounded-full bg-zinc-600 items-center justify-center '>
            {item.close ? <IoCloseOutline color='#000' /> : <FaDownload size=".7rem" color='#000' />}
          </span>
        </div>
        {item.tag.isopen&&
        <div className={`tag w-full py-4 ${item.tag.tagcolor==="blue"?"bg-blue-600":"bg-green-600"} flex  items-center justify-center `}>
          <h3 className=' text-sm font-semibold'>{item.tag.tagtitle}</h3>

        </div>}
        
      </div>
    </motion.div>
  )
}
