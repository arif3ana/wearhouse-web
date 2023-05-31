import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
export default function CreateCategory({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
    });

    const hendleOnChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.category"));
    };

    return (
        <>
            <Head title="Create Category" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5">
                    <form onSubmit={submit} className="px-6 py-6 lg:px-8">
                        <h3 className=" text-xl font-medium text-gray-900 dark:text-white">
                            Create New Category
                        </h3>
                        <hr />
                        <div className="flex flex-col gap-2 w-[400px] mt-2">
                            <div className="mt-2">
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={hendleOnChange}
                                    className="w-full block bg-white  border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
                                    placeholder="New Category"
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <p className="text-gray-500 mt-2">
                                Kategori tidak dapat di hapus atau di edit!!.
                                <br />
                                Pastikan kategori sudah benar dan sesuai dengan
                                kebutuhan.
                            </p>
                            <div className="flex flex-col items-end justify-end mt-5">
                                <PrimaryButton
                                    className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                                    disabled={processing}
                                >
                                    New Category
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </Authenticated>
        </>
    );
}
