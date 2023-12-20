'use client'

import { useForm, useFieldArray } from 'react-hook-form';

type FormValues = {
    name: string;
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

    const form = useForm<FormValues>();


    const { register, handleSubmit, formState, control, getValues, reset } = form;

    const { errors, } = formState;

    const { fields, append, remove } = useFieldArray({
        name: 'clinic',
        control
    })




    const onFormSubmit = (data: FormValues) => {
        console.log(data);

    }

    return (
        <div className='text-xl flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate className='text-xl flex flex-col justify-center '>


                {/* Name input */}
                <section>
                    <label htmlFor="name">Name</label>
                    <div className='flex gap-2'>
                        <p>Dr.</p>
                        <input type="text" placeholder='e.g. Prasenjit Das' {...register("name", {
                            required: {

                                value: true,
                                message: "Name is mandatory"
                            }
                        })} />
                    </div>
                    <p className='text-red-600'>{errors.name?.message}</p>

                </section>


                {/* Qualifications Input */}
                <section>
                    <label htmlFor="qualification">Qualifications</label>
                    <div className='flex gap-2'>
                        <p>Dr.</p>
                        <input type="text" placeholder='e.g. MBBS, MD' {...register("qualification", {
                            required: {

                                value: true,
                                message: "Qualification is mandatory"
                            }
                        })} />
                    </div>
                    <p className='text-red-600'>{errors.qualification?.message}</p>

                </section>



















                <button type="submit">Submit</button>


                {/* <label htmlFor="name">Name</label>
                <input type="text" placeholder='name' {...register("name", {
                    required: {

                        value: true,
                        message: "Name is mandatory"
                    }
                })} />
                <p className='text-red-600'>{errors.name?.message}</p>



                <div>
                    <label htmlFor="">Clinics</label>
                    <div>
                        {
                            fields.map((field, index) => {
                                return (
                                    <div className='flex flex-col border-2 border-black' key={field.id}>
                                        <input type="text" placeholder='clinicLocation' {...register(`clinics.${index}.location` as const)} />
                                        <input type="text" placeholder='weekDay' {...register(`clinics.${index}.weekDay` as const)} />
                                        <input type="time" placeholder='time' {...register(`clinics.${index}.date` as const, {
                                            valueAsNumber: true
                                        })} />
                                        {
                                            index > 0 && (<button onClick={() => remove(index)}>Remove</button>)
                                        }
                                    </div>
                                )
                            })
                        }

                        <button type='button' onClick={() => append({
                            location: '',
                            weekDay: '',
                            date: '18:30'

                        })}>Add</button>
                    </div>
                </div>


                <button >Submit</button>
                <button type="button" onClick={() => console.log(getValues())}>Get Values</button>
                <button type="button" onClick={() => reset()}>Reset</button> */}
            </form>
        </div>
    )
}

export default Form