export default function Page() {
    return <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
            <div className="mt-2 mb-8 w-full">
                <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    General Information
                </h4>
                <p className="mt-2 px-2 text-base text-gray-600">
                    Complete your profile to get started
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 px-2 w-full">
                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Name</p>
                    <input type="text" className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500" />
                </div>
                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Mobile</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        <input type="text" className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500" />
                    </p>
                </div>
                <div className="col-span-2 flex flex-col w-full justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        <textarea className="block text-sm py-3 px-4 rounded-lg w-full border outline-sky-500" />
                    </p>
                </div>
            </div>
        </div>
    </div>

}