import ArrivalBanner from "../components/banner/ArrivalBanner";
import CategoryBanner from "../components/banner/CategoryBanner";
import ViewAllProducts from "../components/buttons/ViewAllProducts";
import CategoriesList from "../components/categories/CategoriesList";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import HeroSection from "../components/pagesections/HeroSection";
import HomeSections from "../components/pagesections/HomeSections";
import ProductList from "../components/product/ProductList";

export default function Home() {
  return (
    <main className="wrapper">
      <Header />
      <section className="flex w-full">
        <Menu />
        <HeroSection />
      </section>
      <HomeSections name="Today's" title="flash sales" hasTimer={true}>
        <ProductList />
        <ViewAllProducts btnName="View All Products" />
      </HomeSections>
      <HomeSections name="Categories" title="Browse By Categories">
        <CategoriesList />
      </HomeSections>
      <HomeSections
        name="This Month"
        title="Best Selling Products"
        hasTimer={false}
        hasRightButton={true}
      >
        <ProductList />
      </HomeSections>
      <CategoryBanner />

      <HomeSections name={"Our Products"} title={"Explore Our Products"}>
        <ProductList />
        <ViewAllProducts btnName="View All Products" />
      </HomeSections>

      <HomeSections name={"Featured"} title={"New Arrival"}>
        <ArrivalBanner />
      </HomeSections>
    </main>
  );
}
