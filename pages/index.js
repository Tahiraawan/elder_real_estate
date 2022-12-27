import Layout from '../pages/src/components/Layout';
import HeroSection from './src/components/HeroSection';
import PowerNumbers from './src/components/PowerNumbers';
import OurWork from './src/components/OurWork';
import Platform from './src/components/Platform';

export default function Home({pageData}) {
  console.log("-------data",pageData)
  return (
   <Layout>
    <HeroSection/>
    <Platform data={pageData?.ourPlatform}/>
    <PowerNumbers/>
    <OurWork/>
   </Layout>
  ) 
}
// http://localhost:1337/api/home?populate=deep
export async function getStaticProps(){
  let pageData = null;
 try {
  pageData = await (await fetch("http://localhost:1337/api/home?populate=deep"))?.json();
  // console.log("---res",res);
  
 } catch (error) {
  
 }
  return{
    props:{
        pageData:pageData?.data?.attributes || "null"
    }
  }
}
