'use client'

import { useForm, useFieldArray } from 'react-hook-form';
import Link from "next/link"
import Image from "next/image"
import axios from "axios"



export type FormValues = {
  name: string;
  pic: File[];
  qualification: string;
  specialization: string;
  fee: number;
  experience: number;
  about: string;
  clinic: {
    locatin: string;
    weekday: string;
    fromTime: string;
    toTime: string;
  }[];
}



const Form = () => {

  const form = useForm<FormValues>({
    defaultValues: {
      name: 'Prasenjit',
      qualification: 'mbbs',
      specialization: 'optha',
      fee: 400,
      experience: 48,
      about: 'I am cool',
      clinic: [{
        locatin: 'agt',
        weekday: 'sun',
        fromTime: '18:30',
        toTime: '20:40'
      }]
    }
  });


  const { register, handleSubmit, formState, control, getValues, reset } = form;

  const { errors, isSubmitting } = formState;



  const { fields, append, remove } = useFieldArray({
    name: 'clinic',
    control
  })




  const OnFormSubmit = async (formdata: FormValues) => {


    try {


      /***** Getting the Profile Image from the Form Data *****/

      const profileImage = formdata.pic[0];

      /***** Converting image  *****/
      const imgByteData = await profileImage.arrayBuffer();
      const imgBuffer = Buffer.from(imgByteData);

      /***** Getting image extension e.g. ".png"  *****/
      const imgExtension = profileImage.type.replaceAll("image/", ".");


      /***** Setting unique image Name(id for image)  *****/
      const imgName = `${formdata.name.replaceAll(" ", "")}${crypto.randomUUID()}${imgExtension}`;


      /***** Path for the image *****/
      const path = `./public/doc-images/${imgName}`;


      /***** Url for Uploading into mongodb *****/
      const localDocImageUrl = path.replaceAll("./public", "");


      /***** image path , image buffer, form Data and local doctor image url to be saved in db in an array to send  *****/

      const dataWithImg = [imgName, imgBuffer, formdata, localDocImageUrl];

      /***** Sending the data to server *****/

      const response = await axios.post('api/adddoc', dataWithImg);

      /***** Path for the image *****/

      console.log(response.data);










      // reset();
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
              Add Doctor ID
            </h1>

            <form onSubmit={handleSubmit(OnFormSubmit)} noValidate className=' flex flex-col justify-center '>


              {/* Name  */}
              <section className='mb-3'>
                <label htmlFor="name" className='splLable'>Name</label>
                <div className='flex items-center text-sm gap-2'>
                  <p>Dr.</p>
                  <input className='splInput' type="text" placeholder='e.g. Prasenjit Das' {...register("name", {
                    required: {

                      value: true,
                      message: "Name is mandatory"
                    }
                  })} />
                </div>
                <p className='text-red-600'>{errors.name?.message}</p>

              </section>



              {/* Pic  */}
              <section className='mb-3'>
                <label htmlFor="pic" className='splLable'>Upload Image</label>
                <div className='text-sm '>

                  <input className='file-input file-input-bordered file-input-sm w-full ' type="file" placeholder='e.g. Prasenjit Das' {...register("pic", {
                    required: {

                      value: true,
                      message: "Image is mandatory"
                    }
                  })} />
                </div>
                <p className='text-red-600'>{errors.name?.message}</p>

              </section>









              {/* Qualifications  */}
              <section className='mb-3'>
                <label htmlFor="qualification" className='splLable'>Qualifications</label>
                <div className='flex gap-2'>
                  <input className='splInput' type="text" placeholder='e.g. MBBS, MD' {...register("qualification", {
                    required: {

                      value: true,
                      message: "Qualification is mandatory"
                    }
                  })} />
                </div>
                <p className='text-red-600'>{errors.qualification?.message}</p>


              </section>





              {/* Spcialization  */}
              <section className='mb-3'>
                <label htmlFor="specialization" className='splLable'>Specialization</label>
                <div className='flex gap-2'>
                  <input className='splInput' type="text" placeholder='e.g. OPTHALMOLOGIST' {...register("specialization", {
                    required: {

                      value: true,
                      message: "Specialization is mandatory"
                    }
                  })} />
                </div>
                <p className='text-red-600'>{errors.specialization?.message}</p>


              </section>




              {/* Fee  */}
              <section className='mb-3'>
                <label htmlFor="fee" className='splLable'>fee</label>
                <div className='flex gap-2'>
                  <input className='splInput' type="number" placeholder='e.g.400' {...register("fee", {
                    valueAsNumber: true,

                    required: {

                      value: true,
                      message: "Fee is mandatory"
                    }
                  })} />
                </div>
                <p className='text-red-600'>{errors.fee?.message}</p>

              </section>





              {/* Experience  */}
              <section className='mb-3'>
                <label htmlFor="experience" className='splLable'>Experience in Months</label>
                <div className='flex gap-2'>
                  <input className='splInput' type="number" placeholder='e.g. 24' {...register("experience", {
                    valueAsNumber: true,

                    required: {

                      value: true,
                      message: "Experience is mandatory"
                    }
                  })} />
                </div>
                <p className='text-red-600'>{errors.experience?.message}</p>

              </section>




              {/* Iterating Clinic Details */}
              <section className='mb-3'>
                <label className='splLable' >Clinic Details</label>
                <div className='bg-black h-[1px] opacity-20 mb-5'></div>
                <div className='flex flex-col items-center '>
                  {
                    fields.map((field, index) => {
                      return (
                        <div className='mb-11 w-full flex flex-col' key={field.id}>


                          {/* Clinic Location */}
                          <section>

                            <label htmlFor={`clinic.${index}.locatin`}>Location</label>

                            <div className='flex gap-2'>

                              <input className='splInput' type="text" placeholder='e.g. Agartala' {...register(`clinic.${index}.locatin`, {

                                required: {

                                  value: true,
                                  message: "location is mandatory"
                                }
                              })} />
                            </div>

                            <p className='text-red-600'>{errors.clinic?.[index]?.locatin?.message}</p>

                          </section>








                          {/* Clinic Week Day */}
                          <section className='mb-3'>

                            <label htmlFor={`clinic.${index}.weekday`} className='splLable'>OPD Days</label>

                            <div className='flex gap-2'>

                              <input className='splInput'
                                type="text"

                                placeholder='e.g. MON - TUE'
                                {...register(`clinic.${index}.weekday`, {
                                  required: {
                                    value: true,
                                    message: "Weekday is mandatory",
                                  },
                                })}

                              />
                            </div>
                            <p className='text-red-600'>
                              {errors.clinic?.[index]?.weekday?.message}
                            </p>
                          </section>






                          {/* Clinic starting time */}
                          <section className='mb-3'>
                            <label htmlFor={`clinic.${index}.fromTime`} className='splLable'>Opening Time</label>
                            <div className='flex gap-2'>
                              <input className='splInput'
                                type="time"
                                {...register(`clinic.${index}.fromTime`, {
                                  required: {
                                    value: true,
                                    message: "Opening Time is mandatory",
                                  },
                                })}
                              />
                            </div>
                            <p className='text-red-600'>
                              {errors.clinic?.[index]?.fromTime?.message}
                            </p>
                          </section>





                          {/* Clinic ending time */}
                          <section className='mb-3'>
                            <label htmlFor={`clinic.${index}.toTime`} className='splLable'>Closing Time</label>
                            <div className='flex gap-2'>
                              <input className='splInput'
                                type="time"
                                {...register(`clinic.${index}.toTime`, {
                                  required: {
                                    value: true,
                                    message: "Closing Time is mandatory",
                                  },
                                })}
                              />
                            </div>
                            <p className='text-red-600'>
                              {errors.clinic?.[index]?.toTime?.message}
                            </p>
                          </section>





                          {
                            index > 0 && (<button className='btn btn-error text-gray-50 self-center' onClick={() => remove(index)}>Remove Clinic</button>)
                          }


                        </div>
                      )
                    })
                  }




                  {/* Button for Adding one more clinic */}
                  {<button type='button' className='btn btn-info w-[200px] text-slate-600' onClick={() => append({
                    locatin: '',
                    weekday: '',
                    fromTime: '',
                    toTime: ''
                  })}>Add Clinic</button>}




                </div>

              </section>



              <button className=' btn btn-accent mb-3' onClick={() => reset()}>Reset Form</button>





              {/* Submit Button */}
              <button disabled={isSubmitting} className='btn btn-accent ' type="submit">
                {isSubmitting && <span className="loading loading-spinner text-warning" />}
                Submit
              </button>
            </form>
          </div>


        </div>

      </div>
    </div>

  )
}

export default Form