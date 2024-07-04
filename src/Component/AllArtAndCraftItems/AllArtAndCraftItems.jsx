import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";


const AllArtAndCraftItems = () => {
    const loadedArtAndCraftItems = useLoaderData();
    return (
        <div className="mt-14">
            <h2 className="text-4xl text-blue-600 text-center font-bold mb-10">All art and Craft Items</h2>
            <div className="overflow-x-auto border border-2 rounded-xl">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-xl">Id</th>
                            <th className="text-xl">Email</th>
                            <th className="text-xl">User Name</th>
                            <th className="text-xl">Item Name</th>
                            <th className="text-xl">Subcategory Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedArtAndCraftItems.map(artAndCraftItem => <tr key={artAndCraftItem._id}>
                                <th className="text-xl">{artAndCraftItem._id}</th>
                                <td className="text-xl">{artAndCraftItem.email}</td>
                                <td className="text-xl">{artAndCraftItem.userName}</td>
                                <td className="text-xl">{artAndCraftItem.itemName}</td>
                                <td className="text-xl">{artAndCraftItem.subcategoryName}</td>
                                <td className="text-xl">
                                    <Link to={`/craft/${artAndCraftItem._id}`}>
                                        <button className="btn btn-primary">View Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className="mt-14">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;