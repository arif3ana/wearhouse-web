import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Create from "./Create";
import DataGudang from "./DataGudang";
import CreateCategory from "./CreateCategory";
import Modal from "@/Components/Modal";
export default function Dashboard({ auth, barangs, categories }) {
    return (
        <>
            <Head title="Dashboard" />
            <Authenticated auth={auth}>
                <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="col-span-2">
                        <Create categories={categories} />
                        <CreateCategory />
                    </div>
                    <div>
                        <h1>data belanja gudang</h1>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="col-span-2 ">
                        <DataGudang barangs={barangs} />
                    </div>
                    <div>
                        <h1>data karyawan gudang</h1>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
