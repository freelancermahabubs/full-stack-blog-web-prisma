import {PrismaClient} from "@prisma/client";
import NewsList from "@/components/Home/NewsList";
import PopularList from "@/components/Home/PopularList";
import React from "react"

async function getData(id) {
    const prisma=new PrismaClient();
    let News= await prisma.news_list.findMany({
        where:{catID:parseInt(id)},
        orderBy: {id: 'desc'}
    })
    let Popular= await prisma.news_list.findMany({where:{type:'Popular'}})
    return {News:News,Popular:Popular}
}

const Page = async (props) => {


    const data=await getData(props.searchParams['id'])


  return (
       <div>
           <div className="container mt-5">
               <hr className=""/>
               <div className="row">
                   <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                       <NewsList latest={data['News']}/>
                   </div>
                   <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                       <PopularList popular={data['Popular']}/>
                   </div>
               </div>
           </div>
       </div>
  )
}
export default Page;