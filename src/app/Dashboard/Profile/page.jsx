import {headers} from "next/headers";
import {PrismaClient} from "@prisma/client";
async function getData() {
  let headerList=headers();
  let user_id=parseInt(headerList.get('id'));
  const prisma=new PrismaClient();
  return await prisma.users.findUnique({where:{id:user_id}})
}

import ProfileForm from "@/components/User/ProfileForm";
export default async function page() {
  const data = await getData();
  return (
      <ProfileForm propData={data}/>
  )
}