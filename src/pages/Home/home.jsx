import Hero from "./section/hero/hero";
import Category from "./section/category/category";
import Explore from "./section/Explore/explore";
// import Howitworks from "./section/Howitwork/how-it-works";
//import BusinessHours from "./section/Hours/BusinessHours";
import Satisfied from "./section/Satisfied/satisfied";
import Reserve from "./section/Reservation/reserve";
function Home() {
  return (
    <div>
      <Hero />
      <Category />

      <Explore />
      <Satisfied />
      <Reserve />

      {/* <Howitworks /> 
      <BusinessHours /> */}
    </div>
  );
}

export default Home;
