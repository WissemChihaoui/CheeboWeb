import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link, useParams } from 'react-router-dom';

const ForgotPassword = () => {
    const { mail } = useParams()
    const [data, setData] = useState({
        mail: mail,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
  return (
    <Card color="transparent" shadow={false}>
         <Typography variant="h4"  className='text-white'>
           Sign In
         </Typography>
         <Typography  className="mt-1 font-normal text-gray-500">
           Welcome Back! Enter Your Details To Sign In.
         </Typography>
         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
           <div className="mb-1 flex flex-col gap-6">
             
             <Typography variant="h6"  className="-mb-3 text-gray-300">
               Your Email
             </Typography>
             <Input
                name="mail"
                value={data.mail}
                onChange={handleChange}
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             
           </div>
           
           <Button className="mt-6" fullWidth>
             Reset Password
           </Button>
           <Typography color="gray" className="mt-4 text-center font-normal text-gray-400">
             You have an access ?{" "}
             <Link to={"/auth"} className="font-medium text-white">
               Sign In
             </Link>
           </Typography>
         </form>
       </Card>
  )
}

export default ForgotPassword