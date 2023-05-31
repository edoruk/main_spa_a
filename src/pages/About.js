import { useEffect, useState } from "react"
import AboutNavbar from "@/components/AboutNavbar"
import AboutMobileNav from "@/components/AboutMobileNav"
import { useIntl } from "react-intl"
import { AboutContentCard } from "@/components/AboutContentCard"
import Head from "next/head"

function About() {
  const intl = useIntl()
  const title = intl.formatMessage({ id: "page.about.title" })
  const contents = intl.messages["page.about.contents"]
  const descriptions = intl.messages["page.about.descriptions"]

  const [width, setWidth] = useState()
  const isMobile = width < 640

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
        <meta name="description" content="About Us description" />
      </Head>
      {isMobile ? <AboutMobileNav /> : <AboutNavbar />}
      <div className="flex justify-center items-center pb-16 -z-50">
        <div
          className=" w-[80%] pt-[5rem]
         flex flex-col justify-center items-center  bg-opacity-60 rounded-[2rem] gap-[5rem]"
        >
          {contents.map((content, key) => {
            return (
              <AboutContentCard
                key={key}
                content={content}
                descriptions={descriptions}
                i={key}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default About
