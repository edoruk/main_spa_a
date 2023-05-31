import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faEnvelopeOpenText,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons"

function Contact(props) {
  return (
    <main
      id={props.id}
      className="w-[100%] md:w-[95%] bg-gradient-to-b from-slate-500/90 to-slate-800  text-white flex flex-col rounded-[0rem] md:rounded-[2rem] justify-center items-center gap-8 p-8 sm:px-18 whitespace-pre-line shadow-fade"
    >
      <h2
        className={`w-[50%] text-center text-[35px] md:text-[40px] xl:text-[45px] `}
      >
        {props.content}
      </h2>

      <div className="md:w-[95%] flex flex-col sm:flex-row md:justify-evenly gap-[3rem]">
        <section className=" sm:w-[31%] flex flex-col gap-5">
          <FontAwesomeIcon
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
            icon={faLocationDot}
          />
          <div className="text-center text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg lg:leading-[1.4rem]">
            {props.descriptions[5]}
          </div>
        </section>
        <section className=" sm:w-[31%]  flex flex-col gap-5 items-center">
          <FontAwesomeIcon
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
            icon={faEnvelopeOpenText}
          />
          <div className="text-center text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg">
            {props.descriptions[6]}
          </div>
          <Link
            href="/Kvkk"
            className="text-center text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base hover:text-blue-700 "
          >
            {props.descriptions[7]}
          </Link>
        </section>
        <section className=" sm:w-[31%] flex flex-col gap-5">
          <FontAwesomeIcon
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
            icon={faLandmark}
          />
          <div className="text-center text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg">
            {props.descriptions[8]}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contact
