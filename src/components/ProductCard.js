import * as React from "react"

export default function ProductCard(props) {
  console.log(props.pDesc)
  return (
    <main className="w-[20rem] h-[23rem] rounded-[20px] bg-white overflow-hidden shadow-fade">
      <div
        id="card-top"
        className="w-full h-[50%] bg-content-image-[3] bg-cover "
      />
      <div id="card-bottom" className="p-4">
        <p className="text-black">{props.pDesc}</p>
      </div>
    </main>
  )
}
