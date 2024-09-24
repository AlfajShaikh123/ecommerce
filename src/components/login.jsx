
import { Card, Typography, Input, Button } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { json, NavLink, useNavigate } from "react-router-dom"
import { fetchAsynk } from "./loginSlice";
import { useEffect, useState } from "react";
export function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let login = false;

    const items = useSelector(state => state.login.login);



    useEffect(() => {
        dispatch(fetchAsynk())
    }, [])
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        items.map((user) => {
            if (formData.email === user.email && formData.password === user.password) {
                login = true
                alert("Login successeful");
                const data = {
                    id:user.id,
                    name: user.name,
                    email: user.email
                }
                localStorage.setItem('user', JSON.stringify(data))
               
                navigate('/')
                window.location.reload()

            }
        });

        if (!login) {
            alert("login not successfully ")
        }

    }

    return (<>
        <div className="md:mt-24 mt-24 flex md:flex-row flex-col items-center justify-center ">

            {/* <div>
                <Button onClick={() => dispatch(fetchAsynk())}>Click me</Button>
                {items.map((user) => (
                    <div>
                        <p>{user.email}</p>
                        <p>{user.name}</p>
                    </div>

                ))}
            </div> */}
            <div >
                <img src="https://static.vecteezy.com/system/resources/previews/023/220/717/non_2x/3d-cartoon-design-illustration-of-smartphone-with-shopping-cart-and-parcel-box-shopping-online-on-mobile-concept-png.png" className="md:h-[600px] h-[200px] w-[650px]" alt="" />
            </div>

            <div>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Login on to Exclusive
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details below
                    </Typography>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email or phone number
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
                                placeholder="********"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        <div className="mt-6 flex justify-between items-center ">
                            <Button className="  rounded-none" type="submit"  >
                                Login
                            </Button>
                            <p className="font-bold">Forgot Password ?</p>
                        </div>




                    </form>
                </Card>
            </div>


        </div>

    </>)
}