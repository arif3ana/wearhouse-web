import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
export default function Authenticated({ auth, children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Sidebar */}
                <Sidebar />
                {/* Topbar */}
                <Topbar name={auth} />
                {/* Content */}
                <main className="ml-[200px] px-[50px]">{children}</main>
            </div>
            {/* responsive design */}
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black justify-center">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above{" "}
                    <br />
                    (Maaf, halaman ini hanya didukung pada layar 1024px atau
                    lebih tinggi)
                </div>
            </div>
        </>
    );
}
