import { useEffect, useState } from "react";
import UseAuth from "../UseAuth/UseAuth";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";



const MyArtAndCraftList = () => {
    const { user } = UseAuth() || {};
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })
    }, [user])

    

    return (
        <div className="mt-14">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-14 mt-10">
                {
                    item?.map(p => (

                        <div className="card card-side bg-[#d9c3ce]  shadow-xl" key={p._id}>
                            <figure><img src={p.imageUrl} className="rounded-xl w-[700px] h-[400px]" /></figure>
                            <div className=" w-full p-16 ">
                                <h2 className="card-title font-bold mb-2">{p.itemName}</h2>
                                <p className="text-xl mb-2"><span className=" font-bold">Price: </span>{p.price}</p>
                                <p className="text-xl mb-2"><span className="font-bold">Rating: </span>{p.rating}</p>
                                <p className="text-xl mb-2"><span className="font-bold">Customization: </span>{p.customization}</p>
                                <p className="text-xl mb-2"><span className="font-bold">Stock Status: </span>{p.stockStatus}</p>
                                <div className="flex mt-8 gap-14">
                                    <Link to={`/updateArtAndCraft/${p._id}`}><button className="btn btn-primary">Update</button></Link>
                                    <Link >
                                        <button className="btn btn-primary">Delete</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-14">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyArtAndCraftList;