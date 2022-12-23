import Layout from '../pages/src/components/Layout'
import Hero from './about/Hero'
import HeroSection from './src/components/HeroSection'
import OurWork from './src/components/OurWork'
import Platform from './src/components/Platform'

export default function Home() {
  return (
   <Layout>
    <HeroSection/>
    <Platform/>
    <OurWork/>
   </Layout>
  )
}
