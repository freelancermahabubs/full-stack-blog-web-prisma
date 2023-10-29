import React, {Fragment} from "react";
import {Toaster} from "react-hot-toast";
import AppNavBar from "@/components/Master/AppNavBar";
import Footer from "@/components/Master/Footer";
import {headers} from "next/headers";
import {PrismaClient} from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let socials = await prisma.socials.findMany();
  let categories = await prisma.categories.findMany();
  return {socials: socials, categories: categories};
}

const PlainLayout = async (props) => {
  const headersList = headers();
  const firstName = headersList.get("firstName");

  const data = await getData();

  return (
    <Fragment>
      <AppNavBar data={data} firstName={firstName} />
      {props.children}
      <Toaster position="bottom-center" />
      <Footer data={data} />
    </Fragment>
  );
};
export default PlainLayout;
