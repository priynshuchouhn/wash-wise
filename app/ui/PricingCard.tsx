export default function PricingCard({ name, price, description }: { name: string,  price: string,  description: string, }) {
    return (<li className="w-full lg:w-[30%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in">
    <h2 className="text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">
        {name}
    </h2>
    <p className="text-center tracking-tighter block mb-14">
        <span className="text-4xl font-bold">{price}</span>
        {/* <span className="text-black/40 text-center">/mo</span> */}
    </p>
    <ol className="list-disc text-[#ff2865] w-[80%] mx-auto">
        <li>
            <span className="text-black text-xs font-semibold">
               {description}
            </span>
        </li>
    </ol>
</li>)
 }