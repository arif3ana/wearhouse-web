import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
export default function Kirim({ employes }) {
    const { data, setData, post, processing, errors } = useForm({
        barang_id: "",
        karyawan_id: "",
        jumlah_pengiriman: "",
    });

    const hendleOnChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.barang.sand")); //use in conttroller Pengiriman bismillah bisa
    };
    return (
        <>
            <div
                id={`kirim-modal`}
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative w-full max-w-md max-h-full">
                    {/* <!-- Modal header --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex flex-row-reverse w-full px-4 py-3">
                            <button
                                type="button"
                                className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide={`kirim-modal`}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <h3 className=" text-xl font-medium text-gray-900 dark:text-white">
                                Data Pengiriman Barang
                            </h3>
                        </div>
                        <hr />
                        {/* Modal Content */}
                        <div>
                            <form
                                onSubmit={submit}
                                className="px-6 py-6 lg:px-8"
                            >
                                <div className="flex flex-row-reverse gap-2 justify-end items-end">
                                    <div>
                                        <TextInput
                                            type="number"
                                            name="jumlah_pengiriman"
                                            value={data.jumlah_pengiriman}
                                            onChange={hendleOnChange}
                                            className=" placeholder:text-black block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lx"
                                            placeholder="jumlah / unit"
                                            required
                                        />

                                        <InputError
                                            message={errors.jumlah_pengiriman}
                                            className="mt-2"
                                        />
                                    </div>
                                    <select
                                        id="karyawan_id"
                                        name="karyawan_id"
                                        className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lx"
                                        onChange={hendleOnChange}
                                        value={data.karyawan_id}
                                        required
                                    >
                                        <option selected>
                                            di Kirim Oleh...
                                        </option>
                                        {employes.map((employe) => (
                                            <option
                                                value={employe.id}
                                                key={employe.id}
                                            >
                                                {employe.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col items-end justify-end mt-5">
                                    <SecondaryButton
                                        className="border border-green-400 hover:bg-green-400"
                                        disabled={processing}
                                    >
                                        Kirim
                                    </SecondaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
