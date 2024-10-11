import Head from "next/head"
import dynamic from "next/dynamic"

import { useIntl } from "react-intl"

import { motion } from "framer-motion"
import MobileNav from "@/components/MobileNav"
import { useState, useEffect } from "react"

const DynamicHeader = dynamic(() => import("../components/Navbar"))

const DynamicContentCard = dynamic(() =>
  import("../components/HomeContentCard")
)

const DynamicWelcome = dynamic(() => import("../components/Welcome"))
const DynamicContact = dynamic(() => import("../components/Contact"))

export default function Home({ dir }) {
  const intl = useIntl()

  const [width, setWidth] = useState()
  const isMobile = width < 768

  const title = intl.formatMessage({ id: "page.home.title" })
  const welcome = intl.messages["page.home.welcome"]

  const contents = intl.messages["page.home.contents"]
  const descriptions = intl.messages["page.home.contents.description"]

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth)
    })

    window.removeEventListener("resize", (e) => {
      setWidth(window.innerWidth)
    })
  }, [])

  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Homepage description" />
      </Head>

      {isMobile ? <MobileNav /> : <DynamicHeader />}
      <div
        dir={dir}
        className=" pb-[4rem] flex flex-col justify-evenly items-center w-screen font-mont text-white  "
      >
        <DynamicWelcome
          welcome={welcome}
          contents={contents}
          descriptions={descriptions}
        />
        <div
          className=" w-[100%] gap-60 mb-[-5rem]
         flex flex-col justify-center items-center bg-[#ffffff00] text-[#231F20]"
        >
          {contents.map((content, key) => {
            return content === "About" ||
              content === "Hakkımızda" ||
              content === "Products" ||
              content === "Ürünler" ||
              content === "Homepage" ||
              content === "Ana Sayfa" ? null : isMobile ? (
              <DynamicContentCard
                content={content}
                descriptions={descriptions}
                i={key}
              />
            ) : (
              <motion.div
                className="w-full"
                key={key}
                initial={key % 2 == 0 ? { opacity: 0 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <DynamicContentCard
                  content={content}
                  descriptions={descriptions}
                  i={key}
                />
              </motion.div>
            )
          })}
        </div>
        {isMobile ? (
          <DynamicContact
            id={contents[5]}
            content={contents[5]}
            descriptions={descriptions}
          />
        ) : (
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <DynamicContact
              id={contents[5]}
              content={contents[5]}
              descriptions={descriptions}
            />
          </motion.div>
        )}
      </div>
    </main>
  )
}
