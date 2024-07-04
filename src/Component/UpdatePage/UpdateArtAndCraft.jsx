import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const UpdateArtAndCraft = () => {

    const { _id } = useParams();
    console.log(_id);
    const [artAndCraft, setArtAndCraft] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleArtAndCraft/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArtAndCraft(data)
            })
    }, [_id])

    const handleUpdateArtAndCraft = (e) => {
        e.preventDefault();

        const form = e.target;
        const imageUrl = form.imageUrl.value;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const email = form.email.value;
        const userName = form.userName.value;
        const updatedArtAndCraft = { imageUrl, itemName, subcategoryName, description, price, rating, customization, processingTime, stockStatus, email, userName };
        console.log(updatedArtAndCraft);

        // send data to the server
        fetch(`http://localhost:5000/updateArtAndCraft/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedArtAndCraft)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Art And Craft Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    return (
        <div>
            <div className="bg-[#ecc3cb] mt-10 p-24">
                <h2 className="text-3xl text-center font-extrabold mb-4">Update a Art & Craft Item</h2>
                <form onSubmit={handleUpdateArtAndCraft}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="imageUrl" defaultValue={artAndCraft.imageUrl} className="input input-bordered w-full"
                                    placeholder="Image url" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Item name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="itemName" defaultValue={artAndCraft.itemName} className="input input-bordered w-full"
                                    placeholder="Item name" />
                            </label>

                        </div>
                    </div>
                    {/* form subcategory_Name  and short description  row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="subcategoryName" defaultValue={artAndCraft.subcategoryName} className="input input-bordered w-full"
                                    placeholder="Subcategory Name" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={artAndCraft.description} className="input input-bordered w-full"
                                    placeholder="Short description" />
                            </label>

                        </div>
                    </div>
                    {/* form price & rating row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={artAndCraft.price} className="input input-bordered w-full"
                                    placeholder="Price" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={artAndCraft.rating} className="input input-bordered w-full"
                                    placeholder="Rating" />
                            </label>

                        </div>
                    </div>
                    {/* form customization & Processing_time row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" defaultValue={artAndCraft.customization} className="input input-bordered w-full"
                                    placeholder="Customization" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="processingTime" defaultValue={artAndCraft.processingTime} className="input input-bordered w-full"
                                    placeholder="Processing Time" />
                            </label>
                        </div>
                    </div>
                    {/* form stockStatus & User Email row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="stockStatus" defaultValue={artAndCraft.stockStatus} className="input input-bordered w-full"
                                    placeholder="Stock Status" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" defaultValue={artAndCraft.email} className="input input-bordered w-full"
                                    placeholder="User Email" />
                            </label>
                        </div>
                    </div>
                    {/* form User Name row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" defaultValue={artAndCraft.userName} className="input input-bordered w-full"
                                    placeholder="User Name" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="UPDATE ART & CRAFT" className="btn btn-block bg-black text-white" />
                </form>
            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UpdateArtAndCraft;