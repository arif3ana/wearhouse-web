export default function Topbar({ name }) {
    return (
        <>
            {/* search tidak di tampilkan selain di route dashboard, jadi bisa menggunakan colom grid supaya nama gudang selalu di kanan walaupun tidak ada search */}
            <div className="flex justify-between items-center cursor-pointer w-full py-5 bg-first pl-[300px] pr-[100px]">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <img
                            src="/icons/search-normal.svg"
                            alt="search svg icon"
                        />
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-[300%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search..."
                        type="text"
                        name="search"
                    />
                </label>
                <div className="flex flex-col items-left">
                    <span className="text-black text-sm font-medium">
                        {name.user.wearhouse_name}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">
                        Admin | {name.user.name}
                    </span>
                </div>
            </div>
        </>
    );
}
