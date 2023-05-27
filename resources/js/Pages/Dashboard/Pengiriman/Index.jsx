import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Kirim from "./Kirim";
export default function Pengiriman({ auth, karyawans, barangs, pengirimans }) {
    return (
        <>
            <Head title="Pengiriman" />
            <Authenticated auth={auth}>
                <div className="bg-second w-full p-5 mt-[30px]">
                    <Kirim karyawans={karyawans} barangs={barangs} />
                </div>
                <div className="bg-second p-5 mt-[70px]">
                    <h1 className="mb-4 text-2xl">Data pengiriman barang</h1>
                    <table className=" w-full table-auto mt-2">
                        <thead className="bg-[#F7F7F7] h-[40px]">
                            <tr>
                                <th>Barang</th>
                                <th>Jumlah pengiriman</th>
                                <th>Dikirim Oleh</th>
                                <th>Tanggal</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {pengirimans.map((sand) => (
                                <tr
                                    key={`${sand.id}-${sand.user_id}`}
                                    className="border-b-4 border-[#F7F7F7] h-[55px]"
                                >
                                    <td>{sand.barang.nama_barang}</td>
                                    <td className="flex flex-row justify-center mt-2">
                                        <div className="bg-[#BCE8D0] w-max py-1 px-5 rounded-md">
                                            {sand.jumlah_pengiriman}
                                        </div>
                                    </td>
                                    <td>{sand.karyawan.name}</td>
                                    <td>{sand.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Authenticated>
        </>
    );
}
