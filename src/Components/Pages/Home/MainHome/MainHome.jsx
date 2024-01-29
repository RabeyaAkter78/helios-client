import Bakery from "../HomeContent/Bakery/Bakery";
import Beauty from "../HomeContent/Beauty/Beauty";
import ColdDrinks from "../HomeContent/ColdDrinks/ColdDrinks";
import HotDogs from "../HomeContent/HotDogs/HotDogs";




const MainHome = () => {
   

    return (
        <div className="overflow-x-hidden">
          <ColdDrinks></ColdDrinks>
          <Bakery></Bakery>
          <HotDogs></HotDogs>
          <Beauty></Beauty>
        </div>
    );
};

export default MainHome;