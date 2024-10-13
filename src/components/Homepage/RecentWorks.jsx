
import { TabContent, TabItem, TabList, Tabs } from 'keep-react'
import webOne from "../../assets/websiteOne.jpg"
import webTwo from "../../assets/websiteTwo.jpg"
import webThree from "../../assets/websiteThree.jpg"
import webFour from "../../assets/webFour.jpg"
import webFive from "../../assets/webFive.jpg"
import webSix from "../../assets/webSix.jpg"
import { Link } from '@phosphor-icons/react';
const RecentWorks = () => {
    
    const webDevelopment = [
        {
            id: "01",
            title: "Noman & Rohan GCM",
            tech: ["Javascript, Tailwind, AOS, keep react, ReactJS, NodeJS, ExpressJS, MongoDB"],
            image: webOne,
            liveLink: "https://resonant-dieffenbachia-68c8ea.netlify.app/"
        },
        {
            id: "02",
            title: "Digital Proficiency",
            tech: ["Javascript, Tailwind, Keep react, framer motion, AOS, ReactJS, NodeJS, ExpressJS, MongoDB"],
            image: webTwo,
            liveLink: "https://coursedreamweave.netlify.app/"
        },
        {
            id: "03",
            title : "Mobiledekho.com",
            tech: ["Javascript, Tailwind, context-api, firebase, ReactJS, NodeJS, ExpressJS, MongoDB"],
            image : webThree,
            liveLink : "https://mobiledekho-9c210.web.app/"
        },
        {
            id: "04",
            title : "Farm mart",
            tech: ["Javascript, Tailwind, context-api, redux, firebase, ReactJS, NodeJS, ExpressJS, MongoDB"],
            image : webFour,
            liveLink : "https://farmmart.netlify.app/"
        },{
            id: "05",
            title : "Haya Ecommerce",
            tech: ["Javascript, Tailwind, context-api, keep react, firebase, ReactJS, NodeJS, ExpressJS, MongoDB"],
            image : webFive,
            liveLink : "https://hayaecom.netlify.app/"
        },
        {
            id: "06",
            title : "Nextgen FX",
            tech: ["Javascript, Tailwind, context-api, framer motion, keep react, firebase, ReactJS, NodeJS, ExpressJS, MongoDB"],
            image : webSix,
            liveLink : "https://nextgenfx.netlify.app/"
        }
    ]
    return (
        <div className='pt-10'>
            <div>
                        <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">My Recent Works</p>
                    
            </div>
            <div className='flex justify-center p-5'>
                <Tabs variant='underline' defaultActive="item-5" className="mx-auto max-w-[950px]">
                    <TabList>
                        <TabItem bgClassName=' bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]' contentClassName='text-gray-400 scale-75 lg:scale-100' className='' value="item-5">Web Development</TabItem>
                        <TabItem contentClassName='text-gray-400 scale-75 lg:scale-100' bgClassName='bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]' value="item-6">Graphics Design</TabItem>
                        <TabItem contentClassName='text-gray-400 scale-75 lg:scale-100' bgClassName='bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]' value="item-7">Ui/UX Design</TabItem>

                    </TabList>
                    <TabContent value="item-5" className='text-black'>
                        <div className='grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                webDevelopment.map((project, i) => <div  data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" className=' bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] rounded-lg p-2' key={i}>
                                    <div>
                                        <img className=' rounded-lg' src={project.image} alt="" />
                                    </div>
                                    <div className='text-white '>
                                        <h1 className='text-lg mt-3 font-semibold'>{project.title}</h1>
                                        <h1>Technology use :</h1>
                                        <ul>
                                            {
                                                project.tech.map((tech, i) => <li key={i}>
                                                    {tech}
                                                </li>)
                                            }
                                        </ul>

                                    </div>
                                    <a target='_blank' href={project.liveLink}><div className='flex items-center gap-3 text-white p-2 border border-white rounded-lg justify-center my-2 hover:scale-95 transition-all'>
                                        <h1>Live link</h1>
                                        <Link size={24} color="#fffafa" />
                                    </div></a>
                                </div>)
                            }
                        </div>
                    </TabContent>
                    <TabContent value="item-6">
                        <h1>Graphics design project</h1>
                    </TabContent>
                    <TabContent value="item-7">
                        <h1>Ui/Ux project</h1>
                    </TabContent>

                </Tabs>
            </div>
        </div>
    );
};

export default RecentWorks;