import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
export default function KaryawanGudang({ karyawan }) {
    return (
        <div className="bg-second p-5">
            <h3 className="mb-4 text-xl text-center">Data Karyawan Gudang</h3>
            <table className=" w-full table-auto">
                <tbody className="text-center">
                    {karyawan.map((employe) => (
                        <tr
                            key={employe.id}
                            className="border-b-4 border-[#F7F7F7] h-[55px]"
                        >
                            <td>image</td>
                            <td>{employe.name}</td>
                            <td>{employe.nik}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex flex-col items-center justify-center mt-[53px]">
                <Link href={route("dashboard.karyawan.index")}>
                    <PrimaryButton className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl">
                        View all
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
}
