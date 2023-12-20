

import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubButton from "@/components/FormSubButton";
import { writeFile } from 'fs/promises';

export const metadata = {
  title: "Add Doctor Profile"
}



async function addDoctor(formData: FormData |
  any) {
  "use server";


  /***** Getting Form Data *****/
  const profileImage = formData.get("profileImage");
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const clinicLocation = formData.get("clinicLocation")?.toString();
  const degree = formData.get("degree")?.toString();
  const specialization = formData.get("specialization")?.toString();
  const opdTime = formData.get("opdTime")?.toString();
  const fees = formData.get("fees")?.toString();
  const experience = formData.get("experience")?.toString();

  /***** Checking if any value is null *****/
  if (!profileImage || !name || !description || !clinicLocation || !degree || !specialization || !opdTime || !fees || !experience) {
    throw Error('Missing required field');
  }


  /***** Converting image  *****/
  const imgByteData = await profileImage.arrayBuffer();
  const imgBuffer = Buffer.from(imgByteData);

  /***** Getting image extension e.g. ".png"  *****/
  const imgExtension = profileImage.type.replaceAll("image/", ".");

  /***** Setting unique image Name(id for image)  *****/
  const imgName = `${name.replaceAll(" ", "")}${crypto.randomUUID()}${imgExtension}`;


  /***** Path for the image *****/
  const path = `./public/doc-images/${imgName}`;

  /***** Saving the image *****/
  await writeFile(path, imgBuffer);

  /***** Url for Uploading into mongodb *****/
  const docImageUrl = path.replaceAll("./public", "");



  /***** Saving into mongodb *****/
  await prisma.doctor.create({
    data: { clinicLocation, degree, description, experience, name, opdTime, fees, specialization, docImageUrl }
  })


  /***** Redirecting to Homepage After Saving *****/
  redirect("/");
}


export default function DoctorDesciption() {
  return (
    <div
      className='bg-secondary-content shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-3 rounded-md min-w-[370px]'>

      <h1 className='mb-3 font-bold'>Work With Easy-Doc</h1>

      <form action={addDoctor}>


        <div className="grid grid-cols-2 gap-4">
          <section>


            <p className="mb-2">Name</p>


            <input
              required
              name='name'
              placeholder='e.g Prasenjit Das'
              type='text'
              className='px-1 input  rounded-md mb-3  w-full input-info inputBlueShadow '
            />


          </section>

          <section>

            <p className="mb-2">Clinic Location</p>

            <input
              required
              name='clinicLocation'
              placeholder='e.g. City Center, Agartala'
              type='text'
              className='px-1 rounded-md mb-3 w-full input input-info inputBlueShadow'
            />


          </section>






          <section>

            <p className="mb-2">Qualification</p>

            <input
              required
              name='degree'
              placeholder='e.g. MBBS, MD'
              type='text'
              className='px-1 rounded-md mb-3 w-full input input-info inputBlueShadow'
            />

          </section>


          <section>

            <p className="mb-2">Specialization</p>


            <input
              required
              name='specialization'
              placeholder='e.g. Opthalmologist'
              type='text'
              className='px-1 rounded-md mb-3 w-full input input-info inputBlueShadow'
            />

          </section>



          <section>

            <p className="mb-2">Fees in Rs (₹)</p>

            <input
              required
              name='fees'
              placeholder='e.g. 500'
              type='number'
              className='px-1 rounded-md mb-3 w-full input input-info inputBlueShadow'
            />

          </section>


          <section>

            <p className="mb-2">Experience (months)</p>

            <input
              required
              name='experience'
              placeholder='e.g. 24'
              type='number'
              className='px-1 rounded-md mb-3 w-full input input-info inputBlueShadow'
            />

          </section>
        </div>

        <section>

          <p className="mb-2">Chose Profile Image</p>


          <input name="profileImage" type="file" className="file-input file-input-bordered file-input-info file-input-md w-full inputBlueShadow" />

        </section>

        <section>

          <p className="mb-2 mt-2">OPD Timings</p>

          <input
            required
            name='opdTime'
            placeholder='e.g. Mon - Sat 6 PM -10 PM'
            type='text'
            className='px-1 rounded-md mb-3 w-full input input-info inputBlueShadow'
          />

        </section>

        <section>

          <p className="mb-2">Description</p>


          <textarea
            required
            name='description'
            placeholder='e.g about your career'
            className='textarea-bordered  textarea mb-3 w-full textarea-info inputBlueShadow' />

        </section>
        <FormSubButton type="submit" className="btn-block">
          Add Profile
        </FormSubButton>



      </form>

    </div>
  )
}

