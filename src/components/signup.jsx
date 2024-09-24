import { useEffect, useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addAsync } from "./singnupSlice";
import { fetchAsynk } from "./loginSlice";

export function Signup() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const check = useSelector(state => state.login.login);
    useEffect(() => {
        dispatch(fetchAsynk())
    })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const userValid = check.find(user => user.email === formData.email);

        if (!userValid) {
            dispatch(addAsync(formData))
            alert("Account created");
        } else {
            alert("Account not created ")
        }

    }

    return (<>
        <div className="md:mt-20 mt-24 flex md:flex-row flex-col items-center justify-center ">

            <div >
                <img src="https://previews.123rf.com/images/bswei/bswei1507/bswei150700072/42540210-shopping-cart-and-smart-phone-with-colorful-app-icons-touchscreen-isolated-on-white-on-line-shopping.jpg" className="md:h-[700px] h-[200px] w-[650px]" alt="" />
            </div>

            <div>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Create an  account
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details below
                    </Typography>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                type="text"
                                placeholder="name@mail.com"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email or phone number
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleInputChange}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        <div className="mt-6 flex ">
                            <Button type="submit" className="m-auto  rounded-none" fullWidth >
                                create an account
                            </Button>
                        </div>

                        <div className="mt-5">
                            <Button
                                fullWidth
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center justify-center gap-3 h-10 m-auto rounded-none "
                            >
                                <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-14" />
                                Continue with Google
                            </Button>
                        </div>

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <NavLink to={'login'}>
                                <a href="#" className="font-medium text-gray-900">
                                    Sign In
                                </a>
                            </NavLink>
                        </Typography>
                    </form>
                </Card>
            </div>


        </div>
    </>)
}
