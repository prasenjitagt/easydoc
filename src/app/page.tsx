
import { prisma } from '@/lib/db/prisma'
import Image from 'next/image'
import Link from 'next/link'


const Home = async () => {



  const images = await prisma.doctor.findMany({
    orderBy: { id: 'desc' }
  })



  return (
    <div>
      {/* Carousel Section */}
      <section className="bg-red-400 h-44 w-full">

      </section>


      {/* Departments */}
      <section>
        {images.map((imgDetails, index) => {

          return (
            <div key={imgDetails.id}>
              <Image src={imgDetails.imgUrl} width={200} height={200} alt='image' />
            </div>
          )
        })}
      </section>

      {/* Buttons */}
      <div className="flex flex-col w-min gap-2 mt-5">

        <Link href={`/`} className="btn btn-accent">
          Home
        </Link>
        <Link href={`/add-specialization`} className="btn btn-accent">
          Add Specialization
        </Link>
        <Link href={`/check-specialization`} className="btn btn-accent">
          Check Specialization
        </Link>
        <Link href={`/add-doctor`} className="btn btn-info">
          Add Doc
        </Link>
      </div>

    </div>
  )
}

export default Home