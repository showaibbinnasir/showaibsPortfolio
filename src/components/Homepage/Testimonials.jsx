import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    CarouselSlides,
} from 'keep-react'
import one from "../../assets/stuTwo.png"
import two from "../../assets/stuOne.png"
import three from "../../assets/stuThree.png"
import star from "../../assets/star.gif"
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Testimonials = () => {
    // const review = [
    //     {
    //         name: "Pranto Das Joy",
    //         rating: "4",
    //         image: one,
    //         text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions.A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions.A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
    //     },
    //     {
    //         name: "Samad Rifat",
    //         rating: "5",
    //         image: two,
    //         text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
    //     },
    //     {
    //         name: "Delwar Hosen",
    //         rating: "5",
    //         image: three,
    //         text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
    //     },
    //     {
    //         name: "Pranto Das Joy",
    //         rating: "4",
    //         image: one,
    //         text: "A great platform to gathering a variety of skills. highly recommended course this is. thank you instructor for your contributions."
    //     }
    // ]
    const [review, setReviews] = useState([])
    useState(() => {
        fetch("https://portfolio-backend-one-rosy.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="pt-10">
            <div>
                <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Testimonials</p>
            </div>
            <div className="pt-10 px-5 lg:px-16">
                <Carousel options={{ slidesToScroll: 1 }}>
                    <CarouselSlides className="flex">
                        {review.slice(0, 4).map((slide) => (
                            <CarouselItem key={slide} className="  lg:flex-[0_0_50%]">
                                <div className='p-10 h-[550px] bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] rounded-xl flex items-center justify-center'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <img data-aos="flip-left" src={slide.image} className='w-[150px] rounded-full h-[150px] object-cover' alt="" />
                                        </div>
                                        <div className='py-3 text-white'>
                                            <h1 className='lg:text-2xl text-center font-semibold'>{slide.title}</h1>
                                            <div className='flex justify-center py-3'>
                                                <div className='flex items-center gap-3'>
                                                    <h1 className='text-4xl font-semibold'>{slide.rate}</h1>
                                                    <img src={star} className='w-[30px]' alt="" />
                                                </div>
                                            </div>
                                            <h1 className='text-center'>
                                                <abbr style={{ textDecoration: "none" }} title={slide.description}>{slide.description.length > 300 ? slide.description.substring(0, 300) + "..." : slide.description}</abbr>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselSlides>
                    <CarouselControl className='flex justify-center'>
                        <CarouselIndicators />
                    </CarouselControl>
                </Carousel>
            </div>
            <div className='flex justify-center my-5'>
                <Link to="/testimonial" className="border hover:bg-[#6a3dc5] hover:text-white transition-all cursor-pointer border-[#6a3dc5] px-10 rounded-lg py-2 text-[#6a3dc5]">See all reviews</Link>
            </div>
        </div>
    );
};

export default Testimonials;