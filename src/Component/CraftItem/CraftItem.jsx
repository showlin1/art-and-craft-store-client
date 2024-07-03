import { Link } from "react-router-dom";


const CraftItem = ({ artAndCraft }) => {

    const { _id, imageUrl, itemName, subcategoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName } = artAndCraft;

    return (
        <div>
            <div className="p-6  border-2 h-[1000px] card bg-base-100 w-96 shadow-xl">
                <figure className="  rounded-xl">
                    <img
                        src={imageUrl}
                        className="rounded-xl w-[350px] h-[300px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl mb-2 ">{itemName}</h2>
                    <p className="mb-2 text-xl"><span className="font-bold">Subcategory Name: </span> {subcategoryName}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Description: </span>{description}</p>
                    <div className="flex justify-end">
                        <p className="mb-2 text-xl"><span className="font-bold">price: </span> {price}</p>
                        <p className="mb-2 text-xl"><span className="font-bold">Rating: </span> {rating}</p>
                    </div>
                    <p className="mb-2 text-xl"><span className="font-bold">Customization: </span> {customization}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Stock Status: </span> {stockStatus}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Processing Time: </span>{processingTime}</p>

                    <div>
                        <Link to={`/craft/${_id}`}>
                            <button className="btn btn-primary w-full">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CraftItem;