import PrimaryButton from "@/Components/PrimaryButton";
export default function DataGudang({ barangs }) {
    return (
        <div className="bg-second p-5">
            <h1 className="mb-4 text-2xl">Data Barang Gudang</h1>
            <table className=" w-full table-auto">
                <thead className="bg-[#F7F7F7] h-[40px]">
                    <tr>
                        <th>Nama</th>
                        <th>Jumlah / Unit</th>
                        <th>Kategori</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex flex-col items-end justify-end mt-5">
                <PrimaryButton className=" justify-center bg-gradient-to-r from-[#B4CD93] to-[#427A5B] hover:shadow-xl">
                    View all
                </PrimaryButton>
            </div>
        </div>
    );
}
