import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";


const Details = () => {
    const alldata = useLoaderData();
    const {id} = useParams();
    const singledata = alldata.filter(data=>data._id==id);
    const oneback = useNavigate()
    const handleback = ()=>{
        oneback(-1);
    }
    
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-12">
                <div className="col-span-3 ">
  
                   <div className="p-4 space-y-6 border rounded-md">
                   <h2 className="text-2xl font-bold">Dragon News</h2>
                   <img src={singledata[0].image_url} alt="" /> 
                   <h2 className="text-3xl font-bold">{singledata[0].title}</h2>
                   <p className="text-sm">{singledata[0].details}</p>

                   <button onClick={handleback} className="btn btn-secondary">Back to home</button>
                   </div>

                </div>
                <div className="border hidden md:block">
                   <Rightsidenav></Rightsidenav>
                </div>

            </div>
        </div>
    );
};

export default Details;