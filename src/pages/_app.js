import "@/styles/globals.css"
import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import { Roboto, Montserrat } from "next/font/google"

import en from "../../i18n/en.json"
import tr from "../../i18n/tr.json"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  //   style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const mont = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  //   style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mont",
})

const messages = {
  en,
  tr,
}

function getDirection(locale) {
  return "ltr"
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter()

  return (
    <main className={`${roboto.variable} font-sans`}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div id="background">
          <Component {...pageProps} dir={getDirection(locale)} />
        </div>
      </IntlProvider>
    </main>
  )
}
