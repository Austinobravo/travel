
import Hero from './_components/Hero'
import Update from './_components/Update'
import Document from './_components/Document'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className='pt-20'>
        <Hero/>
        <Update/>
        <Document/>

      </div>
      <Footer/>
    </main>
  )
}
