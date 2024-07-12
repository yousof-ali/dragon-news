import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import photo1 from "../../../assets/1.png"
import photo2 from "../../../assets/2.png"
import photo3 from "../../../assets/3.png"
import { SlCalender } from "react-icons/sl";


const Leftsidenav = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("/public/categories.json")
            .then((res) => res.json())
            .then((result) => {
                setCategory(result);
            })
    }, [])
        ;
    return (
        <div className="p-4 space-y-8">
            <h2 className="font-semibold">All Category</h2>
            <div className="space-y-4 ml-4">
                {
                    category.map(single => <NavLink className="block" to={"#"} key={single.id}>{single.name}</NavLink>)
                }
            </div>
            <div className="space-y-2">
                <Link>
                    <img className="mb-2" src={photo1} alt="" />
                    <h2 className="font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </Link>
                <div className="text-sm flex gap-6">
                    <span className="font-bold ">Sports</span>
                    <div className="flex items-center gap-2 font-light">
                        <SlCalender />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <Link>
                    <img className="mb-2" src={photo2} alt="" />
                    <h2 className="font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </Link>
                <div className="text-sm flex gap-6">
                    <span className="font-bold ">Sports</span>
                    <div className="flex items-center gap-2 font-light">
                        <SlCalender />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <Link>
                    <img className="mb-2" src={photo3} alt="" />
                    <h2 className="font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </Link>
                <div className="text-sm flex gap-6">
                    <span className="font-bold ">Sports</span>
                    <div className="flex items-center gap-2 font-light">
                        <SlCalender />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Leftsidenav;