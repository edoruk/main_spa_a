function HomeContentCard(props) {
  return (
    <div
      className={`w-full ${
        props.i % 2 === 0
          ? " md:pl-[10%] lg:pl-[15%] xl:pl-[20%] "
          : "md:pr-[10%] lg:pr-[15%] xl:pr-[30%]"
      }`}
    >
      {props.i === 5 ? null : (
        <main
          id={props.content}
          className={`w-full flex flex-col shadow-fade  ${
            props.i % 2 === 0
              ? "md:rounded-l-[20rem] lg:pl-8 bg-gradient-to-r from-slate-500 to-slate-300  text-black "
              : "md:rounded-r-[20rem] lg:pr-8 bg-gradient-to-l from-slate-500 to-slate-300 text-black"
          }   items-center p-8 md:pb-16 lg:pb-10 xl:pb-12 2xl:pb-16`}
          key={props.i}
        >
          <h2
            className={`w-[50%]  text-center text-[35px] md:text-[40px] xl:text-[45px] `}
          >
            {props.content}
          </h2>
          <div className="w-full ">
            {props.i !== 5 ? (
              props.i === 0 ? null : (
                <div
                  className={`w-full flex flex-col ${
                    props.i === 3
                      ? "md:flex-row md:pr-12 xl:pr-[5rem]"
                      : "md:flex-row-reverse md:pl-12 xl:pl-[5rem] "
                  } gap-8 justify-between items-center `}
                >
                  <p
                    id="home-desc"
                    className={`${
                      props.i % 2 === 0
                        ? props.i === 4
                          ? "w-full md:ml-16 lg:px-4 xl:px-18 2xl:pl-10"
                          : "xl:max-w-[45rem]"
                        : null
                    } bg-transparent p-8 w-[100%] text-justify text-sm  md:text-sm  xl:text-base  whitespace-pre-line`}
                  >
                    {props.descriptions[props.i]}
                  </p>
                  {props.i === 4 ? null : (
                    <canvas
                      id="home-image"
                      className="w-[20rem] md:w-[15rem] xl:w-[18rem] h-[10rem]   md:h-[15rem] xl:h-[18rem] rounded-[10px] md:rounded-full bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(/home/content-${props.i}.webp)`,
                      }}
                    ></canvas>
                  )}
                </div>
              )
            ) : null}
          </div>
        </main>
      )}
    </div>
  )
}

export default HomeContentCard
