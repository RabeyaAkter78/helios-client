import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Bakery = () => {
    const [bakeries, setBakeries] = useState([])

    useEffect(() => {
        fetch('bakery.json')
            .then(res => res.json())
            .then(data => {
                setBakeries(data);
                console.log(data);
            })
    }, [])

    return (

        <div >
            <div className='flex gap-2 items-center p-4 mb-8'>
                <img className='h-10 w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TLR6CQYPanLScgMqsGsrx1ohR2-fRQbcEA&usqp=CAU" alt="" />
                <h1 className='font-bold text-2xl' >Bakery</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-12">

                {
                    bakeries.map(bakery => <div key={bakery._id}
                    >
                        <div className="card w-60 h-80 bg-base-100 shadow-xl">
                            <figure><img src={bakery.productImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {bakery.productName}
                                </h2>
                                <p className="font-bold">{bakery.productPrice} ₸</p>
                            </div>
                            <button className="btn btn-ghost bg-slate-200"><FaPlus></FaPlus></button>
                        </div>

                    </div>)
                }

            </div>



        </div>
    );
};

export default Bakery;