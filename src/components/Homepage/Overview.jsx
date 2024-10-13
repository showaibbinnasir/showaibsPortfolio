import { DownloadSimple, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import backgroundImage from "../../assets/background-01.png"
import image from "../../assets/image.png"
import cv from "../../assets/CV.pdf"
import { useNavigate } from "react-router-dom";
const Overview = () => {
    const navigate = useNavigate()
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'contain',
        }} className="flex justify-center pt-10 px-[10px] lg:bg-repeat bg-no-repeat">
            <div className="flex flex-col gap-5 lg:flex-row ">
                <div className="flex items-center">
                    <div>
                        <h1 className="mb-[-5px] text-[14px] lg:text-[20px] font-semibold">Hello, i am</h1>
                        <h1 className=" mb-[-10px] lg:mb-[-20px] font-semibold text-[20px] lg:text-[36px] text-[#6A3DC5]">Showaib bin Nasir</h1>
                        <p className="font-bold text-transparent text-[36px] lg:text-[65px] bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Software Engineer</p>
                        <h1 className="w-[350px] text-justify lg:w-[550px]">I break down complex user experience problems to create integrity focused solutions that connect billions of people</h1>

                        <div className="flex items-center gap-3 mt-5">
                            <a href={cv} download>
                                <div className="flex items-center gap-2 border border-[#6A3DC5] rounded-lg px-5 py-1">
                                    <h1 className="text-[#6A3DC5] text-sm">Download CV</h1>
                                    <DownloadSimple size={24} color="#6a3dc5" />
                                </div>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/showaibbin.nasir/">
                                <div className="flex items-center gap-2 border border-[#6A3DC5] rounded-lg p-1">
                                    <FacebookLogo size={24} color="#6a3dc5" />
                                </div>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/showaib-bin-nasir-7381491a3/">
                                <div className="flex items-center gap-2 border border-[#6A3DC5] rounded-lg p-1">
                                    <LinkedinLogo size={24} color="#6a3dc5" />
                                </div>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/__cybertroniancube__/">
                                <div className="flex items-center gap-2 border border-[#6A3DC5] rounded-lg p-1">
                                    <InstagramLogo size={24} color="#6a3dc5" />
                                </div>
                            </a>
                            <a target="_blank" href="https://github.com/showaibbinnasir">
                                <div className="flex items-center gap-2 border border-[#6A3DC5] rounded-lg p-1">
                                    <GithubLogo size={24} color="#6a3dc5" />
                                </div>
                            </a>
                        </div>
                        <div onClick={() => navigate('/resume')} className="border hover:bg-[#6a3dc5] hover:text-white transition-all px-10 rounded-lg py-2 text-[#6a3dc5] cursor-pointer flex items-center justify-center gap-2 w-[350px] border-[#6A3DC5] my-2">
                            <h1 className="text-center ">See Full Curriculum Vitae Online</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img className="w-[300px] lg:w-[450px]" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Overview;