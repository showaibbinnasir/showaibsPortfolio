import { buttonVariants, Empty, EmptyDescription, EmptyImage, EmptyTitle } from "keep-react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Image } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const ErrorRoute = () => {
    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
            </div>
            <div>
                <Empty>
                    <EmptyImage>
                        <Image
                            src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
                            height={234}
                            width={350}
                            alt="404"
                        />
                    </EmptyImage>
                    <EmptyTitle className="mb-[14px] mt-5">Oops! You seem to be lost</EmptyTitle>
                    <EmptyDescription className="mb-8">
                        It seems the post you are looking for has been removed or you are trying to visit an unauthorised routes. Thank you for browsing.
                    </EmptyDescription>
                    <Link style={{transition : "0.3s"}} to="/" className="hover:bg-[#6A3DC5] border border-[#6A3DC5] rounded-lg p-5 text-[#6A3DC5] transition-all hover:text-white">
                        Go to home
                    </Link>
                </Empty>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ErrorRoute;