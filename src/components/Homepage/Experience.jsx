import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Experience = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="flex justify-center px-[10px]">
            <ScrollTrigger  onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:flex gap-10 lg:gap-24">
                    <div className="flex items-center gap-1 text-[#6A3DC5]">
                        <h1 className="text-[36px] lg:text-[64px] font-bold">{counterOn && <CountUp start={0} end={2} />}</h1>
                        <h1 className="text-[10px] lg:text-[16px]">Years of <br /> experience</h1>
                    </div>
                    <div className="flex items-center gap-1 text-[#6A3DC5]">
                        <h1 className="text-[36px] lg:text-[64px] font-bold">{counterOn && <CountUp start={0} end={20} />}</h1>
                        <h1 className="text-[10px] lg:text-[16px]">Projects <br /> completed</h1>
                    </div>
                    <div className="flex items-center gap-1 text-[#6A3DC5]">
                        <h1 className="text-[36px] lg:text-[64px] font-bold">{counterOn && <CountUp start={0} end={25} />}+</h1>
                        <h1 className="text-[10px] lg:text-[16px]">Client <br /> Works</h1>
                    </div>
                    <div className="flex items-center gap-1 text-[#6A3DC5]">
                        <h1 className="text-[36px] lg:text-[64px] font-bold">{counterOn && <CountUp start={0} end={2} />}</h1>
                        <h1 className="text-[10px] lg:text-[16px]">Years of <br /> experience</h1>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Experience;