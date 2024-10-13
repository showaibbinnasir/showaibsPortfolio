import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default";
import HomePage from "../components/Homepage/HomePage";
import Resume from "../components/Resume/Resume";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Blogs from "../components/Blogs/Blogs";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import PostBlogs from "../components/PostBlogs/PostBlogs";
import ErrorRoute from "../components/ErrorRoute/ErrorRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Default></Default>,
        errorElement :<ErrorRoute></ErrorRoute>,
        children : [
            {
                path : '/',
                element: <HomePage></HomePage>
            },
            {
                path : '/resume',
                element : <Resume></Resume>
            },
            {
                path : '/testimonial',
                element : <Testimonials></Testimonials>,
                loader : ()=>fetch("https://portfolio-backend-one-rosy.vercel.app/reviewscount")
            },
            {
                path : '/contact',
                element : <Contact></Contact>

            },
            {
                path : "/blogs",
                element : <Blogs></Blogs>
            },
            {
                path : '/blogs/:id',
                element : <BlogDetails></BlogDetails>,
                loader : ({params})=> fetch(`https://portfolio-backend-one-rosy.vercel.app/blogs/${params.id}`)
            },
            {
                path : 'admintools/writeblogs',
                element : <PostBlogs></PostBlogs>
            }
        ]
    }
])

export default router