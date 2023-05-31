import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index";
import { useForm, Head } from "@inertiajs/react";
export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        image: "",
        name: "",
        nik: "",
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.karyawan.store"));
    };

    return (
        <>
            <Head title="Tambah-Karyawan" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5">
                    <form onSubmit={submit}>
                        <h1 className="mb-4 text-2xl">Tambah Karyawan Baru</h1>
                        <div className="flex flex-col gap-2 w-[400px]">
                            <div>
                                <InputLabel
                                    htmlFor="image"
                                    value="Poto"
                                    className="mt-4"
                                />

                                <TextInput
                                    id="image"
                                    name="image"
                                    type="file"
                                    className="mt-1 bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-full"
                                    onChange={handleOnChange}
                                    required
                                />
                                <p className="text-gray-400">
                                    Di rekomendasikan untuk ukuran gambar 60 x
                                    60
                                </p>

                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Nama"
                                    className="mt-4"
                                />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-full"
                                    autoComplete="nama-karyawan"
                                    onChange={handleOnChange}
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="nik"
                                    value="Nik"
                                    className="mt-4"
                                />

                                <TextInput
                                    id="nik"
                                    name="nik"
                                    value={data.nik}
                                    className="mt-1 block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-full"
                                    onChange={handleOnChange}
                                    required
                                />

                                <InputError
                                    message={errors.nik}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex flex-col items-end justify-end mt-5">
                                <PrimaryButton
                                    className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                                    disabled={processing}
                                >
                                    Simpan Data
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </Authenticated>
        </>
    );
}
