import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
export default function InputSearch() {
    const { data, setData, get } = useForm({
        search: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    // conditioning to check which route it is on
    const submit = (e) => {
        e.preventDefault();
        if (location.pathname == "/dashboard/karyawan") {
            return get(route("dashboard.karyawan.index"));
        }
        if (location.pathname == "/dashboard/barang") {
            return get(route("dashboard.barang.index"));
        }
        if (location.pathname == "/dashboard/pengiriman") {
            return get(route("dashboard.pengiriman.index"));
        }
    };

    return (
        <form onSubmit={submit}>
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <img src="/icons/search-normal.svg" alt="search svg icon" />
                </span>
                <TextInput
                    className=" placeholder:text-slate-400 block bg-white w-[300%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    name="search"
                    value={data.search}
                    onChange={handleOnChange}
                />
            </label>
        </form>
    );
}
