import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        // remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            // event.target.type === "checkbox"
            //     ? event.target.checked :
            event.target.value
        );
    };

    const showPassword = (e) => {
        const pswr = document.querySelector("#password");
        e.target.checked
            ? pswr.setAttribute("type", "text")
            : pswr.setAttribute("type", "password");
    };
    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Sign in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <h1 className="text-center text-2xl mb-5">Sign in</h1>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleOnChange}
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
                        autoComplete="current-password"
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-2">
                    <label className="flex items-center">
                        <Checkbox
                            // name="showPassword"
                            // value={data.remember}
                            onChange={showPassword}
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Show password
                        </span>
                    </label>
                </div>

                <div className="flex flex-col items-center justify-center mt-4">
                    <PrimaryButton
                        className=" w-full justify-center mb-5 bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                        disabled={processing}
                    >
                        Sign in
                    </PrimaryButton>
                    <div className="flex flex-row gap-7">
                        {/* {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )} */}
                        {/* Not needed yet */}
                        <Link
                            href={route("register")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            don't have account yet?
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
