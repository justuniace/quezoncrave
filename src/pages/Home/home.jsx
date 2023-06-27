import Hero from "./section/hero/hero";
import Category from "./section/category/category";
import Explore from "./section/Explore/explore";
import Howitworks from "./section/Howitwork/how-it-works";
import BusinessHours from "./section/Hours/BusinessHours";

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Explore />
      <Howitworks />
      <BusinessHours />
    </div>
  );
}

export default Home;
