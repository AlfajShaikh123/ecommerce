import { Button, Carousel } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import CountdownTimer from "./counterTimer";
import { useDispatch } from "react-redux";
import { addFevAsync } from "./homeSlice";
import { useNavigate } from "react-router-dom";
export function Home() {

    const [isToggled, setIsToggled] = useState(false);
    const navigate = useNavigate()
    const targetDate = new Date('2024-12-31T00:00:00');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [id, myId] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'));
        if (data) {
            myId(data.id)
        }
    }, [])

    const hadleAddFev = (itemID) => {
        if (id) {
            const data = { [itemID]: { /* Include relevant item data here */ } };
            dispatch(addFevAsync({ id, item: data }));
        }

    }

    const handleClick = (index) => {
        setSelectedIndex(index);
        navigate('/fev')
        hadleAddFev(index)

    };
    const handleToggle = () => {
        setIsToggled((prev) => !prev);
    };




    const saleData = [
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
    ]

    const ourProductData = [
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },

        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/5930/5930147.png",
            discount: -40,
            title: "HAVIT HV GamePad",
            price: 500,
            start: 4
        },
    ]
    return (<>

        <div>
            {/* Banner  */}
            <div className="md:mt-20 mt-28 flex md:flex-row flex-col gap-10">

                <div className="w-full p-2 flex items-center gap-2 font-bold md:hidden">
                    <img src="https://cdn-icons-png.flaticon.com/512/10024/10024426.png" alt="" className="h-7  " onClick={handleToggle} />

                    <p className="text-sm">Open</p>
                </div>
                <div className={`space-y-10 ps-5 text-sm font-bold mt-2 md:w-[50%]  md:block ${isToggled ? 'hidden' : 'block'} md:flex md:flex-col  `}>
                    <div className="flex items-center gap-5 ">
                        <p>Womens Fashions </p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>
                    <div className="flex items-center gap-11 ">
                        <p>Mens Fashions</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>

                    <div className="flex items-center gap-[75px] ">
                        <p>Electronics</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>
                    <div className="flex items-center gap-11 ">
                        <p>Home LifeStyle</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>

                    <div className="flex items-center gap-[87px] ">
                        <p>Medicine</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>

                    <div className="flex items-center gap-7 ">
                        <p>Sports & Outdoor</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>
                    <div className="flex items-center gap-14 ">
                        <p>Babys & Toys</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>
                    <div className="flex items-center gap-8 ">
                        <p>Gloceries & Pets</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>

                    <div className="flex items-center gap-9 ">
                        <p>Health & Beauty</p>
                        <img src="https://i.pinimg.com/474x/bf/e6/26/bfe626d92c27c4968becdc57bbf406b9.jpg" alt="" className="h-5" />
                    </div>

                </div>

                <div className="md:block hidden">
                    <div class="w-1 h-full bg-gray-300"></div>
                </div>

                <div className="p-2">
                    <Carousel className="rounded-xl">
                        <img
                            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/10/iPhone-Website-Ad-Banner-Design-1180x664.jpg"
                            alt="image 1"
                            className=" w-full h-[90%] object-cover"
                        />
                        <img
                            src="https://img.lovepik.com/bg/20240119/Stunning-Display-Four-iPhone-12-Pro-Models-on-Sleek-Black_2781037_wh860.jpg!/fw/860"
                            alt="image 2"
                            className="w-full h-[90%] object-cover"
                        />
                        <img
                            src="https://luxurylaunches.com/wp-content/uploads/2023/09/caviar-worlds-most-expensive-iphone-15-pro.jpg"
                            alt="image 3"
                            className="w-full h-[90%] object-cover"
                        />
                    </Carousel>
                </div>
            </div>

            {/* Todays Flash Sale */}

            <div className="md:ps-10 space-y-4 p-2">
                <div className="flex md:mt-20  gap-2">
                    <div className="">
                        <div class="w-2 h-full bg-red-700"></div>
                    </div>
                    <p className="font-bold text-2xl">Today's</p>
                </div>

                <div className="flex md:flex-row flex-col md:items-center md:gap-20 gap-5 bg-blue-gray-50 p-5">
                    <p className="font-bold text-3xl">Flash Sales</p>
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </div>

            {/* sales Card */}

            <div className="flex md:flex-row flex-col p-4 gap-5 mt-5 justify-around ">
                {
                    saleData.map((item, index) => (
                        <div className=" p-5 bg-gray-100  space-y-3 shadow-xl md:w-[50%] group">
                            <div className=" text-white text-sm  rounded-xl text-center p-1 font-bold flex justify-between  ">
                                <p className="cursor-pointer" onClick={() => handleClick(index)}>
                                    <img

                                        src={selectedIndex === index
                                            ? "https://cdn-icons-png.flaticon.com/512/1216/1216686.png"
                                            : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"}
                                        className="h-7"
                                        alt="Toggle Icon"
                                    />
                                </p>

                            </div>

                            <div className="flex justify-center">
                                <img src={item.image} className="h-40" alt="" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">{item.title}</p>
                                <p className="text-red-600">Rs {item.price}</p>

                            </div>
                            <div className="bg-black text-white text-sm p-2 rounded-xl text-center hidden transform transition-all group-hover:block duration-300">
                                Add card
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="flex justify-center">
                <div className="bg-black text-white text-center text-sm p-2 md:w-[20%] rounded-xl">
                    View Product
                </div>
            </div>


            {/* Categories */}

            <div className="md:ps-10 space-y-4 p-2 md:mt-7 mt-20">
                <div className="flex md:mt-20  gap-2">
                    <div className="">
                        <div class="w-2 h-full bg-red-700"></div>
                    </div>
                    <p className="font-bold text-2xl">Categories</p>
                </div>

                <div>
                    <p className="font-bold text-3xl">Browse by category</p>

                    <div className="md:flex grid grid-flow-row grid-cols-2 gap-5 justify-around mt-7">
                        <div className="space-y-2 flex flex-col justify-center border-2 p-7">
                            <img src="https://cdn-icons-png.flaticon.com/512/0/191.png" alt="" className="h-16" />
                            <p className="font-bold text-sm text-center">Phones</p>
                        </div>
                        <div className="space-y-2 flex flex-col justify-center border-2 p-7" >
                            <img src="https://cdn-icons-png.flaticon.com/512/494/494083.png" alt="" className="h-16" />
                            <p className="font-bold text-sm text-center">Computer</p>
                        </div>
                        <div className="space-y-2 flex flex-col justify-center border-2 p-7" >
                            <img src="https://cdn-icons-png.flaticon.com/512/2386/2386101.png" alt="" className="h-16" />
                            <p className="font-bold text-sm text-center">Smart Watch</p>
                        </div>
                        <div className="flex flex-col justify-center border-2 p-7 space-y-3">

                            <img src="https://cdn-icons-png.flaticon.com/512/5219/5219441.png" alt="" className="h-16" />
                            <p className="font-bold text-sm text-center">HeadPhone</p>
                        </div>
                        <div className="flex flex-col justify-center border-2 p-7 space-y-3">

                            <img src="https://cdn-icons-png.flaticon.com/512/7708/7708371.png" alt="" className="h-16" />
                            <p className="font-bold text-sm text-center">Gaming</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* This month */}
            <div>
                <div className="md:ps-10 space-y-4 p-2">
                    <div className="flex md:mt-20  gap-2">
                        <div className="">
                            <div class="w-2 h-full bg-red-700"></div>
                        </div>
                        <p className="font-bold text-2xl">This month</p>
                    </div>

                    <div className="flex md:flex-row flex-col md:items-center gap-20 justify-between pe-5">
                        <p className="font-bold text-3xl">Best Selling Products</p>
                        <div className="flex justify-center">
                            <div className="bg-red-800 text-center font-bold p-2  rounded-xl text-sm">
                                View Product
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex md:flex-row flex-col p-4 gap-5 mt-5 justify-around ">
                    {
                        saleData.map((item) => (
                            <div className=" p-5 bg-gray-100  space-y-3 shadow-xl md:w-[50%] group">

                                <div className="flex justify-center">
                                    <img src={item.image} className="h-40" alt="" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{item.title}</p>
                                    <p className="text-red-600">Rs {item.price}</p>

                                </div>
                                <div className="bg-black text-white text-sm p-2 rounded-xl text-center hidden transform transition-all group-hover:block duration-300">
                                    Add card
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

            {/* Music expriance */}

            <div className="mt-2 p-5 ">
                <img src="src\assets\explore.JPG" alt="" className="h-96 m-auto" />
            </div>


            {/* Our Product */}

            <div>
                <div className="md:ps-10 space-y-4 p-2">
                    <div className="flex md:mt-20  gap-2">
                        <div className="">
                            <div class="w-2 h-full bg-red-700"></div>
                        </div>
                        <p className="font-bold text-2xl">Our Product</p>
                    </div>

                    <div className="flex md:flex-row flex-col md:items-center gap-20 justify-between pe-5">
                        <p className="font-bold text-3xl">Explore Our product</p>


                    </div>
                </div>
                <div className=" grid grid-rows-1 md:grid-cols-4 grid-cols-2 p-4 gap-5 mt-5   ">
                    {
                        ourProductData.map((item) => (
                            <div className=" p-5 bg-gray-100  space-y-3 shadow-xl  group">

                                <div className="flex justify-center">
                                    <img src={item.image} className="h-40" alt="" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{item.title}</p>
                                    <p className="text-red-600">Rs {item.price}</p>

                                </div>
                                <div className="bg-black text-white text-sm p-2 rounded-xl text-center hidden transform transition-all group-hover:block duration-300">
                                    Add card
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <div className="bg-red-800 text-center font-bold p-2  rounded-xl text-sm">
                        View Product
                    </div>
                </div>
            </div>

            {/* New Arrived */}

            <div>
                <div className="md:ps-10 space-y-4 p-2">
                    <div className="flex md:mt-20  gap-2">
                        <div className="">
                            <div class="w-2 h-full bg-red-700"></div>
                        </div>
                        <p className="font-bold text-2xl">Features</p>
                    </div>

                    <div className="flex md:flex-row flex-col md:items-center gap-20 justify-between pe-5">
                        <p className="font-bold text-3xl">New Arrival</p>


                    </div>
                </div>

                <div className="mt-2">
                    <img src="src\assets\newArrival.JPG" alt="" className="m-auto h-[500px] p-2" />
                </div>
            </div>

            {/* Services Card */}
            <div className="flex md:flex-row flex-col gap-5 justify-around mt-20">
                <div className="flex flex-col items-center space-y-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/82/82018.png" alt="" className="h-14" />
                    <p className="font-bold">FREE AND FAST DELIVERY</p>
                    <p className="text-sm">Free delivery for all orders over 140 RS</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/309/309159.png" alt="" className="h-14" />
                    <p className="font-bold">24/7 CUSTOMER SERVICE</p>
                    <p className="text-sm">Friendly 24/7 customer support </p>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/102/102649.png" alt="" className="h-14" />
                    <p className="font-bold">MONEY BACK GUARANTEE</p>
                    <p className="text-sm">We return money within 30 days</p>
                </div>
            </div>
        </div>


    </>)
}