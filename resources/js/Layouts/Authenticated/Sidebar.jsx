import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <>
            <aside className="fixed z-10 w-[240px] h-full bg-first shadow-2xl shadow-black  rounded-r-[60px]">
                <div className="flex flex-col p-[30px] overflow-y-auto h-full">
                    <a
                        href="/"
                        className="mt-7 mb-10 font-manrope font-bold text-[24px] text-center title-web "
                    >
                        Wearhouses
                    </a>
                    <div className="links flex flex-col mt-[80px] h-full gap-[50px]">
                        <div className="text-left">
                            <div className="p-2 pl-4 bg-[#B4CD93]">
                                <a href="#">Dashboard</a>
                            </div>
                            <div className="p-2 pl-4 mt-4">
                                <a href="#">Data karyawan</a>
                            </div>
                            <div className="p-2 pl-4 mt-4">
                                <a href="#">Data barang</a>
                            </div>
                            <div className="p-2 pl-4 mt-4">
                                <a href="#">pengiriman barang</a>
                            </div>
                            <div className="p-2 pl-4 mt-4">
                                <a href="#">Belanja gudang</a>
                            </div>
                            <div className="p-2 pl-4 mt-4">
                                <a href="#">Laporann</a>
                            </div>
                        </div>

                        <div className="flex h-full  p-2 pl-4 items-end">
                            <div className="text-gray-1 side-link mb-4">
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="flex flex-col-revers gap-1"
                                >
                                    <img src="./icons/logout.svg" />
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
