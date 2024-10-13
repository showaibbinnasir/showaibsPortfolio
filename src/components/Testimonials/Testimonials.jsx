
import star from "../../assets/star.gif"
import { useLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "keep-react";
import { Helmet } from "react-helmet";
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const { count } = useLoaderData()
    const numberOfPage = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPage).keys()]

    useEffect(() => {
        setLoading(true)
        fetch(`https://portfolio-backend-one-rosy.vercel.app/reviews?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setReviews(data)
            })
    }, [currentPage, itemsPerPage])
    const handleItemsPerPage = e => {
        setItemsPerPage(parseInt(e.target.value))
        setCurrentPage(0)
    }
    const handlePrevButton = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextButton = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Showaib bin Nasir | Testimonials</title>
            </Helmet>
            <div>
                <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] py-5 bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Testimonials</p>
            </div>
            <div>
                {
                    loading ?
                        <div className="flex justify-center my-10">
                            <Spinner color="info" size="xl" />
                        </div> :
                        <div className="px-5 lg:px-16 ">

                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
                                    {
                                        reviews.map((data, i) => <div className=" w-[300px] md:w-[300px] lg:w-[450px] bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] p-10 rounded-lg" key={i}>
                                            <div className="flex justify-center">
                                                <img src={data.image} className="w-[150px] rounded-full h-[150px] object-cover" alt="" />
                                            </div>
                                            <h1 className="text-lg text-center text-white font-bold">{data.title}</h1>
                                            <div className='flex justify-center py-3'>
                                                <div className='flex items-center gap-3'>
                                                    <h1 className='text-4xl text-white font-semibold'>{data.rate}</h1>
                                                    <img src={star} className='w-[30px]' alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='text-center text-white'>
                                                    <abbr style={{ textDecoration: "none" }} title={data.description}>{data.description.length > 200 ? data.description.substring(0, 200) + "..." : data.description}</abbr>
                                                </h1>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>

                        </div>
                }
            </div>
            <div className="flex justify-center my-10">
                <div>
                    <button className="text-[#6A3DC5] border border-[#6A3DC5] rounded-lg px-3 py-2" onClick={handlePrevButton}>Prev</button>
                    {
                        pages.map((page, i) => <button onClick={() => setCurrentPage(page)} className={currentPage == page ? "bg-[#6A3DC5] text-center text-white px-5 py-2 mx-2 rounded-full" : "bg-gray-400 text-center text-white px-5 py-2 mx-2 rounded-full"} key={i}>{page}</button>)
                    }
                    <button onClick={handleNextButton} className="mr-5 text-[#6A3DC5] border border-[#6A3DC5] rounded-lg px-3 py-2">Next</button>
                    <select value={itemsPerPage} onChange={handleItemsPerPage} className="text-[#6A3DC5]">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;