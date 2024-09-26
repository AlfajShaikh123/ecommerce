import { Select, Option, Typography, Button, Input } from "@material-tailwind/react";


export function Cart() {
    return (<>
        <div className="mt-36 p-5">
            <div className="flex justify-around md:gap-10 gap-20 item-center overflow-auto">
                <div className="space-y-3  ">
                    <p>Product</p>
                    <div className="flex items-center gap-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZPY9WuwkDjl4dpt8lfXRu6dqb3vE5QEJOQ&s" className="h-10" alt="" />
                        <p className="font-bold">LCD Moniter</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZPY9WuwkDjl4dpt8lfXRu6dqb3vE5QEJOQ&s" className="h-10" alt="" />
                        <p className="font-bold">LCD Moniter</p>
                    </div>

                    <div className="flex items-center gap-3  ">
                        <Button variant="outlined" className="mt-3">Return to shop</Button>
                    </div>


                </div>


                <div className="space-y-5">
                    <p>Price</p>
                    <div className="flex items-center gap-3">
                        <p>Rs 650</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p>Rs 1000</p>
                    </div>


                </div>

                <div className="space-y-2">
                    <p>Price</p>
                    <div className="flex items-center gap-3">
                        <div className="w-72">
                            <Select label="Number Input" defaultValue="1">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="3">4</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-72">
                            <Select label="Number Input" defaultValue="1">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="3">4</Option>
                            </Select>
                        </div>
                    </div>


                </div>

                <div className="space-y-5">
                    <p>Subtotal</p>
                    <div className="flex items-center gap-3  ">
                        <p>Rs 650</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p>Rs 1000</p>
                    </div>
                    <div className=" gap-3  ">
                        <Button variant="outlined" className="mt-3 ">Update cart</Button>
                    </div>
                </div>


            </div>

            <div className="mt-10 flex md:flex-row flex-col justify-evenly ">
                <div className="flex md:flex-row flex-col items-center
                 gap-2">
                    <div className=" md:w-72">
                        <Input label="Enter coupon" className="rounded-none" />

                    </div>
                    <div className="">
                        <Button color="red" className="rounded-none" >Apply Coupon</Button>
                    </div>

                </div>

                <div className="md:w-[50%]">
                    <p className="text-center">Cart Total</p>
                    <div className="border-2 ">

                        <div className="flex  justify-evenly p-5">
                            <p>Subtotal</p>
                            <p>1750</p>
                        </div>

                        <hr />
                        <div className="flex justify-evenly p-5">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-evenly p-5">
                            <p>Total</p>
                            <p>1750</p>
                        </div>
                        <hr />
                        <div className="flex justify-center mt-5 mb-5">
                            <Button color="red">Procces to checkout</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}