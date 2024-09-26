import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";


const data = [{
    name: "Gucci duffle bag",
    disscount: 35,
    image: "https://cdn-icons-png.flaticon.com/512/10359/10359241.png",
    price: 15000
},
{
    name: "RGB liquid CPU cooler",
    disscount: 15,
    image: "https://cdn-icons-png.flaticon.com/512/2729/2729104.png",
    price: 5000
},
{
    name: "gp11 Shooter USB gamepad",
    disscount: 30,
    image: "https://cdn-icons-png.flaticon.com/512/626/626540.png",
    price: 10000
},
{
    name: "RGB liquid CPU cooler",
    disscount: 10,
    image: "https://cdn-icons-png.flaticon.com/512/626/626540.png",
    price: 5000
}]


export function Fevorate() {

    const [len, setLen] = useState();
    useEffect(() => {
        setLen(data.length)
    })
    return (<>
        <div className="mt-32">
            {/* WhishList */}
            <div>
                <div className="flex items-center justify-between p-5">
                    <p className="font-bold" >Whishlist ({len})</p>
                    <Button variant="outlined">Move all to bag</Button>
                </div>
                <div className="flex md:flex-row flex-col justify-evenly gap-5 md:m-2 p-5 " >
                    {data.map((item) => (
                        <div className="bg-gray-100 p-10 space-y-2 w-full shadow-xl border-2 ">
                            <div className="flex justify-between">
                                <p>{item.disscount}%</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" className="h-4" alt="" />
                            </div>

                            <div className="flex justify-center">
                                <img src={item.image} className="h-48" alt="" />
                            </div>
                            <div className="flex justify-center mt-5">
                                <Button>Add cart</Button>
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <p>Rs {item.price}</p>
                            </div>
                        </div>


                    ))}

                </div>
            </div>

            {/* just for you */}

            <div>
                <div className="flex items-center justify-between p-5">
                    <p className="font-bold" >Just for You</p>
                    <Button variant="outlined">See All</Button>
                </div>
                <div className="flex md:flex-row flex-col justify-evenly gap-5 md:m-2 p-5 " >
                    {data.map((item) => (
                        <div className="bg-gray-100 p-10 space-y-2 w-full shadow-xl border-2 ">
                            <div className="flex justify-between">
                                <p>{item.disscount}%</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/752/752398.png" className="h-7" alt="" />
                            </div>

                            <div className="flex justify-center">
                                <img src={item.image} className="h-48" alt="" />
                            </div>
                            <div className="flex justify-center mt-5">
                                <Button>Add cart</Button>
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>


                    ))}

                </div>
            </div>

        </div>
    </>)
}