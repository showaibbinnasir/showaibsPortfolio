const ExperienceAndEducation = () => {
    const experiences = [
        {
            title: "Lead Developer",
            year: "2023 - NOW",
            company: "Dreamweave Stations"
        },
        {
            title: "Former Internee",
            year: "2022 - 2023",
            company: "W3EDEN INC."
        },
        {
            title: "Lead Graphics Designer",
            year: "2022 - 2024",
            company: "Allied Computer Streams"
        },
        {
            title: "Video Editor",
            year: "2019 - Now",
            company: "DrishyoKosh & Yanes Squad"
        }
    ]
    const education = [
        {
            title: "BSc in Computer Science and Engineering",
            year: "2019-2023",
            institution: "BGC Trust University Bangladesh"
        },
        {
            title: "Web Development with MERN Stack",
            year: "2022-2023",
            institution: "Programming Hero"
        },
        {
            title: "Intensive Certified Robotics Course",
            year: "2020",
            institution: "Japan-Bangladesh Robotics and Advanced Research Center"
        }
    ]

    return (
        <div className="bg-[#F6F3FC] py-5 px-5 lg:px-16">
            
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-[50%]">
                        <div>

                            
                         <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">My Experience</p>
                            

                        </div>
                        <div className="pt-5">
                            <div className="flex flex-col gap-5">
                                {
                                    experiences.map((data, i) => <div style={{transition : "0.4s"}} data-aos="zoom-in-right" className="bg-white transition-all hover:shadow-lg p-5 rounded-lg" key={i}>
                                        <h1 className="text-[#6A3DC5] text-lg font-semibold">{data.year}</h1>
                                        <h1 className="text-[#331D5F] text-2xl font-bold">{data.title}</h1>
                                        <h1 className="text-gray-500 text-sm">{data.company}</h1>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%]">
                        <div>
                            
                                
                                <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">My Educations</p>
                            
                        </div>
                        <div className="pt-5">
                            <div className="flex flex-col gap-5">
                                {
                                    education.map((data, i) => <div  style={{transition : "0.4s"}} data-aos="zoom-in-right" className="bg-white transition-all hover:shadow-lg p-5 rounded-lg" key={i}>
                                        <h1 className="text-[#6A3DC5] text-lg font-semibold">{data.year}</h1>
                                        <h1 className="text-[#331D5F] text-2xl font-bold">{data.title}</h1>
                                        <h1 className="text-gray-500 text-sm">{data.institution}</h1>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            
        </div>
    );
};

export default ExperienceAndEducation;