import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center lg:gap-16">
            <div className="md:order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl text-gray-700 md:text-5xl">Experience Laundry Made Easy with<span className="text-blue-500 font-bold italic"> Wash Wise</span></h1>
              <p className="text-lg">Discover hassle-free laundry services at Wash Wise. From washing to dry cleaning, we&apos;ve got you covered. Say goodbye to laundry stress and hello to fresh clothes. Get started today!</p>
              <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                <button type="button" title="Start buying" className=" py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                  <Link href='/services' className="block text-white font-semibold">
                    Explore Our Services
                  </Link>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
              <div className="col-span-4 row-span-4 text-center">
                <Image src="https://res.cloudinary.com/dw1navurk/image/upload/v1713680192/wash-wise/dgxzslxhxrditbcp1uxu.jpg" className="rounded-full " width="640" height="960" alt="shoes" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Parallax Background */}
      <section
        className="flex flex-col w-full md:h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dw1navurk/image/upload/v1713681201/wash-wise/k8epvouqj8pxgjlhs5kh.jpg)"
        }}
      >
        <h1 className="text-gray-700 text-3xl text-center md:text-5xl font-semibold mt-20 mb-2">
          About Wash Wise
        </h1>
        <span className="text-center font-bold mt-10 mb-20 text-gray-700/90 md:w-1/2">
          <p>
            Discover convenience like never before with Wash Wise. We&apos;re your premier destination for hassle-free laundry services, dedicated to making laundry easy and convenient for you.
          </p>
          {/* <hr className="my-4" /> */}
          <p>
            Our team is committed to top-notch quality and exceptional service. With Wash Wise, expect efficiency, reliability, and excellence in every wash.
          </p>
          {/* <hr className="my-4" /> */}
          <p className="mt-10">
            <Link
              href="/about"
              className="text-gray-500/90 hover:text-blue-600 "
            >
              Learn More About Us
            </Link>
          </p>
        </span>
      </section>
      {/* Content */}
      <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* Heading start */}
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
              What We Do
            </h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: "0 auto", height: 35 }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r={5}
                className="stroke-primary"
                style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="55.1"
                y1="30.4"
                x2={100}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="45.1"
                y1="30.4"
                x2={0}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
            </svg>
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              At Wash Wise, we offer a comprehensive range of laundry services designed to meet all your needs. Our services include:
            </p>
          </header>
          {/* End heading */}
          {/* row */}
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <Image src='/images/washing.png' alt="washing" width={32} height={32} />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Washing
                </h3>
                <p className="text-gray-500">
                  We use state-of-the-art equipment and gentle detergents to ensure your clothes are clean and fresh.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <Image src='/images/drying.png' alt="washing" width={32} height={32} />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Drying
                </h3>
                <p className="text-gray-500">
                  Our efficient dryers deliver quick and thorough drying, so you can get back to wearing your favorite outfits in no time.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <Image src='/images/ironing.png' alt="washing" width={32} height={32} />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Ironing
                </h3>
                <p className="text-gray-500">
                  Leave the hassle of ironing to us. Our skilled team ensures your clothes are perfectly pressed and wrinkle-free.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <Image src='/images/dry-cleaning.png' alt="washing" width={32} height={32} />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Dry Cleaning
                </h3>
                <p className="text-gray-500">
                  For delicate fabrics and special garments, our dry cleaning services provide gentle care and meticulous cleaning.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <Image src='/images/folding.png' alt="washing" width={32} height={32} />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Folding
                </h3>
                <p className="text-gray-500">
                  Say goodbye to wrinkled piles of laundry! Our folding service ensures neat and organized clothes ready to wear or store.
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <Image src='/images/stain-removal.png' alt="washing" width={32} height={32} />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Stain Removal
                </h3>
                <p className="text-gray-500">
                  Stubborn stains? Our stain removal experts use advanced techniques to tackle even the toughest stains effectively.
                </p>
              </div>
              {/* end service block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
      {/* Why Us Section */}
      <div className="min-h-screen bg-gradient-to-r from-sky-50 to-blue-50 py-20">
        <h1 className="text-5xl font-bold text-center pb-10">
          Why <span className="text-blue-500">Wash Wise</span>?
        </h1>
        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5">
          <div className="flex flex-col md:flex-row bg-white rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="md:flex justify-center md:justify-end hidden">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center ">
                <svg className="w-14 h-14 text-blue-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" /></svg>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-sky-50 hover:to-sky-150">
              <h1 className="font-bold text-xl pb-4">1. Quality Service </h1>
              <p>
                At Wash Wise, we prioritize quality in every aspect of our service. From washing to drying, ironing, and dry cleaning, we ensure that your clothes receive the best care possible.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white  md:bg-transparent  rounded-xl gap-10">
            <div className="w-full md:w-[500px] md:flex justify-center md:justify-end hidden">
              <div className="w-[120px] h-[120px]  shadow-lg bg-white   md: rounded-xl md:p-4 flex justify-center items-center">
                <svg className="w-14 h-14 text-blue-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" /></svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-sky-50 hover:to-sky-150">
              <h1 className="font-bold text-xl">2. Convenience</h1>
              <p>
                Say goodbye to laundry stress with Wash Wise. Our easy-to-use platform allows you to schedule pickups, track orders, and manage payments seamlessly, all from the comfort of your home.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white md:bg-transparent  rounded-xl  gap-10">
            <div className="w-full md:w-[800px] md:flex hidden justify-center md:justify-end">
              <div className="w-[120px]   shadow-lg h-[120px] bg-white  md: rounded-xl p-4 flex justify-center items-center">
                <svg className="w-14 h-14 text-blue-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h11.5c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" /></svg>
              </div>
            </div>
            <div className=" bg-white   shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-sky-50 hover:to-sky-150">
              <h1 className="font-bold text-xl">3. Affordability </h1>
              <p>
                Enjoy competitive pricing without compromising on quality. We believe that everyone deserves access to premium laundry services at affordable rates.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="w-full md:w-[350px] md:flex hidden justify-center md:justify-end">
              <div className="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
                <svg className="w-14 h-14 text-blue-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-sky-50 hover:to-sky-150">
              <h1 className="font-bold text-xl">4. Customer Satisfaction. </h1>
              <p>
                Your satisfaction is our priority. We go the extra mile to ensure that you are happy with every aspect of our service, from start to finish.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="md:flex hidden justify-center md:justify-end">
              <div className="w-[120px]  h-[120px] bg-white   shadow-lg  rounded-xl p-4 flex justify-center items-center">
                <svg className="w-14 h-14 text-blue-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M368.6 96l76.8 96H288V96h80.6zM224 80V192H64c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32H65.1c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h66.3c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32V224c0-17.7-14.3-32-32-32H527.4L418.6 56c-12.1-15.2-30.5-24-50-24H272c-26.5 0-48 21.5-48 48zm0 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm288 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" /></svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-sky-50 hover:to-sky-150">
              <h1 className="font-bold text-xl">5. Convenient Pickup and Delivery. </h1>
              <p>
                Our convenient pickup and delivery service takes the hassle out of laundry day. Simply schedule a pickup time that works for you, and our friendly team will arrive at your doorstep to collect your laundry. Once cleaned and ready, we&apos;ll deliver it back to you, saving you time and effort. With Wash Wise, laundry day has never been easier or more convenient.              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Join as delivery partner */}
      <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
        <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className=" relative ">
              <div className=" absolute top-0 -left-48 z-0 opacity-90">
                <Image
                width={120}
                height={120}
                alt="partner"
                  src="https://res.cloudinary.com/dw1navurk/image/upload/v1713691281/wash-wise/uu3s6a8spepgmxmbfn9q.jpg"
                  className="w-36 z-0 h-full object-fill fill-y text-y"
                />
              </div>
              <div className="lg:max-w-xl lg:pr-5 relative z-40">
                <p className="flex text-sm uppercase text-g1  ">Join Us As</p>
                <h2 className="mb-6 max-w-lg text-4xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                  Delivery Partner at <span className="my-1 inline-block border-b-8 border-g4 bg-white text-blue-500 px-4 font-bold text-g4 animate__animated animate__flash">Wash Wise</span>
                </h2>
                <p className="text-base text-gray-700">
                  Are you passionate about providing excellent service and want to be part of a dynamic team? Join Wash Wise as a delivery partner and help us deliver exceptional laundry experiences to our customers.
                </p>
                <div className="mt-10 flex flex-row justify-around items-center md:justify-start">
                  <a
                    href="/partner/auth/login"
                    className="mb-3 inline-flex h-12  items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                  >
                    Join now
                  </a>
                  <a
                    href="/"
                    aria-label=""
                    className="group inline-flex items-center font-semibold text-g1"
                  >
                    Watch how it works
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
              <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                <Image src="https://res.cloudinary.com/dw1navurk/image/upload/v1713690246/wash-wise/dkiyj7mbaumbtnjicanl.jpg" alt="delivery-partner" width={350} height={250} />
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute -bottom-24 left-10 z-0  opacity-10 ">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
            />
          </svg>
        </div>
        <div className=" absolute -bottom-0 left-3/4 z-0  opacity-10 ">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300"
          >
            <path
              d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className=" absolute top-10 left-3/4 z-0  opacity-10 ">
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300"
          >
            <path
              d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* Customer Testimonial */}
      <div className="w-full py-20">
        <h1 className="text-5xl font-bold text-center pb-10">
          <span className="text-blue-500 italic">Wash Wise</span> &apos;s Customer Stories
        </h1>
        <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
          {/* Beginning of the component about Daniel Clifford */}
          <div className="bg-blue-800 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
            <div className="mx-6 my-8 2xl:mx-10">
              <Image alt="avatar"
                className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4"
                src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">
                Adaleru Nair
              </h1>
              <h2 className="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">
               Chennai, Tamilnadu
              </h2>
            </div>
            <div className="-mt-6 relative">
              <p className="text-white text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">
              Using Wash Wise has been a game-changer for my laundry needs. The convenience, quality, and timely delivery are unmatched!
              </p>
              <br />
              <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">
                “ Wash Wise has transformed my laundry routine. The seamless process from booking to delivery has saved me time and effort. The quality of cleaning is exceptional, and my clothes look and feel great every time. It&apos;s a service I can rely on for its efficiency and professionalism. ”
              </p>
            </div>
          </div>
          {/* Ending of the component about Daniel Clifford */}
          {/* Beginning of the component about Jonathan Walters */}
          <div className="bg-gray-900 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
            <div className="mx-8 2xl:mx-10 my-10">
              <Image alt="avatar"
                className="w-8 md:w-9 2xl:w-20 h-8 md:h-9 2xl:h-20 rounded-full border-2 -ml-1 -mt-2 lg:-mt-4"
                src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 2xl:-mt-16">
                Varun Yadav
              </h1>
              <h2 className="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-11 md:pl-12 2xl:pl-24">
               Delhi, Delhi
              </h2>
            </div>
            <div className="-mt-8 mx-1 lg:mx-2">
              {/* <p className="text-white text-lg lg:text-xl 2xl:text-4xl font-semibold pt-1 px-6 2xl:px-8 lg:pl-5 lg:pr-8">
              Highly recommended! Wash Wise makes laundry day a breeze with their efficient service and friendly staff.
              </p> */}
              <br />
              <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl pl-6 lg:pl-5 pr-4 -mt-1 lg:mt-6 2xl:mt-2 2xl:px-8">
                “ Wash Wise is a must-try! Their prompt service and attention to detail have exceeded my expectations. I appreciate the convenience of scheduling pickups online and receiving clean clothes right at my doorstep. The team is friendly and ensures a hassle-free experience. ”
              </p>
            </div>
          </div>
          {/* Ending of the component about Jonathan Walters */}
          {/* Beginning of the component about Jeanette Harmon */}
          <div className="bg-primary-color-white lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
            <div className="mx-8 my-10 lg:my-8">
              <Image alt="avatar"
                className="w-8 md:w-9 lg:w-11 2xl:w-20 h-8 md:h-9 lg:h-11 2xl:h-20 rounded-full border-2 -mt-3 -ml-1 lg:-ml-0"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">
                Sanyam Shah
              </h1>
              <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24">
               Pali, Rajasthan
              </h2>
            </div>
            <div className="-mt-4 ml-5 mr-11">
              {/* <p className="primary-color-blackish-blue text-xl 2xl:text-4xl font-bold px-2 lg:px-3 -mt-6 lg:-mt-5 2xl:mt-12 2xl:pb-6">
              Such a life-changing experience. Highly recommended! 
              </p> */}
              <br />
              <p className="primary-color-blackish-blue-opacity font-medium md:text-sm 2xl:text-3xl pl-2 lg:pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3">
                “ I&apos;m impressed by Wash Wise&apos;s commitment to excellence. My garments come back looking fresh and neatly folded, thanks to their meticulous handling. The user-friendly platform makes it easy to manage orders and track progress. Wash Wise has made laundry a stress-free task. ”
              </p>
            </div>
          </div>
          {/* Ending of the component about Jeanette Harmon */}
          {/* Beginning of the component about Patrick Abrams */}
          <div className="bg-blue-800 lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20">
            <div className="mx-8 my-8">
              <Image alt="avatar"
                className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 lg:-mt-3"
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 md:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">
                Prateek Patil
              </h1>
              <h2 className="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-12 md:pl-14 2xl:pl-24">
               Mumbai, Maharastra
              </h2>
            </div>
            <div className="px-3 -mt-3 mb-5 lg:mb-0">
              <p className="text-white text-lg 2xl:text-4xl font-semibold px-4 -mt-3 lg:-mt-6 2xl:mt-8">
              Switching to Wash Wise was the best decision I made for my laundry. The results are always perfect, and the pricing is reasonable.
              </p>
              <br />
              <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-4 mt-1 lg:-mt-3 2xl:mt-6">
                “ Choosing Wash Wise has been a game-changer. The affordability paired with top-notch cleaning results is unbeatable. I&apos;ve noticed a significant improvement in the longevity of my clothes since switching to Wash Wise. It&apos;s a reliable service that I highly recommend to everyone. ”
              </p>
            </div>
          </div>
          {/* Ending of the component about Patrick Abrams */}
          {/* Beginning of the component about Kira Whittle */}
          <div className="bg-primary-color-white lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4 2xl:h-screen">
            <div className="mx-8 my-8 lg:pl-1">
              <Image alt="avatar"
                className="w-8 md:w-9 lg:w-12 2xl:w-20 h-8 md:h-9 lg:h-12 2xl:h-20 rounded-full border-2 lg:-mt-4 -ml-1 lg:-ml-4"
                src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-12 2xl:-mt-16">
                Sushma Hegde
              </h1>
              <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24">
               Pune, Maharashtra
              </h2>
            </div>
            <div className="px-3 lg:px-5 lg:-mt-4 mb-5 lg:mb-0">
              <p className="primary-color-blackish-blue text-xl 2xl:text-4xl font-semibold px-4 lg:px-0 -mt-2 lg:-mt-0">
              I love how Wash Wise takes care of my clothes like their own. Plus, the easy online booking and tracking make it so convenient!
              </p>
              <br />
              <p className="primary-color-blackish-blue-opacity font-medium md:text-sm 2xl:text-3xl px-4 lg:px-0 2xl:px-4 lg:pr-3 mt-2 lg:-mt-1 2xl:mt-2 2xl:pb-64">
                “ Choosing Wash Wise was a pivotal moment for me, marking a significant shift in my laundry experience. From the very first wash, it became evident that their commitment to quality is unmatched. The freshness and cleanliness of my clothes after each cycle speak volumes about their attention to detail and expertise in handling garments.
                <br></br>
                I wholeheartedly recommend Wash Wise to anyone in search of a reliable and professional laundry service. Their dedication to delivering impeccable results combined with their customer-centric approach makes them the go-to choice for a hassle-free laundry experience. ”
              </p>
            </div>
          </div>
          {/* Ending of the component about Kira Whittle */}
        </div>
      </div>

      <Footer />
    </>

  );
}
