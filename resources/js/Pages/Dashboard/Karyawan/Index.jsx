import Authenticated from "@/Layouts/Authenticated/Index";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { Head, Link, useForm } from "@inertiajs/react";
export default function Karyawan({ auth, employes, outEmployes }) {
    const { delete: destroy, put } = useForm();
    return (
        <>
            <Head title="Data-Karyawan" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5 mt-[70px]">
                    <h1 className="mb-4 text-2xl">Data Karyawan Gudang</h1>
                    <table className=" w-full table-auto">
                        <thead className="bg-[#F7F7F7] h-[40px]">
                            <tr>
                                <th>Image</th>
                                <th>Nama</th>
                                <th>Nik</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {employes.map((employe) => (
                                <tr
                                    key={employe.id}
                                    className="border-b-4 border-[#F7F7F7] h-[55px]"
                                >
                                    <td>kosong</td>
                                    <td>{employe.name}</td>
                                    <td>{employe.nik}</td>
                                    <td className="flex flex-row justify-center mt-2 gap-2">
                                        <Link
                                            href={route(
                                                "dashboard.karyawan.edit",
                                                employe.id
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
                                                        "dashboard.karyawan.destroy",
                                                        employe.id
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
                </div>

                <div className="bg-second p-5 mt-[70px]">
                    <h1 className="mb-4 text-2xl">Data Out Karyawan Gudang</h1>
                    <table className=" w-full table-auto">
                        <thead className="bg-[#F7F7F7] h-[40px]">
                            <tr>
                                <th>Image</th>
                                <th>Nama</th>
                                <th>Nik</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {outEmployes.map((karyawan) => (
                                <tr
                                    key={karyawan.id}
                                    className="border-b-4 border-[#F7F7F7] h-[55px]"
                                >
                                    <td>kosong</td>
                                    <td>{karyawan.name}</td>
                                    <td>{karyawan.nik}</td>
                                    <td className="flex flex-row justify-center mt-2 gap-2">
                                        <div
                                            onClick={() =>
                                                put(
                                                    route(
                                                        "dashboard.karyawan.restore",
                                                        karyawan.id
                                                    )
                                                )
                                            }
                                        >
                                            <DangerButton>Restore</DangerButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Authenticated>
        </>
    );
}
