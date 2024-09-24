import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    MobileNav,
    Card,
    Input, Button,
    Badge,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

export function Header() {

    const [openNav, setOpenNav] = React.useState(false);

    const [value, setVal] = useState('No user');
    const navigate=useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'));
        if (data) {
            setVal(data.name)
        }


    })

    const handleLogout = (() => {
        localStorage.removeItem('user')
        window.location.reload()
    })

    const handleLogin=(()=>{
       navigate('/signup/login')
    })



    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <NavLink to={''}>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-bold"
                >
                    <a href="#" className="flex items-center">
                        Home
                    </a>
                </Typography>
            </NavLink>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>
            <NavLink to={'signup'}>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-bold"
                >
                    <a href="#" className="flex items-center">
                        Sign Up
                    </a>
                </Typography>
            </NavLink>

            <div className="relative flex w-full gap-2 md:w-max">
                <Input
                    type="search"
                    color="black"
                    label="Type here..."
                    className="pr-24 text-black"
                    containerProps={{
                        className: "min-w-[288px]",
                    }}
                />
                <Button
                    size="sm"
                    color="black"
                    className="!absolute right-1 top-1 rounded "
                >
                    Search
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <Badge color="red" content='5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="" className="h-7" />
                </Badge>

                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" className="h-7" />

                <Menu>
                    <MenuHandler>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" alt="" className="h-7" />

                            <p className="text-sm">{value}</p>
                        </div>

                    </MenuHandler>
                    <MenuList className="ms-3 ">
                        <MenuItem onClick={handleLogin}>Login</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        <MenuItem>My profile</MenuItem>
                    </MenuList>
                </Menu>



            </div>
        </ul>
    );
    return (<>
        <div className=" max-h-[768px] fixed z-20 w-full top-0 ">
            <div className="bg-black text-white text-sm p-1 text-center">
                <p>Summer Sale For All Swim Suit And Free Express Delivery - OFF 50% <span className="font-bold">ShopNow</span></p>
            </div>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
                    >
                        Exclusive
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}

                </MobileNav>
            </Navbar>

        </div>

    </>)
}