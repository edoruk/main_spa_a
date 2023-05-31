import { useEffect, useState } from "react"
import { Link as Link1 } from "react-scroll"
import { useIntl } from "react-intl"
import { useRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import { FlagIcon } from "react-flag-kit"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Navbar() {
  const { locales } = useRouter()
  const intl = useIntl()
  const navContents = intl.messages["page.home.contents"]
  const logo = intl.formatMessage({ id: "page.home.title" })

  const [show, setShow] = useState(true)

  useEffect(() => {
    let previousScrollPosition = 0
    let currentScrollPosition = 0

    window.addEventListener("scroll", (e) => {
      // Get the new Value
      currentScrollPosition = window.pageYOffset

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false)
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true)
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition
    })

    window.removeEventListener("scroll", (e) => {})
  }, [])

  return (
    <>
      {show ? (
        <motion.div
          transition={{ ease: "linear", duration: 0.3 }}
          className="w-screen h-[4rem] flex flex-row items-center justify-between px-6 fixed top-0 bg-black text-white bg-opacity-90 z-50"
        >
          <div className=" w-[15%]">{logo}</div>
          <ul
            className=" flex flex-row
            } w-[85%]  h-full text-center "
          >
            {navContents.map((navContent, key) => {
              return (
                <li key={key} className="w-[35%] h-[100%] ">
                  {(navContent == "About" || navContent == "Hakkımızda") && (
                    <Link
                      href="/About"
                      className="px-[0.5rem] h-[100%] w-full justify-center flex items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[1100] duration-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat "
                    >
                      {navContent}
                    </Link>
                  )}
                  {(navContent == "Ürünler" || navContent == "Products") && (
                    <Link
                      href="/Products"
                      className="h-[100%] w-full flex justify-center items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[1100] duration-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat"
                    >
                      {navContent}
                    </Link>
                  )}
                  {(navContent == "Ana Sayfa" || navContent == "Homepage") && (
                    <Link1
                      to={navContent}
                      spy={true}
                      smooth={true}
                      offset={-62}
                      duration={1500}
                      className="h-[100%] cursor-pointer w-full flex justify-center items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[1100] duration-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat"
                    >
                      <FontAwesomeIcon
                        icon={faHouseChimney}
                        className="text-[20px]"
                      />
                    </Link1>
                  )}
                  {navContent == "Ürünler" ||
                  navContent == "Products" ||
                  navContent == "About" ||
                  navContent == "Hakkımızda" ||
                  navContent == "Ana Sayfa" ||
                  navContent == "Homepage" ? null : (
                    <Link1
                      to={navContent}
                      spy={true}
                      smooth={true}
                      offset={-62}
                      duration={1500}
                      className="px-[0.5rem] h-[100%] w-full flex justify-center items-center bg-[length:0%_100%] hover:cursor-pointer bg-[0%] hover:bg-[length:100%_100%] transition-[1100] duration-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat"
                    >
                      {navContent}
                    </Link1>
                  )}
                </li>
              )
            })}
          </ul>
          <div className="flex flex-col gap-2">
            {[...locales].sort().map((locale) => {
              return (
                <Link href="/" key={locale} locale={locale}>
                  {locale === "en" ? (
                    <motion.div
                      initial={{ x: 75 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      <FlagIcon
                        className="hover:scale-125 rounded-[4px]"
                        code="GB"
                        size={27}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ x: 50 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      <FlagIcon
                        code={locale.toUpperCase()}
                        size={27}
                        className="hover:scale-125 rounded-[4px]"
                      />
                    </motion.div>
                  )}
                </Link>
              )
            })}
          </div>
        </motion.div>
      ) : (
        <motion.div
          animate={{
            y: -60,
            opacity: 0,
          }}
          transition={{
            ease: "linear",
            duration: 0.3,
          }}
          className="w-screen h-[4rem] bg-black flex flex-row items-center justify-between pl-4 pr-4 fixed top-0"
        >
          <div>LOGO</div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
