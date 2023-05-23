import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";

export default function CreateCategory() {
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
            <div
                id="createCategory-modal"
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
                                data-modal-hide="createCategory-modal"
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
                                Create New Category
                            </h3>
                        </div>
                        <hr />
                        {/* Modal Content */}
                        <div>
                            <form
                                onSubmit={submit}
                                className="px-6 py-6 lg:px-8"
                            >
                                <div className="mb-2">
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

                                <div className="flex flex-col items-end justify-end mt-5">
                                    <PrimaryButton
                                        className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl"
                                        disabled={processing}
                                    >
                                        New Category
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
