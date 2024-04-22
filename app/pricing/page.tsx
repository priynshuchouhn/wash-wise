import Image from "next/image";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import { pricing } from "../lib/data";
import PricingCard from "../ui/PricingCard";

export default function Page() {
    return <>
        <NavBar />
        <section className="relative py-32 lg:py-36 bg-white">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-sky-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
                </div>
                <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-sky-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
                <div className="flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
                        Affordable Pricing at{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-sky-600">
                            Wash Wise{" "}
                        </span>
                    </h1>
                    <p className="mt-8 text-gray-700">
                        Our pricing is designed to offer you affordable rates without compromising on the quality of our services. Explore our transparent pricing structure and choose the plan that suits your needs best.
                    </p>
                    <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <Image
                        src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Hero image"
                        width={2350}
                        height={2359}
                        className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
                    />
                </div>
            </div>
        </section>
        <div className="bg-sky-50 flex items-center justify-center min-h-screen relative z-10 py-20">
            <div className="absolute -top-40 -right-40 lg:w-2/3 w-full h-80 -z-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[-20px_10px_0px_#E0F2FE]"
                    viewBox="0 0 2000 2000"
                    fill="rgb(240 249 255)"
                >
                    <path d="M994 112c-703-2-920.47 400.35-904 905 13.35 409 32.03 946.66 977 861 684-62 792-279 835-777 61.67-714.25-288.33-987.24-908-989Z"></path>
                </svg>
            </div>
            <div className="w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-[#ffffff]/60 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.21)]">
                <ul className="flex items-start justify-between gap-8 mt-10 md:flex-row flex-col flex-wrap">
                    {pricing.map(item=> <PricingCard key={item.name} name={item.name} description={item.description} price={item.price}/>)}
                </ul>
            </div>
        </div>

        <Footer />
    </>;
}