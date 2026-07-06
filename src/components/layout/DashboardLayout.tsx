import { Navigate, Outlet, useParams } from "react-router"
import { Navbar } from "../common/Navbar"
import { Sidebar, type UserRole } from "../common/Sidebar"

const validRoles: UserRole[] = ["client", "staff", "admin"]

export const DashboardLayout = () => {
    const { role } = useParams()

    if (!validRoles.includes(role as UserRole)) {
        return <Navigate to="/login" replace />
    }

    const currentRole = role as UserRole

    return (
        <div className="min-h-screen bg-neutral-50">
            <Sidebar role={currentRole} />
            <div className="ml-64 min-h-screen">
                <Navbar role={currentRole} />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
