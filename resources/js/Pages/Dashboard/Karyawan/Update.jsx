import Authenticated from "@/Layouts/Authenticated/Index";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
export default function Update({ auth, employes }) {
    const { data, setData, processing, errors } = useForm({
        ...employes,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    if (data.image === employes.image) {
        delete data.image;
    }

    const submit = (e) => {
        e.preventDefault();

        router.post(route("dashboard.karyawan.update", employes.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <>
            <Head title="Update-karyawan" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5 mt-[70px] w-full">
                    <form onSubmit={submit}>
                        <h1 className="mb-4 text-2xl">Edit</h1>
                        <div className="flex flex-col gap-3 w-[400px]">
                            <div>
                                <img
                                    src={`/storage/${employes.image}`}
                                    className="w-40 mb-3"
                                />

                                <InputLabel htmlFor="image" value="Poto" />

                                <TextInput
                                    id="image"
                                    name="image"
                                    type="file"
                                    className="mt-1 block w-full "
                                    isError={errors.name}
                                    onChange={handleOnChange}
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel htmlFor="name" value="Nama" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    defaultValue={employes.name}
                                    className="mt-1 block w-full "
                                    autoComplete="name"
                                    isFocused={true}
                                    isError={errors.name}
                                    onChange={handleOnChange}
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel htmlFor="nik" value="NIK" />

                                <TextInput
                                    id="nik"
                                    name="nik"
                                    type="number"
                                    defaultValue={employes.nik}
                                    className="mt-1 block w-full "
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
                                    Edit data
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </Authenticated>
        </>
    );
}
