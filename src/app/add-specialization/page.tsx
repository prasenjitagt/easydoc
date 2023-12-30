
'use client'

import Link from "next/link"
import Image from "next/image"
import FormSubButton from "@/components/FormSubButton"
import axios from "axios"





const Form = () => {







    const onFormSubmit = async (formdata: FormData) => {
        try {

            const specialization = formdata.get('specialization')?.toString().toUpperCase();

            if (!specialization) {
                throw Error("Specialization is Required");

            }



            const data = [specialization];

            /***** Sending the data to server *****/

            const response = await axios.post('api/addspecialization', data);

            console.log(response.data);


        } catch (error: any) {
            console.log(error.message);

        }
    }

    return (

        <div className="w-[100vw]">

            <div className=' bg-gray-50 flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0'>

                {/* Logo */}
                <Link href={`/`} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    <Image priority height={50} width={50} className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    EasyDoc
                </Link>


                {/* For giving the shadow to the form */}
                <div className='w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  '>

                    {/* For Making distance from the shadow */}
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">


                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Add Specialization
                        </h1>

                        <form action={onFormSubmit} className=' flex flex-col justify-center '>



                            {/* Spcialization  */}
                            <section className='mb-3'>
                                <label htmlFor="specialization" className='splLable'>Specialization</label>
                                <div className='flex gap-2'>
                                    <input name='specialization'
                                        required
                                        className='splInput' type="text" placeholder='e.g. OPTHALMOLOGIST' />

                                </div>



                            </section>












                            {/* Submit Button */}
                            <FormSubButton className='btn btn-success ' type="submit">Submit</FormSubButton>

                            {/* Buttons for navigation */}
                            <div className="flex flex-col gap-2 mt-5">


                                <Link href={`/`} className="btn btn-accent">
                                    Home
                                </Link>


                                <Link href={`/check-specialization`} className="btn btn-accent">
                                    Check Specializations
                                </Link>
                            </div>



                        </form>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Form