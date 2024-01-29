import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const ColdDrinks = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        fetch('coldDrinks.json')
            .then(res => res.json())
            .then(data => {
                setDrinks(data);
                console.log(data);
            })
    }, [])

    return (

        <div >
            <div className='flex gap-2 items-center p-2 mb-8'>
                <img className='h-10 w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfa0PLxQVz9e7_Xxi8R3QApNAkbZKeOgu-aw&usqp=CAU" alt="" />
                <h1 className='font-bold text-2xl' >Cold drinks</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-2">

                {
                    drinks.map(drink => <div key={drink._id}
                    >
                        <div className="card w-56 h-80 bg-base-100 shadow-xl">
                            <figure><img src={drink.productImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {drink.productName}
                                </h2>
                                <p className="font-bold">{drink.productPrice} ₸</p>
                            </div>
                            <button className="btn btn-ghost bg-slate-200" onClick={() => document.getElementById(drink.id).showModal()}><FaPlus></FaPlus>
                            </button>
                        </div>
                        <dialog id={drink.id} className="modal">
                            <div className="modal-box">
                                <img src={drink.productImage} alt="" />
                                <h3 className="font-bold text-lg">  {drink.productName}</h3>
                                <p className="py-4">{drink.productPrice}</p>
                                <div className="modal-action">
                                    <button className="btn btn-ghost bg-slate-200">Add To Cart</button>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>)
                }

            </div>



        </div>
    );
};

export default ColdDrinks;