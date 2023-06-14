import Hero from "./section/hero/hero";
import Category from "./section/category/category"
import Explore from "./section/Explore/explore"
import Howitworks from "./section/Howitwork/how-it-works";

function Home() {
  return (
    <div >
      <Hero />
      <Category />
      <Explore />
      <Howitworks />
    </div>
  );
}

export default Home;
