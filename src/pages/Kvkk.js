import { useIntl } from "react-intl"
import Link from "next/link"

function Kvkk() {
  const intl = useIntl()
  const head = intl.messages["page.kvkk.head"]
  const contents = intl.messages["page.kvkk.contents"]
  const descriptions = intl.messages["page.kvkk.descriptions"]
  const footerHead = intl.messages["page.kvkk.footer.head"]
  const footerBody = intl.messages["page.kvkk.footer.body"]
  return (
    <div>
      <Link href="/">Homepage</Link>
      <h1 className="text-[27px] text-center font-[600] my-8 border-2">
        {head}
      </h1>
      {contents.map((content, key) => {
        return (
          <div key={key} className="w-screen flex flex-col justify-center">
            <section className="pb-10 px-8">
              <h2 className="text-start pb-2 text-[16px] font-[600]">
                {content}
              </h2>
              <p className=" whitespace-pre-line text-justify">
                {descriptions[key]}
              </p>
            </section>
          </div>
        )
      })}
      <div id="footer" className="w-screen flex flex-col h-16 px-8 ">
        <h2>{footerHead}</h2>
        <p>{footerBody}</p>
      </div>
    </div>
  )
}

export default Kvkk
