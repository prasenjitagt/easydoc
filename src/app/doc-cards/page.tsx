import { prisma } from "@/lib/db/prisma";
import Image from "next/image"

export const metadata = {
    title: "Choose Doctor"
}
const DocCards = async () => {

    const doctors = await prisma.doctor.findMany({
        orderBy: { id: "desc" }
    });

    const imgsrc = "/doc-images/DipeshDas51998b61-706a-4444-8523-aa2196addd97.jpeg";
    return (
        <>
            {doctors.map(doctor => (
                <Image key={`${doctor.id}`} width={200} height={200} alt={`${doctor.name}`} src={`${doctor.docImageUrl}`} />
            ))}
        </>

    )
}

export default DocCards