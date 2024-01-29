import Bakery from "../HomeContent/Bakery/Bakery";
import Beauty from "../HomeContent/Beauty/Beauty";
import ColdDrinks from "../HomeContent/ColdDrinks/ColdDrinks";
import HotDogs from "../HomeContent/HotDogs/HotDogs";




const MainHome = () => {
   

    return (
        <>
          <ColdDrinks></ColdDrinks>
          <Bakery></Bakery>
          <HotDogs></HotDogs>
          <Beauty></Beauty>
        </>
    );
};

export default MainHome;