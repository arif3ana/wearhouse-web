import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Create from "./Create";
import DataGudang from "./DataGudang";
import BelanjaGudang from "./BelanjaGudang";
import KaryawanGudang from "./Karyawan";
export default function Dashboard({
    auth,
    barangs,
    categories,
    belanja,
    karyawan,
}) {
    return (
        <>
            <Head title="Dashboard" />
            <Authenticated auth={auth}>
                <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="col-span-2">
                        <Create categories={categories} />
                    </div>
                    <div>
                        <BelanjaGudang belanja={belanja} />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="col-span-2 ">
                        <DataGudang barangs={barangs} />
                    </div>
                    <div>
                        <KaryawanGudang karyawan={karyawan} />
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
