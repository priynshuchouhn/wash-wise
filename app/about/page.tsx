import Image from "next/image";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

export default function Page() {
    return (<>
        <NavBar />
        <>
            {/* component */}
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <Image
                                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                                alt="image"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Welcome to Wash Wise, your trusted partner in laundry solutions!</h2>
                            <p className="mt-6 text-gray-600">
                            At Wash Wise, we understand the challenges of managing laundry in today{"'"}s fast-paced world. Our journey began with a vision to simplify the laundry experience for individuals and families. With a team of passionate experts in laundry care and technology, we set out to revolutionize the way people handle their laundry needs.
                            </p>
                            <p className="mt-4 text-gray-600">
                                {" "}
                                Our mission is simple yet powerful: to provide top-notch laundry services that are convenient, reliable, and environmentally friendly. We strive to exceed customer expectations by delivering impeccable cleanliness, exceptional care for garments, and a seamless user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

        <Footer />
    </>)
}