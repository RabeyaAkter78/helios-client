import  { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const HotDogs = () => {
    const [hotDogs, setHotDogs] = useState([])

    useEffect(() => {
        fetch('hotdogs.json')
            .then(res => res.json())
            .then(data => {
                setHotDogs(data);
                console.log(data);
            })
    }, [])

    return (
        <div >
            <div className='flex gap-2 items-center p-4 mb-8'>
                <img className='h-10 w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzB8yoSZJuyIhEqEAw6ENOUEeVsuN0T0XDQ&usqp=CAU" alt="" />
                <h1 className='font-bold text-2xl' >HotDogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-12">

                {
                    hotDogs.map(hotDog => <div key={hotDog._id}
                    >
                        <div className="card w-60 h-80 bg-base-100 shadow-xl">
                            <figure><img src={hotDog.productImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {hotDog.productName}
                                </h2>
                                <p className="font-bold">{hotDog.productPrice} ₸</p>
                            </div>
                            <button className="btn btn-ghost bg-slate-200" onClick={() => document.getElementById("modal_1").showModal()}><FaPlus></FaPlus>
                            </button>
                        </div>
                        <dialog id="modal_1" className="modal">
                            <div className="modal-box">
                                <img src={hotDog.productImage} alt="" />
                                <h3 className="font-bold text-lg">  {hotDog.productName}</h3>
                                <p className="py-4">{hotDog.productPrice}</p>
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

export default HotDogs;