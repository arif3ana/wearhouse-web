import { Link } from "@inertiajs/react";

export default function Sidebar() {
    console.log();
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
                            <Link href={route("dashboard.index")}>
                                <div className={`p-2 pl-4 bg-[#B4CD93]`}>
                                    <p>Dashboard</p>
                                </div>
                            </Link>

                            <Link href={route("dashboard.karyawan.index")}>
                                <div className={`p-2 pl-4 mt-4 `}>
                                    <p>Data karyawan</p>
                                </div>
                            </Link>
                            <Link href={route("dashboard.barang.index")}>
                                <div className="p-2 pl-4 mt-4">
                                    <p>Data barang</p>
                                </div>
                            </Link>
                            <Link href={route("dashboard.pengiriman.index")}>
                                <div className="p-2 pl-4 mt-4">
                                    <p>pengiriman barang</p>
                                </div>
                            </Link>
                            <Link href={route("dashboard.belanja.index")}>
                                <div className="p-2 pl-4 mt-4">
                                    <p>Belanja gudang</p>
                                </div>
                            </Link>
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
                                    <img src="/icons/logout.svg" />
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
