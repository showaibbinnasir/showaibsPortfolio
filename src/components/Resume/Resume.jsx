import { DownloadSimple, FacebookLogo, GithubLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import profile from "../../assets/instructor.png"
import cv from "../../assets/CV.pdf"
import { Divider } from "keep-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Resume = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Showaib bin Nasir | Online Curriculum Vitae</title>
            </Helmet>
            <div className="py-10 px-1 lg:px-16">
                <div className="flex justify-center">
                    <img src={profile} className="w-[250px]" alt="" />
                </div>
                <div className="py-5">
                    <h1 className="text-xl md:text-3xl lg:text-4xl text-[#6A3DC5] font-bold text-center mt-5">Mohammad Showaib bin Nasir</h1>
                    <h1 className="text-md lg:text-lg text-center">Email : showaibbin.nasir1@gmail.com</h1>
                    <div className="flex justify-center">
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
                            <a target="_blank" href="https://x.com/ShowaibBin/">
                                <div className="flex items-center gap-2 border border-[#6A3DC5] rounded-lg p-1">
                                    <XLogo size={24} color="#6a3dc5" />
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
                    </div>
                </div>
                <Divider />
                <div className="px-2">
                    <div className="">
                        <div>
                            <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] py-5 bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Objectives</p>
                        </div>
                        <div className="flex justify-center">
                            <div className=" w-[350px] md:w-[650px] lg:w-[850px] text-justify">
                                <h1>I am a self-motivated Web Developer passionate about writing quality code, adhering to best practices, and designing clean, minimal user interfaces. I thrive in dynamic environments, quickly adapting to new challenges and responsibilities. My strong time management skills allow me to handle multiple tasks efficiently, ensuring timely delivery of high-quality results. Collaboration is something I genuinely enjoy, as I believe that teamwork brings out the best in both individual and group efforts. My commitment to learning and growing makes me a reliable and forward-thinking team member, always eager to contribute to the success of a project.</h1>
                                <div>
                                    <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text py-5 bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Skills</p>
                                </div>
                                <h1><span className="font-bold text-[#6A3DC5]">Enterprise:</span> HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, ES6, React Js, SPA, ReactHooks,
                                    Context-API, React Router, Keep react, Framer motion, Three JS, AOS</h1>
                                <h1><span className="font-bold text-[#6A3DC5]">Comfortable:</span> Firebase, Firebase Authentication, NodeJS, ExpressJs, MongoDB, TypeScript,
                                    REST API, Daisy Ui, Flowbite.</h1>
                                <h1><span className="font-bold text-[#6A3DC5]">Familiar:</span> StripeJs, Arduino, Python, Python for machine learning, C++, C#, Java, Android Studio, React native, Redux, Zustand</h1>
                                <h1 className="pb-5"><span className="font-bold text-[#6A3DC5]">Tools & Software:</span> Git, GitHub, VS code, Vercel, Netlify, Figma, Photoshop, Adobe XD, Premiere
                                    Pro, Adobe Illustrator, Canva, Blender 3.8, Adobe After effects. </h1>
                                <Divider />
                                <div>
                                    <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text py-5 bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Educational Qualifications</p>
                                </div>
                                <h1><span className="font-bold text-[#6A3DC5]">Secondary School Certificate (SSC) : </span> Completed(Science) from <span className="font-bold">Lamabazar A.A.As City Corp. High School</span> in 2017</h1>
                                <h1><span className="font-bold text-[#6A3DC5]">Higher Secondary Certificate (HSC) : </span> Completed(Science) from <span className="font-bold">Kazem Ali School & College</span> in 2019. But in the beginning i was admitted in <span className="font-bold">BGC Academy School and College, Chandanish</span>. Later transferred.</h1>
                                <h1><span className="font-bold text-[#6A3DC5]">Degree (Bachelor) : </span> Completed BSc(Hons.) in Computer Science and Engineering from <span className="font-bold">BGC Trust University Bangladesh</span> in 2023. </h1>
                                <h1 className="font-bold text-[#6A3DC5]">Other courses :</h1>
                                <ol className="pb-5">
                                    <li>1.Completed web development with MERN stack from <span className="font-bold"><a target="_blank" href="https://www.programming-hero.com/">Programming Hero</a></span></li>
                                    <li>2.Completed <span className="font-bold">Internation English Language and Testing System (IELTS)</span> test with overall band score 6.5 in 2024.</li>
                                    <li>3.Completed intensive certificated course on Robotics from <span className="font-bold"><a href="https://www.jbratrc.com/">Japan-Bangladesh Robotics and Advanced Research Center</a></span></li>
                                </ol>
                                <Divider />
                                <div>
                                    <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text py-5 bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Projects and Research</p>
                                    <div className="p-5">
                                        <ol className="list-decimal">
                                            <li><a target="_blank" href="https://resonant-dieffenbachia-68c8ea.netlify.app/"><span className="font-bold text-[#6A3DC5]">Noman and Rohan GCM</span></a> | A full stack website for Abu Dhabi based Company.</li>
                                            <li><a target="_blank" href="https://nextgenfx.netlify.app/"><span className="font-bold text-[#6A3DC5]">NextgenFX</span></a> | A full stack website for England based Company. Its basically a VFX artists' team.</li>
                                            <li><a target="_blank" href="https://hayaecom.netlify.app/"><span className="font-bold text-[#6A3DC5]">Haya Fashion</span></a> | A full stack website for a Bangladeshi E-commerece company.</li>
                                            <li><a target="_blank" href="https://coursedreamweave.netlify.app/"><span className="font-bold text-[#6A3DC5]">Dream weave stations</span></a> | A full stack website for a Bangladeshi star-tup company.</li>
                                            <li><a target="_blank" href="https://github.com/showaibbinnasir/shipProject"><span className="font-bold text-[#6A3DC5]">An IoT based system to prevent maritime accidents</span></a> | A research project for preventing ship accidents using IoT driven device (Running) | Co-authors: <a className="font-bold " href="">Md. Sharif Samad</a>, <a className="font-bold " href="">Tushar Das</a>, <a className="font-bold " href="">Pranto Das</a></li>
                                            <li><a target="_blank" href="https://github.com/showaibbinnasir/shipProject"><span className="font-bold text-[#6A3DC5]">Regional Vehical Identification</span></a> | A deep learning framework for Bangladeshi vehicle license plate recognition and information management (Running) | Co-author: <a className="font-bold"
                                                href="">Mohammad Eyamin Eram Bhuiyan</a></li>
                                            <li><a target="_blank" href="https://farmmart.netlify.app/"><span className="font-bold text-[#6A3DC5]">Farmmart</span></a> | A full stack website as Internship project in W3EDEN Inc.</li>
                                            <li><a target="_blank" href="hhttps://mobiledekho-9c210.web.app/"><span className="font-bold text-[#6A3DC5]">MobileDekho</span></a> | A full stack website for selling used phones.</li>
                                        </ol>
                                    </div>
                                    <Divider />
                                </div>
                                <div>
                                    <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text py-5 bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Academic & Social Activities</p>
                                </div>
                                <div className="px-5 ">
                                    <ol className="list-decimal py-5">
                                        <li>Intra University Programming Contest at BGCTUB – 2019</li>
                                        <li>Best Innovation Award (2nd Place) for Ship Accident Prevent System, Winter School
                                            2019, BGCTUB</li>
                                        <li>Intra University Programming Contest – 2019</li>
                                        <li>Elected for Vice-President of Allied Computer Streams in 2022 which is only departments' student-led organization to work for students' betterment as well as deparment. In this phrase i have successfully arranged summer sport fest, winter sport fest, two programming contest, mentorship programme, farewell programme and so on. </li>
                                        <li>Best Designer Award in Summer Tech Fest- 2022, BGCTUB</li>
                                        <li>Developed a charity for flood prune people in Shatkania, 2023</li>
                                        <li>Fund raiser for flood effected people in Feni and Khagrachari, 2024.</li>
                                    </ol>
                                    <Divider />

                                </div>
                                <h1 className="py-5 text-xl font-bold">Other Social Links: </h1>
                                <ol className="list-disc px-5">
                                    <li><a href="https://www.researchgate.net/profile/Showaib-Bin-Nasir">Research gate</a></li>
                                    <li><a href="https://www.linkedin.com/in/showaib-bin-nasir-7381491a3/">LinkedIn</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;