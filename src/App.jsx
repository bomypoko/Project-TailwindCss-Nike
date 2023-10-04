import { Hero , CustomerReviews , Footer, PopularProducts, Services , SpecialOffer, Subscribe , SuperQuality } from './sections/index'
import Nav from './components/Nav'
const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x py-16 sm:py-32 bg-red-300 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App