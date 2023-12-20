'use client'

import { useForm, useFieldArray } from 'react-hook-form';

type FormValues = {
    name: string;

    clinics: {
        location: string;
        weekDay: string;
        date: string
    }[];
}


const Form = () => {

    const form = useForm<FormValues>({
        defaultValues: {
            name: "Prasenjit",

            clinics: [{
                location: '',
                weekDay: '',
                date: '18:30'

            }]

        }
    });


    const { register, handleSubmit, formState, control, getValues, reset } = form;

    const { errors, } = formState;

    const { fields, append, remove } = useFieldArray({
        name: 'clinics',
        control
    })




    const onFormSubmit = (data: FormValues) => {
        console.log(data);

    }

    return (
        <div className='text-xl flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate className='text-xl flex flex-col justify-center '>


                <label htmlFor="name">Name</label>
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
                <button type="button" onClick={() => reset()}>Reset</button>
            </form>
        </div>
    )
}

export default Form