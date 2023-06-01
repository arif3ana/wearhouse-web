import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
export default function BelanjaGudang({ belanja }) {
    return (
        <div className="bg-second p-5">
            <h3 className="mb-4 text-xl text-center">Data Belanja Gudang</h3>
            <table className=" w-full table-auto">
                <tbody className="text-center">
                    {belanja.map((barang) => (
                        <tr
                            key={barang.id}
                            className="border-b-4 border-[#F7F7F7] h-[55px]"
                        >
                            <td>{barang.nama_barang}</td>
                            <td className="flex flex-row justify-center mt-2">
                                <div className="bg-[#FCBEBE] w-max py-1 px-4 rounded-md">
                                    {barang.jumlah_barang}
                                </div>
                            </td>
                            <td>{barang.category.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex flex-col items-center justify-center mt-[53px]">
                <Link href={route("dashboard.belanja.index")}>
                    <PrimaryButton className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl">
                        View all
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
}
