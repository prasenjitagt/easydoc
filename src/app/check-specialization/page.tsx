import { prisma } from "@/lib/db/prisma"
import Link from 'next/link'

const CheckSpecialization = async () => {


    const specializations = await prisma.specialization.findMany({
        orderBy: { id: 'desc' }
    });
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>

                    </tr>
                </thead>
                <tbody>


                    {/* rows */}
                    {specializations.map((specialization, index) => {
                        return (
                            <tr key={specialization.id}>
                                <th>{index + 1}</th>
                                <td>{specialization.specialization}</td>
                            </tr>
                        )
                    })}




                </tbody>
            </table>


            {/* Buttons */}
            <div className="flex flex-col w-min gap-2 mt-5">

                <Link href={`/`} className="btn btn-accent">
                    Home
                </Link>
                <Link href={`/add-specialization`} className="btn btn-accent">
                    Add Specialization
                </Link>
            </div>



        </div>
    )
}

export default CheckSpecialization