import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";

const Singlenews = ({ news }) => {
    const {_id, title, rating, total_view, author, thumbnail_url, image_url, details } = news;
    return (
        <div className="px-2 md:px-0">
            <div className="flex justify-between rounded-t-md p-4 bg-gray-200 items-center">
                <div className="flex gap-2">
                    <img className="w-12 rounded-full" src={author.img}
                        alt="" />
                    <div>
                        <p>{author.name}</p>
                        <p className="text-sm font-light">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex text-2xl gap-2">
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <div className="p-4 rounded-b-md border border-t-0 space-y-4">
                <h2 className="text-3xl">{title}</h2>
                <img src={image_url} alt="" />
                {
                    details.length>200?<>
                    <p>{details.slice(0,200)}</p>
                    <Link to={`/details/${_id}`} className=" text-orange-400" href="">Read more..</Link></>
                    :<p>{details}</p>
                }
                
                <div className="flex justify-between border-t pt-4">
                    <div className="flex items-center gap-3">
                        <div className="flex text-2xl text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        {rating.number}
                    </div>

                    <div className="flex items-center gap-2">
                        <IoMdEye />
                        {total_view}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Singlenews;