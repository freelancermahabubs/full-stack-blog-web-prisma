import React from 'react';
import Hero from "@/components/Home/Hero";
import PlainLayout from "@/components/Master/Plain-Layout";
import NewsList from "@/components/Home/NewsList";
import PopularList from "@/components/Home/PopularList";
import {PrismaClient} from "@prisma/client";

async function getData() {
    const prisma=new PrismaClient();

    let Slider= await prisma.news_list.findMany({where:{type:"Slider"}})
    let Featured= await prisma.news_list.findMany({where:{type:'Featured'}})
    let Popular= await prisma.news_list.findMany({where:{type:'Popular'}})
    let Latest= await prisma.news_list.findMany({orderBy: {id: 'desc'}, take: 12})

    return {Slider:Slider,Featured:Featured,Popular:Popular,Latest:Latest}

}

const Page = async () => {

    const data = await getData();

    return (
        <PlainLayout>
            <Hero featured={data['Featured']} slider={data['Slider']}/>
            <div className="container mt-5">
                <h5>LATEST</h5>
                <hr className=""/>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                        <NewsList latest={data['Latest']}/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                        <PopularList popular={data['Popular']}/>
                    </div>
                </div>
            </div>
        </PlainLayout>
    );
};
export default Page;