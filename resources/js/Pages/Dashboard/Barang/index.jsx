import Authenticated from "@/Layouts/Authenticated/Index";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { Head, Link, useForm } from "@inertiajs/react";
import Kirim from "./Kirim";

export default function Barang({ auth, barangs, employes }) {
    const { delete: destroy } = useForm();
    return (
        <>
            <Head title="Data-Barang" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5 mt-[70px]">
                    <h1 className="mb-4 text-2xl">Data Barang Gudang</h1>
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
                            {barangs.map((barang) => (
                                <tr
                                    key={barang.id}
                                    className="border-b-4 border-[#F7F7F7] h-[55px]"
                                >
                                    <td>{barang.nama_barang}</td>
                                    <td className="flex flex-row justify-center mt-2">
                                        <div className="bg-[#BCE8D0] w-max py-1 px-5 rounded-md">
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

                                        <SecondaryButton
                                            className="border border-green-400 hover:bg-green-400"
                                            data-modal-target={`kirim-modal`}
                                            data-modal-toggle={`kirim-modal`}
                                        >
                                            Kirim
                                        </SecondaryButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Kirim employes={employes} />
                </div>
            </Authenticated>
        </>
    );
}
