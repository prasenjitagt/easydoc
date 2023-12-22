
import { prisma } from "@/lib/db/prisma";
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const metadata = {
    title: "Offers"
}





const CarouselCard = async () => {
    //getting the offer image urls from the db 
    const offers = await prisma.offer.findMany({
        orderBy: { id: 'desc' }
    });


    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            centerMode
            emulateTouch
            autoPlay
            infiniteLoop
            interval={2000}

        >
            {offers.map((offer) => (


                <div
                    key={offer.id}
                    className=" w-[70vw] centerAll "
                >

                    <Image
                        className="rounded-2xl drop-shadow-xl"
                        alt="car"
                        src={offer.imgUrl}
                        width={256}
                        height={144}
                    />
                </div>


            ))}
        </Carousel>
    )
}

export default CarouselCard