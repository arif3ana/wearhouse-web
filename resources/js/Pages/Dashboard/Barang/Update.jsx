import Authenticated from "@/Layouts/Authenticated/Index";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm, router } from "@inertiajs/react";
export default function Update({ auth, barangs, categories }) {
    const { data, setData, processing, errors } = useForm({
        ...barangs,
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        router.post(route("dashboard.barang.update", barangs.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <>
            <Head title="Update-Barang" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5 mt-[70px] w-max">
                    <form onSubmit={submit}>
                        <h1 className="mb-4 text-2xl">Edit</h1>
                        <InputLabel htmlFor="category_id" value="Kategori" />
                        <select
                            id="category_id"
                            name="category_id"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lx"
                            onChange={handleOnChange}
                            defaultValue={barangs.category_id}
                            required
                        >
                            {categories.map((category) => {
                                if (barangs.category_id == category.id) {
                                    return (
                                        <option selected value={category.id}>
                                            {category.name}
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            value={category.id}
                                            key={`${category.id}`}
                                        >
                                            {category.name}
                                        </option>
                                    );
                                }
                            })}
                        </select>
                        <div className="flex flex-row gap-2 mt-2">
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Nama Barang"
                                />

                                <TextInput
                                    id="name"
                                    name="nama_barang"
                                    defaultValue={barangs.nama_barang}
                                    className="mt-1 block w-full "
                                    autoComplete="name"
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
                                />

                                <TextInput
                                    id="jumlah"
                                    name="jumlah_barang"
                                    type="number"
                                    defaultValue={barangs.jumlah_barang}
                                    className="mt-1 block w-full "
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
                                Edit data
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Authenticated>
        </>
    );
}
