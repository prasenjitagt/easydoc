
import { Doctor } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'



interface DocCardsProp {
    doctor: Doctor
}



const EachDocCard = ({ doctor }: Doctor | any) => {

    const monthToYear = (montStr: string): string => {

        const years = Math.floor(parseInt(montStr) / 12);
        const remainingMonths = parseInt(montStr) % 12;

        if (remainingMonths === 0) {
            return `Experience: ${years} yrs`;
        }
        else {
            return `Experience: ${years} yrs ${remainingMonths} months`;

        }
    }

    return (

        <div className="card lg:card-side bg-base-100 hover:shadow-2xl hover:shadow-success duration-500 max-w-sm min-w-[350px] 
         ">


            <div className='card-body '>
                <section className='flex flex-row  justify-between '>



                    <div className="avatar">
                        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image src={doctor.docImageUrl} alt={doctor.name} width={150} height={150} className='w-full max-w-sm'
                                priority
                            />

                        </div>
                    </div>


                    <div className=''>

                        <h2 className='card-title'>Dr. {doctor.name}</h2>

                        <div className='flex flex-row  items-center '>
                            <Image src='/icons/degree.svg'
                                alt='degree-icon'
                                height={20}
                                width={20} />
                            <p className='ml-1 font-medium'>{doctor.degree}</p>
                        </div>

                        <div className='flex flex-row  items-center'>
                            <Image src='/icons/specialization.svg'
                                alt='specialization-icon'
                                height={20}
                                width={20} />
                            <p className='ml-1 font-medium'>{doctor.specialization}</p>
                        </div>


                        <div className='flex flex-row  items-center'>
                            <Image src='/icons/clinicLocation.svg'
                                alt='clinicLocation-icon'
                                height={20}
                                width={20} />
                            <p className='ml-1 font-medium'>{doctor.clinicLocation}</p>
                        </div>
                        <p className='ml-1 font-medium'>{monthToYear(doctor.experience)}</p>


                    </div>
                </section>

                <section>

                    <div className="text-justify text-sm">
                        <p>{doctor.description}</p>
                    </div>


                    <div className='flex flex-row  items-center'>
                        <Image src='/icons/opdTime.svg'
                            alt='opdTime-icon'
                            height={20}
                            width={20} />
                        <p className='ml-1 font-medium'>{doctor.opdTime}</p>
                    </div>
                </section>

                <section className='flex flex-row  items-center justify-between'>

                    <button className='cursor-default'>
                        <p className='font-medium badge badge-info'>
                            Fee: ₹{doctor.fees}
                        </p>
                    </button>
                    <Link
                        href={"/doctors/" + doctor.id}
                        className='hover:shadow-2xl hover:shadow-success duration-150'>

                        <button className=" btn btn-success">Book Appointment</button>
                    </Link>
                </section>


            </div>
        </div>




    )
}

export default EachDocCard