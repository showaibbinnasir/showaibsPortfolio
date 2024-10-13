import {
    Accordion,
    AccordionContainer,
    AccordionContent,
    AccordionIcon,
    AccordionPanel,
    AccordionTitle,
} from 'keep-react'


const QualityServices = () => {
    
    const services = [
        {
            id: "01",
            title: "Web development",
            description: "I will transform your ideas into real-life applications, from sketch to deployment, using the MERN stack technology. You will enjoy a seamless, buttery-smooth experience while using the web applications I build, ensuring performance, scalability, and a top-notch user experience."

        },
        {
            id: "02",
            title: "Ui/UX design",
            description: "I will craft intuitive and user-centric interfaces, ensuring every click and interaction feels natural and engaging. From wireframes to final prototypes, I focus on delivering a design that aligns with both user needs and business goals, providing a seamless and enjoyable experience."

        },
        {
            id: "03",
            title: "Graphics Design",
            description: "I create visually appealing graphics that elevate your brand and make a lasting impression. From logos to marketing materials, I focus on clean, bold designs that speak to your target audience, while maintaining your brand’s identity."

        },
        {
            id: "04",
            title: "Video editing",
            description: "I bring your vision to life through dynamic and engaging video content. From raw footage to the final polished product, I ensure smooth transitions, vibrant visuals, and storytelling that captivates your audience and communicates your message effectively."

        }
    ]
    return (
        <div className="pt-[10px]">
            <div className="bg-[#F6F3FC] py-5">

                        <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">My Quality Services</p>
                    
                <div className="flex justify-center">
                    <h1 className="w-[650px] px-5 text-center">I put your ideas and thus your wishes in the form of a unique web project that
                        inspires you and you customers.</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='pt-10 w-[350px] md:w-[650px] lg:w-[850px]'>
                        <Accordion openFirstPanel={true} className="space-y-4">
                            {
                                services.map((service, i) => <AccordionPanel  data-aos="zoom-in-right" className="bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]" key={i}>
                                    <AccordionContainer>
                                        <AccordionTitle className='text-white'><span>{service.id}.</span> {service.title}</AccordionTitle>
                                        <AccordionIcon />
                                    </AccordionContainer>
                                    <AccordionContent className='text-gray-300'>
                                        {
                                            service.description
                                        }
                                    </AccordionContent>
                                </AccordionPanel>)
                            }

                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualityServices;