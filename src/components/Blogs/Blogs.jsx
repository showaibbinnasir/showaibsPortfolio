import { useEffect, useState } from "react";
import { Spinner } from "keep-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://portfolio-backend-one-rosy.vercel.app/blogs")
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setBlogs(data)

            })
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Showaib bin Nasir | Blogs</title>
            </Helmet>
            <div className="px-5 lg:px-16">
                <div>
                    <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] pt-5 bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">All blogs</p>
                </div>
                <h1 className="text-center pb-5">By Showaib bin Nasir</h1>
                <div>
                    {
                        loading ?
                            <div className="flex justify-center my-10">
                                <Spinner color="info" size="xl" />
                            </div> :
                            <div className="flex flex-col gap-5">
                                {
                                    blogs.map((data, i) => <div onClick={() => navigate(`/blogs/${data._id}`)} className="" key={i}>
                                        <div className="bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]  p-5 rounded-lg items-center gap-5">

                                            <div className="text-white">
                                                <div className="py-5 flex items-center gap-3">
                                                    <img className="w-[50px] rounded-full h-[50px] object-cover" src={data.imageOne} alt="" />
                                                    <h1 className="text-lg font-semibold">{data.name}</h1>

                                                </div>
                                                <h1 className="font-bold text-md md:text-xl lg:text-2xl">{data.title}</h1>
                                                <h1 className="text-sm text-gray-400 py-5">{data.date}</h1>
                                                <div>
                                                    <abbr style={{ textDecoration: "none" }} title={data.description}>{data.description.length > 200 ? data.description.substring(0, 200) + '....' : data.description}</abbr>
                                                </div>

                                            </div>
                                        </div></div>)
                                }
                            </div>

                    }

                </div>
            </div>
        </div>
    );
};

export default Blogs;