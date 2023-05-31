import ProductCard from "@/components/ProductCard.js"
import { useIntl } from "react-intl"
import Head from "next/head"
import { FlagIcon } from "react-flag-kit"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

function Products() {
  const intl = useIntl()
  const { locales } = useRouter()

  const head = intl.messages["page.products.head"]
  const productNames = intl.messages["page.products.productName"]
  const productDescs = intl.messages["page.products.productDescription"]

  return (
    <main>
      <Head>
        <title>{head[0]}</title>
        <meta name="description" content={head[1]} />
      </Head>
      <div id="background" className="py-36">
        <div className="w-screen z-[2] flex flex-row items-center justify-between px-4 fixed top-8 bg-transparent text-white ">
          <Link
            href="/"
            className="h-full flex justify-center items-center text-white "
          >
            <FontAwesomeIcon icon={faHouseChimney} className="text-[20px] " />
          </Link>
          <div className="flex flex-col gap-2">
            {[...locales].sort().map((locale) => {
              return (
                <Link href="/Products" key={locale} locale={locale}>
                  {locale === "en" ? (
                    <motion.div
                      initial={{ x: 125 }}
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
                      initial={{ x: 100 }}
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
        </div>
        <section id="cards" className=" flex flex-wrap justify-center gap-12 ">
          {productNames.map((product, key) => {
            return (
              <div key={key}>
                <ProductCard pName={productNames} pDesc={productDescs[key]} />
              </div>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default Products
