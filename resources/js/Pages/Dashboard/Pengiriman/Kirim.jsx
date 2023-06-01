import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Kirim({ barangs, karyawans }) {
    const { data, setData, post, processing, errors } = useForm({
        barang_id: "",
        jumlah_pengiriman: "",
        karyawan_id: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.pengiriman.index"));
    };
    return (
        <>
            <form onSubmit={submit}>
                <h1 className="mb-4 text-2xl">Kirim Barang</h1>
                <hr />
                <div className="flex flex-col gap-5 w-[400px] mt-5">
                    <div>
                        <select
                            id="barang_id"
                            name="barang_id"
                            className=" placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lx w-full"
                            value={data.barang_id}
                            onChange={handleOnChange}
                            required
                        >
                            <option selected defaultValue="Barang...">
                                Barang...
                            </option>
                            {barangs.map((barang) => (
                                <option value={barang.id} key={barang.id}>
                                    {barang.nama_barang}
                                </option>
                            ))}
                        </select>
                        <InputError
                            message={errors.barang_id}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <TextInput
                            id="jumlah_pengiriman"
                            name="jumlah_pengiriman"
                            type="number"
                            value={data.jumlah_pengiriman}
                            className=" placeholder:text-black block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lx w-full"
                            onChange={handleOnChange}
                            placeholder="Jumlah Pengiriman"
                            autoComplete="jumlah"
                            required
                        />

                        <InputError
                            message={errors.jumlah_pengiriman}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <select
                            id="karyawan_id"
                            name="karyawan_id"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lx w-full"
                            value={data.karyawan_id}
                            onChange={handleOnChange}
                            required
                        >
                            <option selected>Di Kirim Oleh...</option>
                            {karyawans.map((employe) => (
                                <option value={employe.id} key={employe.id}>
                                    {employe.name}
                                </option>
                            ))}
                        </select>
                        <InputError
                            message={errors.karyawan_id}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-col items-end justify-end mt-5">
                        <PrimaryButton
                            disabled={processing}
                            className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                        >
                            Kirim Barang
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </>
    );
}
