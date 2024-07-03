import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";


const ViewDetails = () => {

    const crafts = useLoaderData();
    console.log(crafts)
    const { _id } = useParams();
    // const idInt = parseInt(_id);
    const craft = crafts.find(craft => craft._id === _id);
    console.log(craft,_id);
    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-14 mt-10">
                <div>
                    <img src={craft.imageUrl} className="rounded-xl w-[700px] h-[400px]" />
                </div>
                <div>
                    <h2 className="card-title text-center font-bold text-2xl mb-2 ">{craft.itemName}</h2>
                    <p className="mb-2 text-xl"><span className="font-bold">Subcategory Name: </span> {craft.subcategoryName}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Description: </span>{craft.description}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">User Email: </span> {craft.userEmail}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">User Name: </span> {craft.userName}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">price: </span> {craft.price}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Rating: </span> {craft.rating}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Customization: </span> {craft.customization}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Stock Status: </span> {craft.stockStatus}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Processing Time: </span>{craft.processingTime}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;
