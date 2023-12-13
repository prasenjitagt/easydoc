import React from 'react'

const Dropdown = () => {
    return (
        <div className=''>


            <div className="flex flex-row items-center">
                <div className="form-control w-20">
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="toggle toggle-primary" checked />
                    </label>
                </div>

                <div className="form-control w-20">
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="toggle toggle-accent" checked />
                    </label>
                </div>




                <div className=" dropdown ">
                    <div tabIndex={0} role="button" className="btn w-40 rounded-full  m-1 bg-green-600 hover:bg-green-500  text-slate-50 hover:text-slate-50">CART TOTAL: ₹310</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-100  rounded-box w-52">
                        <li className='text-green-500 rounded-box'><a>CHICKEN BIRYANI: ₹100</a></li>
                        <li className='rounded-box text-green-500'><a>PURI SABJI: ₹210</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Dropdown