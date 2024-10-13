import Wave from "react-wavify";
import image from "../../assets/instructor.png"

const Footer = () => {
    return (
        <div className="">
            <Wave fill="#6A3DC5" options={{
                height: 20,
                amplitude: 30,
                speed: 0.15,
                points: 4
            }}>

            </Wave>
            <div className="p-10 mt-[-10px] bg-[#6A3DC5]">
                <div className="text-white">
                    <div data-aos="flip-up" className="flex justify-center">
                        <img src={image} className="w-[150px]" alt="" />
                    </div>
                    <div className="text-center my-5">
                        This is Showaib bin Nasir. Thank you for visiting my profile. Looking forward to you.
                    </div>
                    <h1 className="text-sm text-center">&copy; All rights reserved by Showaib bin Nasir</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;