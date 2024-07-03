import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";


const Home = () => {
    const artAndCrafts = useLoaderData();
    return (
        <div className="mt-8">
            <Banner></Banner>
            <div className="mt-14 mb-6">
                <h1 className="text-6xl text-center font-bold text-purple-600">Painting and Drawing:{artAndCrafts.length} </h1>
            </div>
            <div className="mt-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;