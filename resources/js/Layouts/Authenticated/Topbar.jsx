import InputSearch from "./InputSearch";
export default function Topbar({ name }) {
    return (
        <>
            <div
                className={`flex ${
                    location.pathname == "/dashboard/karyawan" ||
                    location.pathname == "/dashboard/barang" ||
                    location.pathname == "/dashboard/pengiriman"
                        ? "justify-between"
                        : "justify-end"
                } items-center cursor-pointer w-full py-5 bg-first pl-[300px] pr-[100px]`}
            >
                {/* for inputSearch */}
                {location.pathname == "/dashboard/karyawan" ||
                location.pathname == "/dashboard/barang" ||
                location.pathname == "/dashboard/pengiriman" ? (
                    <InputSearch />
                ) : null}

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
