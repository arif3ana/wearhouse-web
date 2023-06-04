import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        wearhouse_name: "",
        email: "",
        password: "",
    });

    // event for chekbox use to show password
    const showPassword = (e) => {
        const pswr = document.querySelector("#password");
        e.target.checked
            ? pswr.setAttribute("type", "text")
            : pswr.setAttribute("type", "password");
    };

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Sign up" />

            <form onSubmit={submit}>
                <h1 className="text-center text-2xl mb-5">Sign up</h1>
                <div>
                    <InputLabel htmlFor="name" value="Nama" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full "
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="namaGudang" value="Nama Gudang" />

                    <TextInput
                        id="namaGudang"
                        name="wearhouse_name"
                        value={data.wearhouse_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError
                        message={errors.wearhouse_name}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-2">
                    <label className="flex items-center">
                        <Checkbox onChange={showPassword} />
                        <span className="ml-2 text-sm text-gray-600">
                            Show password
                        </span>
                    </label>
                </div>

                <div className="flex flex-col items-center justify-center mt-5">
                    <PrimaryButton
                        className=" w-full justify-center mb-5 bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                        disabled={processing}
                    >
                        Sign up
                    </PrimaryButton>
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
