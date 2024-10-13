import {  Trash } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import {  Input, Label, Spinner, Textarea, toast } from "keep-react";
import { useState } from "react";

const PostBlogs = () => {
    function formatDate(date) {
        const day = date.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        const year = date.getFullYear();
        const month = monthNames[date.getMonth()];

        // Add suffix to day (st, nd, rd, th)
        const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
            (day % 10 === 2 && day !== 12) ? 'nd' :
                (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

        // Get hours and minutes
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // Determine AM or PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // hour '0' should be '12'

        return `${day}${suffix} ${month} ${year}, ${hours}:${minutes}${ampm}`;
    }

    const currentDate = new Date();
    const date = formatDate(currentDate)
    const [loading, setLoading] = useState(false)
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch(`https://portfolio-backend-one-rosy.vercel.app/blogs`)
            const data = await res.json();
            return data;
        }
    })
    const handleForm = e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const image = form.thumbnail.files[0];
        const name = form.authorName.value
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
                const data = { name, imageOne, title, description, date }
                fetch('https://portfolio-backend-one-rosy.vercel.app/blogs', {
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
                        refetch()
                    }).catch(err => {
                        setLoading(false)
                        toast.error("Something went wrong")
                    })
            })

    }

    const [deleteLoading, setDeleteLoading] = useState(false)
    const handleDeteleButton = id => {
        setDeleteLoading(true)
        fetch(`https://portfolio-backend-one-rosy.vercel.app/blogs/delete/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Deleted Successfully!")
            setDeleteLoading(false)
            refetch()
        })
    }
    

    return (
        <div className="mx-5 lg:mx-16">
            <h1 className="font-bold text-transparent text-[26px] text-center lg:text-[40px] py-5 bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">Post blogs</h1>
            <form onSubmit={handleForm} className="flex justify-center">
                <div className="w-[350px] lg:w-[750px]">
                    <fieldset className="">
                        <Label className="text-[#6a3dc5]" htmlFor="name">Enter title</Label>
                        <Input required className="border border-[#6a3dc5]" name="title" id="name" placeholder="Enter blog title" type="text" />
                    </fieldset>
                    <fieldset className="py-5">
                        <Label className="text-[#6a3dc5]" htmlFor="name">Descriptions</Label>
                        <Textarea required className="border border-[#6a3dc5]" name="description" id="name" placeholder="Enter your text" type="text" />
                    </fieldset>
                    <fieldset className="">
                        <Label className="text-[#6a3dc5]" htmlFor="name">Enter author name</Label>
                        <Input required className="border border-[#6a3dc5]" name="authorName" id="name" placeholder="Enter your name" type="text" />
                    </fieldset>
                    <fieldset className="text-[#6a3dc5] max-w-md space-y-1 pb-5">
                        <div className="block">
                            <label
                                htmlFor="files"
                                value="Enter your profile picture"
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
            <div>
                <h1 className="font-bold text-transparent text-[26px] text-center lg:text-[40px] py-5 bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">All blogs</h1>
                <div>
                    <div>
                        {
                            loading ?
                                <div className="flex justify-center my-10">
                                    <Spinner color="info" size="xl" />
                                </div> :
                                <div className="flex flex-col gap-5">
                                    {
                                        blogs.map((data, i) => <div className="" key={i}>
                                            <div className="bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]  p-5 rounded-lg items-center gap-5">

                                                <div className="text-white">
                                                    <div className="py-5 flex flex-col lg:flex-row justify-center lg:justify-between px-5">
                                                        <div className="flex items-center gap-3">
                                                            <img className="w-[50px] rounded-full h-[50px] object-cover" src={data.imageOne} alt="" />
                                                            <h1 className="text-lg font-semibold">{data.name}</h1>

                                                        </div>
                                                        <div className=" cursor-pointer py-5">
                                                            
                                                            <div onClick={()=>handleDeteleButton(data._id)}>
                                                                {
                                                                    deleteLoading ? 
                                                                    <Spinner color="info" size="lg" /> : 
                                                                    <Trash size={32} color="#ffffff" />
                                                                }
                                                            </div>
                                                            
                                                        </div>
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
        </div>
    );
};

export default PostBlogs;