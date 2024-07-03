import Swal from "sweetalert2";
import Footer from "../Footer/Footer";


const AddCraftItem = () => {
    const handleAddArtAndCraft = e =>{
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
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const newArtAndCraft = {imageUrl,itemName,subcategoryName,description,price,rating,customization,processingTime,stockStatus,userEmail,userName};
        console.log(newArtAndCraft);

        // send data to the server
        fetch('http://localhost:5000/artAndCraft',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newArtAndCraft)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Art And Craft added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div>
            <div className="bg-[#ecc3cb] mt-10 p-24">
                <h2 className="text-3xl text-center font-extrabold mb-4">Add a Art & Craft Item</h2>
                <form onSubmit={handleAddArtAndCraft}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="imageUrl" className="input input-bordered w-full"
                                    placeholder="Image url" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Item name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="itemName" className="input input-bordered w-full"
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
                                <input type="text" name="subcategoryName" className="input input-bordered w-full"
                                    placeholder="Subcategory Name" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" className="input input-bordered w-full"
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
                                <input type="text" name="price" className="input input-bordered w-full"
                                    placeholder="Price" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" className="input input-bordered w-full"
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
                                <input type="text" name="customization" className="input input-bordered w-full"
                                    placeholder="Customization" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="processingTime" className="input input-bordered w-full"
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
                                <input type="text" name="stockStatus" className="input input-bordered w-full"
                                    placeholder="Stock Status" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userEmail" className="input input-bordered w-full"
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
                                <input type="text" name="userName" className="input input-bordered w-full"
                                    placeholder="User Name" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="ADD ART & CRAFT" className="btn btn-block bg-black text-white" />
                </form>
            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AddCraftItem;