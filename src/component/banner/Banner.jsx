import React from 'react'
import bgImage from "../../assets/bg-shadow.png"
import cricketImg from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-[60vh] bg-center bg-cover flex items-center justify-center rounded-3xl"
                style={{
                    backgroundImage: `url(${bgImage})`
                }}
            >
                <div className="hero-content text-neutral-content text-center">
                    <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">

                        <img
                            src={cricketImg}
                            className="w-40 md:w-56 object-contain"
                            alt="cricket"
                        />

                        <h2 className="text-2xl font-bold sm:whitespace-nowrap">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h2>

                        <p className="text-gray-300">
                            Beyond Boundaries Beyond Limits
                        </p>

                        <button className="btn bg-[#E7FE29] text-black outline-1 outline-[#E7FE29] outline-offset-4">
                            Claim Free Credit
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;