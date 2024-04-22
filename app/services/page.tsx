import Image from "next/image";
import { services } from "../lib/data";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import ServiceCard from "../ui/ServiceCard";

export default function Page() {
    return <>
        <NavBar />
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Image
                src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center sm:blur-[5px]"
                width={2830}
                height={500}
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-900 to-sky-900 opacity-20"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-900 to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Our Laundry Services
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    With Wash Wise, you can trust that your clothes are in expert hands, receiving the care and attention they deserve.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="#">
                            Open roles <span aria-hidden="true">→</span>
                        </a>
                        <a href="#">
                            Internship program <span aria-hidden="true">→</span>
                        </a>
                        <a href="#">
                            Our values <span aria-hidden="true">→</span>
                        </a>
                        <a href="#">
                            Meet our leadership <span aria-hidden="true">→</span>
                        </a>
                    </div> */}
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">
                            Cities covered
                            </dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                            50+
                            </dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">
                            Satisfied Customers
                            </dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                            10,000+
                            </dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Garments Cleaned Monthly</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                            100,000+
                            </dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Stain Removal Success Rate</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                            95% 
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

        <div className="py-16 bg-sky-100">
            <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    {services.map(
                        (service) => {
                            return <ServiceCard key={service.title} title={service.title} description={service.description} image={service.image} />
                        }
                    )}
                    {/* <ServiceCard title="" description="" image=""/> */}
                </div>
            </div>
        </div>

        <Footer />
    </>;
}