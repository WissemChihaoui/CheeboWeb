import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const Login = () => {
    const [data, setData] = useState({
        mail:'',
        password:''
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
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <div className="w-full flex justify-between items-center">
             <Typography variant="h6"  className="-mb-3 text-gray-300">
               Password
             </Typography>
             <Link className='text-gray-300 text-sm' to={`./forgot-password/${data.mail}`}>
               Forgot Password ?
             </Link>
             </div>
             <Input
               type="password"
               size="lg"
               placeholder="********"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
               name="password"
            value={data.password}
            onChange={handleChange}
             />
           </div>
           <Checkbox
             label={
               <Typography
                 variant="small"
                 color="gray"
                 className="flex items-center font-normal text-gray-300"
               >
                 Remember Me
               </Typography>
             }
             containerProps={{ className: "-ml-2.5" }}
           />
           <Button className="mt-6" fullWidth>
             sign up
           </Button>
           <Typography color="gray" className="mt-4 text-center font-normal text-gray-400">
             Already have an account?{" "}
             <a href="#" className="font-medium text-white">
               Sign In
             </a>
           </Typography>
         </form>
       </Card>
     );
}

export default Login