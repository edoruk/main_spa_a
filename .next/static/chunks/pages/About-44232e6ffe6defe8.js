(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{4741:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){return i(6692)}])},6692:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var s=i(5893),n=i(7294),r=i(6261),a=i(6896),l=i(1163),o=i(1664),c=i.n(o),d=i(1865),x=i(2541),u=i(7814),f=i(9417),h=function(){let{locales:e}=(0,l.useRouter)(),t=(0,a.Z)(),i=t.messages["page.about.nav"],[o,h]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=0,t=0;window.addEventListener("scroll",i=>{e-(t=window.pageYOffset)<0?h(!1):e-t>0&&h(!0),e=t})},[]),(0,s.jsx)(s.Fragment,{children:o?(0,s.jsxs)(d.E.div,{transition:{ease:"linear",duration:.3},className:"w-screen z-[2] shadow-2xl h-[4rem] border-black flex flex-row items-center justify-between pl-4 pr-4 fixed top-0 bg-black text-white bg-opacity-90",children:[(0,s.jsx)("div",{children:"LOGO"}),(0,s.jsx)("ul",{className:"flex flex-row w-[85%] justify-center items-center h-full text-center",children:i.map((e,t)=>(0,s.jsx)("li",{className:"hover:cursor-pointer h-full w-[20%] flex justify-center items-center ",children:"Anasayfa"==e||"Homepage"==e?(0,s.jsx)(c(),{href:"/",className:"w-full h-full flex justify-center items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[1100]  duration-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat",children:(0,s.jsx)(u.G,{icon:f.L2e,className:"text-[20px] "})}):(0,s.jsx)(r.rU,{to:e,spy:!0,smooth:!0,offset:-62,duration:1500,className:"w-full h-full flex justify-center items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[1100] duration-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat",children:e})},t))}),(0,s.jsx)("div",{className:"flex flex-col gap-2",children:[...e].sort().map(e=>(0,s.jsx)(c(),{href:"/About",locale:e,children:"en"===e?(0,s.jsx)(d.E.div,{initial:{x:75},animate:{x:0},transition:{duration:.7,delay:.5},children:(0,s.jsx)(x.U,{className:"hover:scale-125 rounded-[4px]",code:"GB",size:27})}):(0,s.jsx)(d.E.div,{initial:{x:50},animate:{x:0},transition:{duration:.7,delay:.3},children:(0,s.jsx)(x.U,{code:e.toUpperCase(),size:27,className:"hover:scale-125 rounded-[4px]"})})},e))})]}):(0,s.jsx)(d.E.div,{animate:{y:-60,opacity:0},transition:{ease:"linear",duration:.3},className:"w-screen h-[4rem] z-[1] shadow-2xl bg-black flex flex-row items-center justify-between pl-4 pr-4 fixed top-0",children:(0,s.jsx)("div",{children:"LOGO"})})})},m=function(){let{locales:e}=(0,l.useRouter)(),t=(0,a.Z)(),i=t.messages["page.about.nav"],o=t.formatMessage({id:"page.home.title"}),[h,m]=(0,n.useState)(!1);return(0,s.jsxs)("main",{className:"w-full rounded-b-[20px] fixed  bg-black flex flex-col z-[99999]",children:[(0,s.jsxs)("div",{className:"flex flex-row px-4 py-2 items-center",children:[(0,s.jsx)("div",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth",duration:1500})},className:"h-[100%] cursor-pointer w-full flex justify-center items-center ",children:(0,s.jsx)("div",{id:"logo",className:"text-white w-full text-[2rem] text-center items-center",children:o})}),(0,s.jsx)("section",{id:"menu-button",className:"absolute right-4 cursor-pointer",onClick:()=>{m(!h)},children:(0,s.jsx)(u.G,{icon:f.xiG,className:"text-white text-[1.8rem]"})})]}),(0,s.jsxs)(d.E.ul,{id:"contents",className:"text-white items-center hidden",variants:{variantOpened:{visibility:"visible",opacity:1,transition:{duration:.4,delay:.4}},variantClosed:{visibility:"hidden",opacity:0,height:0}},animate:h?"variantOpened":"variantClosed",transition:{ease:"easeOut",duration:.5},children:[i.map((e,t)=>(0,s.jsx)(d.E.li,{className:"w-full text-center py-6 text-lg cursor-pointer",animate:h?{opacity:1}:{opacity:0},transition:{duration:.1},children:"Anasayfa"==e||"Homepage"==e?(0,s.jsx)(c(),{href:"/",className:"w-full h-full flex justify-center items-center ",children:(0,s.jsx)(u.G,{icon:f.L2e,className:"text-[20px] "})}):(0,s.jsx)(r.rU,{to:e,spy:!0,smooth:!0,offset:-62,duration:1500,className:"w-full h-full flex justify-center items-center ",onClick:()=>{m(!h)},children:e})},t)),(0,s.jsx)("div",{className:"flex justify-center gap-8 p-5 ",children:[...e].sort().map(e=>(0,s.jsx)(c(),{href:"/About",locale:e,children:"en"===e?(0,s.jsx)("div",{children:(0,s.jsx)(x.U,{className:"hover:scale-125 rounded-[4px]",code:"GB",size:27})}):(0,s.jsx)("div",{children:(0,s.jsx)(x.U,{code:e.toUpperCase(),size:27,className:"hover:scale-125 rounded-[4px]"})})},e))})]})]})};let p=e=>(0,s.jsxs)(d.E.main,{id:e.content,className:"w-[100%] flex flex-col  items-center bg-gradient-to-b from-slate-300/90 to-slate-500 shadow-fade text-black  rounded-[30px] py-10 gap-4",initial:{x:"-100%"},whileInView:{x:0},transition:{duration:1.5},viewport:{once:!0},children:[(0,s.jsx)("h2",{className:" w-[50%] text-center text-[45px] pb-4 border-b-[2px] border-[var(--bg-col5)] ",children:e.content}),(0,s.jsx)("p",{className:" w-[80%] text-justify text-[17px]  whitespace-pre-line ",children:e.descriptions[e.i]})]},e.i);var j=i(9008),w=i.n(j),b=function(){let e=(0,a.Z)(),t=e.formatMessage({id:"page.about.title"}),i=e.messages["page.about.contents"],r=e.messages["page.about.descriptions"],[l,o]=(0,n.useState)();return(0,n.useEffect)(()=>{o(window.innerWidth),window.addEventListener("resize",e=>{o(window.innerWidth)}),window.removeEventListener("resize",e=>{o(window.innerWidth)})},[]),(0,s.jsxs)("main",{children:[(0,s.jsxs)(w(),{children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"description",content:"About Us description"})]}),l<640?(0,s.jsx)(m,{}):(0,s.jsx)(h,{}),(0,s.jsx)("div",{className:"flex justify-center items-center pb-16 -z-50",children:(0,s.jsx)("div",{className:" w-[80%] pt-[5rem] flex flex-col justify-center items-center  bg-opacity-60 rounded-[2rem] gap-[5rem]",children:i.map((e,t)=>(0,s.jsx)(p,{content:e,descriptions:r,i:t},t))})})]})}}},function(e){e.O(0,[976,330,379,261,774,888,179],function(){return e(e.s=4741)}),_N_E=e.O()}]);