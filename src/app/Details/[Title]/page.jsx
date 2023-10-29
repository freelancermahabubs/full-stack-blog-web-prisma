import {PrismaClient} from "@prisma/client";
import NewsList from "@/components/Home/NewsList";
import PopularList from "@/components/Home/PopularList";
import React from "react"
import NewsDetails from "@/components/Home/NewsDetails";

async function getData(id) {
    const prisma=new PrismaClient();
    let Details= await prisma.news_list.findUnique({where:{id:parseInt(id)}})
    let Popular= await prisma.news_list.findMany({where:{type:'Popular'}})
    return {Popular:Popular,Details:Details}
}

/*
export async function generateMetadata(id){
    const prisma=new PrismaClient();
    let SEO=await prisma.news_list.findUnique({where:{id:parseInt(id)}})
    return{
        title:SEO['title'],
        description:SEO['short_des'],
        keywords:SEO['keywords'],
        openGraph: {
            images:SEO['img1'],
        },
    }
}

*/

const Page = async (props) => {


    let id=props.searchParams['id']
    let data= await getData(id)


  return (
       <div>
           <div className="container mt-5">
               <hr className=""/>
               <div className="row">
                   <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                        <NewsDetails details={data['Details']}/>
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