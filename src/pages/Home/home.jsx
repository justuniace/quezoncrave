import Hero from "./section/hero/hero";
import Category from "./section/category/category";
import Explore from "./section/Explore/explore";
import Howitworks from "./section/HowtoOrder/how-it-works";
//import BusinessHours from "./section/Hours/BusinessHours";
import Satisfied from "./section/Satisfied/satisfied";
import Reserve from "./section/Reservation/reserve";
function Home() {
  return (
    <div>
      <Hero />
      <Category />

      <Explore />
      <Howitworks />
      <Satisfied />
      <Reserve />

      {/* <BusinessHours /> */}
    </div>
  );
}

export default Home;
