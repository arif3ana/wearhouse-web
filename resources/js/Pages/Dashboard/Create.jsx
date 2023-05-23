import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: "",
        nama_barang: "",
        jumlah_barang: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.index"));
    };

    return (
        <>
            <div className="bg-second p-5">
                <form onSubmit={submit}>
                    <h1 className="mb-4 text-2xl">Tambah barang</h1>
                    <div>
                        <InputLabel htmlFor="category_id" value="Category" />
                        <select
                            id="category_id"
                            name="category_id"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lx"
                            onChange={handleOnChange}
                            value={data.category_id}
                            required
                        >
                            <option selected>Category...</option>
                            {categories.map((category) => (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <InputLabel
                                htmlFor="name"
                                value="Nama Barang"
                                className="mt-4"
                            />

                            <TextInput
                                id="name"
                                name="nama_barang"
                                value={data.nama_barang}
                                className="mt-1 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
                                autoComplete="nama-barang"
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.nama_barang}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="jumlah"
                                value="Jumlah Barang"
                                className="mt-4"
                            />

                            <TextInput
                                id="jumlah"
                                name="jumlah_barang"
                                value={data.jumlah_barang}
                                className="mt-1 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
                                type="number"
                                autoComplete="jumlah-barang"
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.jumlah_barang}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-end justify-end mt-5">
                        <PrimaryButton
                            className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                            disabled={processing}
                        >
                            Simpan Data
                        </PrimaryButton>
                    </div>
                </form>
                <div className="flex flex-col items-end justify-end mt-5">
                    <PrimaryButton
                        data-modal-target="createCategory-modal"
                        data-modal-toggle="createCategory-modal"
                        type="button"
                        className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                    >
                        New Category
                    </PrimaryButton>
                </div>
            </div>
        </>
    );
}
