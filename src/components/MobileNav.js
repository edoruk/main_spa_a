import { useState } from "react"
import { Link as Link1 } from "react-scroll"
import { useIntl } from "react-intl"
import { useRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import { FlagIcon } from "react-flag-kit"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function MobileNav() {
  const { locales } = useRouter()
  const locale = navigator.languages[0]
  console.log(locale)

  const intl = useIntl()
  const navContents = intl.messages["page.home.contents"]
  const logo = intl.formatMessage({ id: "page.home.title" })

  const [isMenuClicked, setIsmenuClicked] = useState(false)

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
    <main className="w-full rounded-b-[20px] fixed  bg-black flex flex-col z-10  ">
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
            setIsmenuClicked(!isMenuClicked)
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
          return navContent == "Ana Sayfa" ||
            navContent == "Homepage" ? null : (
            <motion.li
              key={key}
              className="w-full text-center py-6 text-lg cursor-pointer"
              animate={isMenuClicked ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {(navContent == "About" || navContent == "Hakkımızda") && (
                <Link
                  href="/About"
                  className="px-[0.5rem] h-[100%] w-full justify-center flex items-center"
                >
                  {navContent}
                </Link>
              )}
              {(navContent == "Ürünler" || navContent == "Products") && (
                <Link
                  href="/Products"
                  className="h-[100%] w-full flex justify-center items-center"
                >
                  {navContent}
                </Link>
              )}

              {navContent == "Ürünler" ||
              navContent == "Products" ||
              navContent == "About" ||
              navContent == "Hakkımızda" ? null : (
                <Link1
                  to={navContent}
                  spy={true}
                  smooth={true}
                  offset={-62}
                  duration={1500}
                  className="px-[0.5rem] h-[100%]  flex justify-center items-center "
                  onClick={() => {
                    setIsmenuClicked(!isMenuClicked)
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
              <Link href="/" key={locale} locale={locale}>
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

export default MobileNav
