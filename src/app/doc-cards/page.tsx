import EachDocCard from "@/components/EachDocCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image"

export const metadata = {
    title: "Choose Doctor"
}




const DocCards = async () => {

    const doctors = await prisma.doctor.findMany({
        orderBy: { id: "desc" }
    });

    return (
        <div>
            {doctors.map(doctor => <EachDocCard key={doctor.id} doctor={doctor} />)}
        </div>
    )
}

export default DocCards