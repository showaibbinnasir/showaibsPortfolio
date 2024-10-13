import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useLocation } from "react-router-dom";

const BlogDetails = () => {
    const data = useLoaderData()
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="py-5 px-5 lg:px-16 ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.name} | {data.title}</title>
            </Helmet>
            <div>

                <h1 className="text-sm text-center">Blog id: {data._id}</h1>
                <h1 className="text-[#6A3DC5] text-2xl py-5 font-bold text-center">{data.title}</h1>
                
                <h1 className="text-sm text-center text-gray-400">Date: {data.date}</h1>
                <div className="py-5 flex items-center gap-3">
                    <img className="w-[50px] rounded-full h-[50px] object-cover" src={data.imageOne} alt="" />
                    <h1 className="text-lg font-semibold">{data.name}</h1>

                </div>
                <h1 className='banglatext text-lg my-3 text-justify' dangerouslySetInnerHTML={{ __html: data.description.replace(/\n/g, '<br>') }}></h1>
            </div>
        </div>
    );
};

export default BlogDetails;