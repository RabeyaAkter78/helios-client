import { MdOutlineWatchLater } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const LeftSideHome = () => {

  return (
    <div className="p-5 mb-5">

      <div className="flex flex-col justify-start items-start   p-2 gap-2">
        <h3 className="text-center text-2xl font-semibold "
        >
          Доставка
        </h3>
        <div className="flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>10 – 30 min</p>
        </div>
        <div className="flex justify-start items-start  gap-2 ">
          <CiDeliveryTruck />
          <p>на первый заказ бесплатно от
            1  000 ₸</p>
        </div>
        <p className="font-semibold">Service fee
          149 ₸</p>
       <div className="flex justify-center items-center gap-1 hover:text-red-500">
       <Link to="" className="font-semibold hover:text-red-500">О доставке  </Link>
        <FaArrowAltCircleRight></FaArrowAltCircleRight>
       </div>
      </div>

      <div className="flex flex-col justify-start items-start  p-2 gap-2">
        <h3 className="text-center text-2xl font-semibold "
        >
          Catalog
        </h3>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Холодные напитки</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Выпечка</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Хот-доги</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Красота и гигиена</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Пицца</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Горячие напитки</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Бакалея</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Семечки, чипсы</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Товары для быта</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Семечки, чипсы</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Сэндвичи</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Готовая еда</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Сэндвичи</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Десерты</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>Для детей</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Жевательные резинки</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Кондитерские изделия</p>
        </button>
        <h3 className="text-center text-2xl font-semibold "
        >
          Catalog
        </h3>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Молочные продукты</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Колбасы, сыры</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Крупы, макароны</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Орехи и сухофрукты</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Для животных</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>
            Медицинские товары</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>

            Автопринадлежности</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>

            Игрушки</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>

            Зарядные устройства</p>
        </button>
        <button className="btn hover:btn-ghost flex justify-start items-start  gap-2">
          <MdOutlineWatchLater />
          <p>

            Дом, дача, отдых</p>
        </button>

      </div>
    </div>

  );
};

export default LeftSideHome;
