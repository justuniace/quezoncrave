import Hero from "./section/hero/hero";
<<<<<<< HEAD
 import Category from "./section/category/category";
 import Explore from "./section/Explore/explore";
 import Howitworks from "./section/Howitwork/how-it-works";
import BusinessHours from "./section/Hours/BusinessHours";
=======
import Category from "./section/category/category";
import Explore from "./section/Explore/explore";
import Howitworks from "./section/HowtoOrder/how-it-works";
//import BusinessHours from "./section/Hours/BusinessHours";
>>>>>>> adcaec058ed00644ad1d4546483d34a21d6bc568
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
<<<<<<< HEAD
      <Reserve /> 

      <Howitworks /> 
      <BusinessHours />
=======
      <Reserve />
      {/* <BusinessHours /> */}
>>>>>>> adcaec058ed00644ad1d4546483d34a21d6bc568
    </div>
  );
}

export default Home;
