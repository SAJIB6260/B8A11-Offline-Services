import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="carousel w-full h-[450px] md:h-[500px] lg:h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/FzsptCK/best-cleaning-service-software-narrow.jpg" className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="text-white lg:space-y-5 pl-5 lg:pl-12 w-1/2">
                        <p>
                            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&vCenter=true&random=false&width=435&height=40&lines=LET+YOUR+HOME+SHINE" alt="Typing SVG" />
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-6xl text-white font-bold">We Are The Best Cleaning Service Provider</h2>
                        <div className="pt-5 lg:pt-10">
                            <Link to="/allService"><button className="bg-[#009FD9] hover:bg-[#005ed9] w-[100%] md:w-[40%] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5">Discover More</button></Link>
                            <a href="#popular"><button className="text-red-600 text-center text-base font-medium hover:bg-red-600 w-[100%] md:w-[40%] border border-red-600 hover:text-white  rounded-lg uppercase p-3 mt-5 lg:mt-0">Popular Service</button></a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn border-none btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn border-none btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ZGX1yQw/Blue-Coast-Cleaning-Service-banner.jpg" className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="text-white lg:space-y-5 pl-5 lg:pl-12 w-1/2">
                        <p>
                            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&vCenter=true&random=false&width=435&height=40&lines=LET+YOUR+HOME+SHINE" alt="Typing SVG" />
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-6xl text-white font-bold">We Are The Best Cleaning Service Provider</h2>
                        <div className="pt-5 lg:pt-10">
                            <Link to="/allServices"><button className="bg-[#009FD9] hover:bg-[#005ed9] w-[100%] md:w-[40%] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5">Discover More</button></Link>
                            <a href="#popular"><button className="text-red-600 text-center text-base font-medium hover:bg-red-600 w-[100%] md:w-[40%] border border-red-600 hover:text-white  rounded-lg uppercase p-3 mt-5 lg:mt-0">Popular Service</button></a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/VwH2mvG/816-210-banner2.jpg" className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="text-white lg:space-y-5 pl-5 lg:pl-12 w-1/2">
                        <p>
                            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&vCenter=true&random=false&width=435&height=40&lines=LET+YOUR+HOME+SHINE" alt="Typing SVG" />
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-6xl text-white font-bold">We Are The Best Cleaning Service Provider</h2>
                        <div className="pt-5 lg:pt-10">
                            <Link to="/allServices"><button className="bg-[#009FD9] hover:bg-[#005ed9] w-[100%] md:w-[40%] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5">Discover More</button></Link>
                            <a href="#popular"><button className="text-red-600 text-center text-base font-medium hover:bg-red-600 w-[100%] md:w-[40%] border border-red-600 hover:text-white  rounded-lg uppercase p-3 mt-5 lg:mt-0">Popular Service</button></a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;