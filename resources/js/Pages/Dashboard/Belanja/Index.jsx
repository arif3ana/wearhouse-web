import Authenticated from "@/Layouts/Authenticated/Index";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { Head, useForm, Link } from "@inertiajs/react";
export default function Belanja({ auth, barangs }) {
    const { delete: destroy } = useForm();

    const zero = barangs.filter((barang) => {
        return barang["jumlah_barang"] === 0;
    });

    return (
        <>
            <Head title="Data-Barang" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5 mt-[40px]">
                    <h1 className="mb-4 text-2xl">Data Belanja Gudang</h1>
                    <table className=" w-full table-auto">
                        <thead className="bg-[#F7F7F7] h-[40px]">
                            <tr>
                                <th>Barang</th>
                                <th>Jumlah / unit</th>
                                <th>Kategori</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {zero.map((barang) => (
                                <tr
                                    key={barang.id}
                                    className="border-b-4 border-[#F7F7F7] h-[55px]"
                                >
                                    <td>{barang.nama_barang}</td>
                                    <td className="flex flex-row justify-center mt-2">
                                        <div className="bg-[#FCBEBE] w-max py-1 px-5 rounded-md">
                                            {barang.jumlah_barang}
                                        </div>
                                    </td>
                                    <td>{barang.category.name}</td>
                                    <td className="flex flex-row justify-center mt-2 gap-2">
                                        <Link
                                            href={route(
                                                "dashboard.barang.edit",
                                                barang.id
                                            )}
                                        >
                                            <SecondaryButton>
                                                Edit
                                            </SecondaryButton>
                                        </Link>

                                        <div
                                            onClick={() => {
                                                destroy(
                                                    route(
                                                        "dashboard.barang.destroy",
                                                        barang.id
                                                    )
                                                );
                                            }}
                                        >
                                            <DangerButton>Delete</DangerButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-gray-400 mt-2">
                        Jumlah belanja barang: {zero.length}
                    </p>
                </div>
            </Authenticated>
        </>
    );
}
