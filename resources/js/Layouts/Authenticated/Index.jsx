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
        </>
    );
}
