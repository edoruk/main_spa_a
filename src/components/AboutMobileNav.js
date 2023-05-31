import { useState } from "react"
import { Link as Link1 } from "react-scroll"
import { useIntl } from "react-intl"
import { useRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import { FlagIcon } from "react-flag-kit"
import { faBars, faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AboutMobileNav() {
  const { locales } = useRouter()

  const intl = useIntl()
  const navContents = intl.messages["page.about.nav"]
  const logo = intl.formatMessage({ id: "page.home.title" })

  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const menuVariant = {
    variantOpened: {
      visibility: "visible",
      opacity: 1,
      transition: { duration: 0.4, delay: 0.4 },
    },
    variantClosed: {
      visibility: "hidden",
      opacity: 0,
      height: 0,
    },
  }
  return (
    <main className="w-full rounded-b-[20px] fixed  bg-black flex flex-col z-[99999]">
      <div className="flex flex-row px-4 py-2 items-center">
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth", duration: 1500 })
          }}
          className="h-[100%] cursor-pointer w-full flex justify-center items-center "
        >
          <div
            id="logo"
            className="text-white w-full text-[2rem] text-center items-center"
          >
            {logo}
          </div>
        </div>

        <section
          id="menu-button"
          className="absolute right-4 cursor-pointer"
          onClick={() => {
            setIsMenuClicked(!isMenuClicked)
          }}
        >
          <FontAwesomeIcon icon={faBars} className="text-white text-[1.8rem]" />
        </section>
      </div>

      <motion.ul
        id="contents"
        className="text-white items-center hidden"
        variants={menuVariant}
        animate={isMenuClicked ? "variantOpened" : "variantClosed"}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {navContents.map((navContent, key) => {
          return (
            <motion.li
              key={key}
              className="w-full text-center py-6 text-lg cursor-pointer"
              animate={isMenuClicked ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {navContent == "Anasayfa" || navContent == "Homepage" ? (
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center "
                >
                  <FontAwesomeIcon
                    icon={faHouseChimney}
                    className="text-[20px] "
                  />
                </Link>
              ) : (
                <Link1
                  to={navContent}
                  spy={true}
                  smooth={true}
                  offset={-62}
                  duration={1500}
                  className="w-full h-full flex justify-center items-center "
                  onClick={() => {
                    setIsMenuClicked(!isMenuClicked)
                  }}
                >
                  {navContent}
                </Link1>
              )}
            </motion.li>
          )
        })}
        <div className="flex justify-center gap-8 p-5 ">
          {[...locales].sort().map((locale) => {
            return (
              <Link href="/About" key={locale} locale={locale}>
                {locale === "en" ? (
                  <div>
                    <FlagIcon
                      className="hover:scale-125 rounded-[4px]"
                      code="GB"
                      size={27}
                    />
                  </div>
                ) : (
                  <div>
                    <FlagIcon
                      code={locale.toUpperCase()}
                      size={27}
                      className="hover:scale-125 rounded-[4px]"
                    />
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </motion.ul>
    </main>
  )
}

export default AboutMobileNav
