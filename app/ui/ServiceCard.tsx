import Image from "next/image";

export default function ServiceCard({title, description, image}:{ title: string, description: string , image: string}){
    return <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
    <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-sky-500">
            {title}
        </h3>
        <p className="mb-6">
            {description}
        </p>
    </div>
    <Image
        src={image}
        className="w-2/3 ml-auto -mb-12"
        alt="illustration"
        loading="lazy"
        width={900}
        height={600}
    />
</div>
}