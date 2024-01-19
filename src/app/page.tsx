import Header from '../components/header/Header'
import Menu from '../components/menu/Menu'
import HeroSection from '../components/pagesections/HeroSection'
import HomeSections from '../components/pagesections/HomeSections'
import ProductList from '../components/product/ProductList'

export default function Home() {
  return (
    <main className="wrapper">
      <Header />
      <section className="flex w-full">
        < Menu />
        < HeroSection />
      </section>
      < HomeSections name="Today's" title='flash sales' hasTimer={true}>
        < ProductList />
      </ HomeSections>
    </main >
  )
}
