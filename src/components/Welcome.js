import { useState, useEffect } from "react"
import { useScroll, motion, useTransform } from "framer-motion"
import { Link as LinkScroll } from "react-scroll"

function Welcome(props) {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], ["100%", "0%"])
  const y = useTransform(scrollY, [0, 500], ["0%", "30%"])

  return (
    <div id={props.contents[0]}>
      <motion.section
        className="bg-white w-screen h-screen flex flex-col justify-center items-center bg-opacity-0 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ opacity, y }}
      >
        <h1 className=" 2xl:text-[45px] xl:text-[40px] md:text-[35px] sm:text-[30px] text-[28px] font-[100]">
          {props.welcome[0]}
        </h1>
        <h2 className=" text-center 2xl:text-[70px] xl:text-[65px] md:text-[60px] sm:text-[45px] text-[43px] font-[700]">
          {props.welcome[1]}
        </h2>
        <div className="  flex items-end justify-end pt-8">
          <LinkScroll
            to={props.contents[2]}
            spy={true}
            smooth={true}
            offset={-62}
            duration={2500}
            className="text-[.6rem] 2xl:text-[1.2rem] xl:text-[1rem] md:text-[.8rem]  rounded-[10px] border-[1px] px-[1rem] py-[0.3rem] border-white font-[100] cursor-pointer hover:opacity-[0.8]"
          >
            {props.descriptions[0]}
          </LinkScroll>
        </div>
      </motion.section>
    </div>
  )
}

export default Welcome
