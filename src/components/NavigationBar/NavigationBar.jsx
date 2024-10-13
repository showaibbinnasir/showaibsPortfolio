import { NavLink, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const NavigationBar = () => {
    const navigate = useNavigate()
    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        const toggler = document.getElementById('navbar-toggler');

        // Toggle the active class on the navbar
        navbar.classList.toggle('active');

        // Change the icon based on whether the menu is active or not
        if (navbar.classList.contains('active')) {
            toggler.innerHTML = '&#10005;';  // Close icon (X)
        } else {
            toggler.innerHTML = '&#9776;';  // Hamburger icon
        }
    }
    return (
        <div className="sticky top-[-60px] lg:top-[-100px] z-50">
            <div className="headingsTop">
                <div className=" cursor-pointer" onClick={() => navigate('/')}>
                    <h1 className="font-bold text-transparent text-[36px] lg:text-[65px] bg-clip-text bg-white"><TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Showaib bin Nasir',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'Graphics Designer',
                                1000,
                                'Video Editor',
                                1000,
                                'Ui/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        /></h1>
                </div>
            </div>
            <div>
                <div className="bg-[#6A3DC5] p-3 text-[14px] flex justify-center">
                    <nav>
                        <div className="navbar">
                            <ul className="navbar-menu">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "text-white   font-semibold bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] p-[12px] rounded-lg" : "text-white font-semibold  hover:text-[#70CBDD]"}>Home</NavLink></li>
                                <li><NavLink to="/resume" className={({ isActive }) => isActive ? "text-white font-semibold bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] p-[12px] rounded-lg" : "text-white hover:text-[#70CBDD]"}>CV</NavLink></li>
                                <li><NavLink to="/testimonial" className={({ isActive }) => isActive ? "text-white font-semibold bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] p-[12px] rounded-lg" : "text-white font-semibold  hover:text-[#70CBDD]"}>Testimonial</NavLink></li>
                                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-white font-semibold bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] p-[12px] rounded-lg" : "text-white font-semibold  hover:text-[#70CBDD]"}>Contact</NavLink></li>
                                <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "text-white font-semibold bg-gradient-to-r from-[#6A3DC5] to-[#331D5F] p-[12px] rounded-lg" : "text-white font-semibold  hover:text-[#70CBDD]"}>Blogs</NavLink></li>
                                
                            </ul>
                            <button className="navbar-toggler" id="navbar-toggler" onClick={toggleMenu}>&#9776;</button>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;