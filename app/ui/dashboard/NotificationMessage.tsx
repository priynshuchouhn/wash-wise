export default function NotificationMessage({sender, message, time, img}: any) {
    return (
        <a className="flex items-center px-4 py-3 -mx-2 text-gray-600 cursor-pointer hover:text-fuchsia-900 hover:bg-fuchsia-200">
            <img className="object-cover w-8 h-8 mx-1 rounded-full" src={img} alt="avatar" />
            <p className="mx-2 text-sm">
                <span className="font-bold text-fuchsia-950" >{sender}</span> {message} {time}
            </p>
        </a>
    );
}