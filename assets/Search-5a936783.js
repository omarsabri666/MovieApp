import{u as i,j as e,U as c,L as n}from"./index-66ce40dc.js";import{u as o,c as u}from"./api-280edaf0.js";function d({movie:s}){const t=i();return e.jsxs("div",{className:"  py-10 text-white text-center flex px-10 md:px-0 gap-3  w-full flex-col ",children:[e.jsx("img",{onClick:()=>t(`/movieDetails/${s.imdbID}`),className:"cursor-pointer",src:s.Poster,alt:`${s.Title}img`}),e.jsx("h2",{className:" text-lg font-semibold",children:s.Title})]})}function x(){var a;const{s}=c(),{data:t,isLoading:r}=o({queryFn:()=>u(s),queryKey:["search",s]});return r?e.jsx("div",{className:" col-span-5 flex items-center justify-center",children:e.jsx(n,{})}):e.jsx("div",{className:" grid grid-cols-1 col-span-5 sm:grid-cols-2 md:grid-cols-5 gap-5",children:(a=t==null?void 0:t.Search)==null?void 0:a.map(l=>e.jsx(d,{movie:l},l.imdbID))})}function p(){const{s,setS:t}=c();return e.jsx("input",{value:s,onChange:r=>t(r.target.value),className:" rounded-full outline-2  outline outline-[#E50914]  py-2 px-6 col-span-5 w-full ",placeholder:"Search",type:"text"})}function h(){return e.jsxs("div",{className:" px-2 md:px-0 grid md:grid-cols-5 grid-cols-1   py-10",children:[e.jsx(p,{}),e.jsx(x,{})]})}export{h as default};
