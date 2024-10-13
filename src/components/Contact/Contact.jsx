import image from "../../assets/instructor.png"
import { ArrowCircleRight } from "@phosphor-icons/react";
import { Input, Label, Spinner, Textarea, toast } from "keep-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const Contact = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const [loading, setLoading] = useState(false)
    const handleForm = e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const rate = form.rate.value
        const image = form.thumbnail.files[0];
        const formData = new FormData()
        formData.append('image', image)
        let imageOne = ""
        fetch("https://api.imgbb.com/1/upload?key=63ff49e7f3a9f352605525982cb4b330", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                imageOne = imageData?.data.url
                const data = { title, description, image: imageOne, rate }
                fetch('https://portfolio-backend-one-rosy.vercel.app/reviews', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false)
                        toast.success('upload successfully')
                        form.reset()
                    }).catch(err => {
                        setLoading(false)
                        toast.error("Something went wrong")
                    })

            })
    }
    return (
        <div>
            <div className="lg:px-16 px-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Showaib bin Nasir | Contact</title>
            </Helmet>
                <div>
                    <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] py-5 bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Contact</p>
                </div>
                <div>
                    <div className="flex justify-center">
                        <img src={image} className="w-[250px]" alt="" />
                    </div>
                    <h1 className="text-xl py-5 text-center"><span className="text-[#6A3DC5] font-semibold">Email:</span> showaibbin.nasir1@gmail.com </h1>
                    <a href="mailto:showaibbin.nasir1@gmail.com">
                        <div className="flex justify-center">
                            <div className="flex items-center gap-5 border hover:shadow-lg w-[350px] border-[#6a3dc5] p-3 transition-all duration-500 rounded-lg justify-center">
                                <h1 className="text-xl text-[#6a3dc5] font-semibold">Send me mail here</h1>
                                <ArrowCircleRight size={32} color="#6a3dc5" />
                            </div>
                        </div>
                    </a>
                    <div className="py-5">
                        <h1 className="text-xl text-center"><span className="text-[#6a3dc5] font-semibold">Address:</span> 06 Barkal Union, Chandanish, Chattogram, Bangladesh</h1>
                        <h1 className="text-xl text-center"><span className="text-[#6a3dc5] font-semibold">Phone, Whatsapp & Telegram:</span> +88-01880614408</h1>

                    </div>
                </div>
                <div>
                    <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] py-5 bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Want to tell something about him?</p>
                </div>

            </div>
            <form onSubmit={handleForm} className="flex justify-center">
                <div className="w-[350px] lg:w-[750px]">
                    <fieldset className="">
                        <Label className="text-[#6a3dc5]" htmlFor="name">Enter Name</Label>
                        <Input required className="border border-[#6a3dc5]" name="title" id="name" placeholder="Enter your name" type="text" />
                    </fieldset>
                    <fieldset className="py-5">
                        <Label className="text-[#6a3dc5]" htmlFor="name">Descriptions</Label>
                        <Textarea required className="border border-[#6a3dc5]" name="description" id="name" placeholder="Enter your text" type="text" />
                    </fieldset>
                    <fieldset className="pb-5">
                        <Label className="text-[#6a3dc5]" htmlFor="name">Give rating (1-5)</Label>
                        <Input required className="border border-[#6a3dc5]" name="rate" id="name" placeholder="Enter your rating (1-5)" type="number" />
                    </fieldset>
                    <fieldset className="text-[#6a3dc5] max-w-md space-y-1 pb-5">
                        <div className="block">
                            <label
                                htmlFor="files"
                                value="Upload file"
                            />
                        </div>
                        <input
                            required
                            className="w-[350px] lg:w-[750px]"
                            id="files"
                            type="file"
                            name='thumbnail'

                        />
                    </fieldset>

                    <div className="my-5">
                        {
                            loading ?
                            <button disabled className="border border-[#6a3dc5] px-10 rounded-lg py-2 text-[#6a3dc5]"><Spinner color="info" size="lg" /></button> : 
                            <button type="submit" className="border border-[#6a3dc5] px-10 rounded-lg py-2 text-[#6a3dc5]">Submit</button>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;