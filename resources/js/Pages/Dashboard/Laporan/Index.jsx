import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import SecondaryButton from "@/Components/SecondaryButton";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect } from "react";
export default function Laporan({ auth, barangs, pengiriman }) {
    const stock = document.getElementById("stock-table");
    const kirim = document.getElementById("pengiriman-table");
    const PDF = () => {
        const doc = new jsPDF();
        const width = doc.internal.pageSize.getWidth();
        doc.text(`${auth.user.wearhouse_name}`, width / 2, 10, {
            align: "center",
        });
        doc.text(`Laporan Stok Barang`, width / 2, 20, {
            align: "center",
        });

        doc.text("Data Barang", 15, 40, {
            align: "left",
        });

        autoTable(doc, {
            html: stock,
            startY: 50,
        });

        doc.text("Data pengiriman / barang keluar", 15, 140, {
            align: "left",
        });

        autoTable(doc, {
            html: kirim,
            startY: 150,
        });
        const dataUrl = doc.output("datauristring");
        {
            <Head title="Laporan.pdf" />;
            window.document.write(`<iframe
                src=${dataUrl}
                frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen
            />`);
        }
    };

    return (
        <>
            <Head title="Laporan" />
            <Authenticated auth={auth}>
                <div className="bg-second p-5 mt-[20px]">
                    <h1 className="mb-4 text-2xl text-center">
                        Laporan Stok Barang
                    </h1>
                    <h3 className="mb-4 text-xl">Data Barang </h3>
                    <table className=" w-full table-auto" id="stock-table">
                        <thead className="bg-[#F7F7F7] h-[40px]">
                            <tr>
                                <th>Barang</th>
                                <th>Jumlah </th>
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
                                        <div
                                            className={`${
                                                barang.jumlah_barang === 0
                                                    ? "bg-[#FCBEBE]"
                                                    : "bg-[#BCE8D0]"
                                            } w-max py-1 px-5 rounded-md`}
                                        >
                                            {barang.jumlah_barang}
                                        </div>
                                    </td>
                                    <td>{barang.category.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3 className="mb-4 text-xl mt-20">
                        Data pengiriman / barang keluar
                    </h3>
                    <table className=" w-full table-auto" id="pengiriman-table">
                        <thead className="bg-[#F7F7F7] h-[40px]">
                            <tr>
                                <th>Barang</th>
                                <th>Jumlah</th>
                                <th>Dikirim oleh</th>
                                <th>Tanggal</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {pengiriman.map((barang) => (
                                <tr
                                    key={barang.id}
                                    className="border-b-4 border-[#F7F7F7] h-[55px]"
                                >
                                    <td>{barang.barang.nama_barang}</td>
                                    <td className="flex flex-row justify-center mt-2">
                                        <div
                                            className={`bg-[#BCE8D0] w-max py-1 px-5 rounded-md`}
                                        >
                                            {barang.jumlah_pengiriman}
                                        </div>
                                    </td>
                                    <td>{barang.karyawan.name}</td>
                                    <td>{barang.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-20 mb-20 mr-5">
                    <SecondaryButton
                        className="btnPdf border border-green-400  hover:bg-green-400"
                        onClick={PDF}
                    >
                        Convert to PDF
                    </SecondaryButton>
                </div>
            </Authenticated>
        </>
    );
}
