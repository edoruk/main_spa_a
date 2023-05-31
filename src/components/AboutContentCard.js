import React from "react"
import { motion } from "framer-motion"

export const AboutContentCard = (props) => {
  return (
    <motion.main
      id={props.content}
      className={`w-[100%] flex flex-col  items-center bg-gradient-to-b from-slate-300/90 to-slate-500 shadow-fade text-black  rounded-[30px] py-10 gap-4`}
      key={props.i}
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h2 className=" w-[50%] text-center text-[45px] pb-4 border-b-[2px] border-[var(--bg-col5)] ">
        {props.content}
      </h2>
      <p className=" w-[80%] text-justify text-[17px]  whitespace-pre-line ">
        {props.descriptions[props.i]}
      </p>
    </motion.main>
  )
}
