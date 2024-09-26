
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
} from "@material-tailwind/react";
export function Footer() {
    return (<>

        <div className="mt-10 bg-black">
            <div className="md:flex md:justify-around justify-between grid grid-flow-row grid-cols-2  text-justify gap-14  text-white p-5">

                <div className="space-y-3 text-sm">
                    <p className="font-bold text-xl">Exclusive</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your frist order</p>
                    <div className="relative flex w-full gap-2 md:w-max">
                        <Input
                            type="search"
                            color="black"
                            label="Enter Your Email"
                            className="pr-20"
                            containerProps={{
                                className: "md:min-w-[100px] min-w-[150px] min-h-[5px]",
                            }}
                        />
                        {/* className="!absolute right-1 top-1 rounded" */}
                        <img src="https://cdn-icons-png.flaticon.com/512/5358/5358492.png" alt="" className="!absolute right-1 top-[-8px] rounded h-14" />
                    </div>
                </div>

                <div className="space-y-3 text-sm">
                    <p  className="font-bold text-xl">Support</p>
                    <p>111 Bijoy Sarani Dhaka DH 1515 Bangladhesh</p>
                    <p>Exclusive@gmail.com</p>
                    <p>65884878554</p>
                </div>
                <div className="space-y-3 text-sm">
                    <p  className="font-bold text-xl">Account</p>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="space-y-3 text-sm">
                    <p  className="font-bold text-xl">Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="space-y-3 text-sm">

                    <p  className="font-bold text-xl">Download App</p>
                </div>
            </div>
            <hr className="h-2" />
            <div className="text-white text-center text-sm">
                <p className="p-2 ">@ Copyright Rimel 2022 All right reserved</p>
            </div>
        </div>
    </>)
}