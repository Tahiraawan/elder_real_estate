import React from "react";
import Layout from "../src/components/Layout/index";
import Hero from "../../pages/about/Hero";
import Card from "./Card";

const index = ({ pageData }) => {
  return (
    <Layout>
      <Hero />
      <Card data={pageData?.TeamCard} />
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  let pageData = null;
  try {
    pageData = await (
      await fetch("http://localhost:1337/api/about?populate=deep")
    ).json();
    console.log("---card data", pageData);
  } catch (error) {}
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
    },
  };
}