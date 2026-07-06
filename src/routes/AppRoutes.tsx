import { Navigate, Route, Routes, useParams } from "react-router"
import { Login } from "../features/auth/Login"
import { Register } from "../features/auth/Register"
import { ClientDashboard } from "../features/client/ClientDashboard"
import { Cases } from "../features/cases/Cases"
import { DashboardLayout } from "../components/layout/DashboardLayout"
import { LandingPage } from "../features/LandingPage"
import { StaffDashboard } from "../features/staff/StaffDashboard"
import { AdminDashboard } from "../features/Admin/AdminDashboard"
import { ClientProfile } from "../features/client/ClientProfile"
import { StaffProfile } from "../features/staff/StaffProfile"
import { AdminProfile } from "../features/Admin/AdminProfile"
import { ModulePage } from "../features/ModulePage"

const RoleDashboard = () => {
    const { role } = useParams()

    if (role === "staff") {
        return <StaffDashboard />
    }

    if (role === "admin") {
        return <AdminDashboard />
    }

    return <ClientDashboard />
}

const RoleProfile = () => {
    const { role } = useParams()

    if (role === "staff") {
        return <StaffProfile />
    }

    if (role === "admin") {
        return <AdminProfile />
    }

    return <ClientProfile />
}




export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />


            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/:role" element={<DashboardLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<RoleDashboard />} />
                <Route path="cases" element={<Cases />} />
                <Route path="profile" element={<RoleProfile />} />
                <Route
                    path="clients"
                    element={
                        <ModulePage
                            eyebrow="Client management"
                            title="Clients"
                            description="Store client profiles, contact information, linked cases, communication history, private notes, and shared documents."
                        />
                    }
                />
                <Route
                    path="hearings"
                    element={
                        <ModulePage
                            eyebrow="Calendar"
                            title="Hearings"
                            description="Track hearing dates, filing deadlines, client meetings, reminders, and daily court schedules."
                        />
                    }
                />
                <Route
                    path="documents"
                    element={
                        <ModulePage
                            eyebrow="Document management"
                            title="Documents"
                            description="Upload, preview, organize, and search case files, petitions, notices, orders, and evidence."
                        />
                    }
                />
                <Route
                    path="tasks"
                    element={
                        <ModulePage
                            eyebrow="Task management"
                            title="Tasks"
                            description="Assign work to staff and junior lawyers with status, priority, due dates, and activity history."
                        />
                    }
                />
                <Route
                    path="invoices"
                    element={
                        <ModulePage
                            eyebrow="Billing"
                            title="Invoices"
                            description="Show consultation fees, court expenses, invoice status, receipts, and pending payments."
                        />
                    }
                />
                <Route
                    path="messages"
                    element={
                        <ModulePage
                            eyebrow="Client communication"
                            title="Messages"
                            description="Keep case updates, client communication, and shared notes in one organized workspace."
                        />
                    }
                />
                <Route
                    path="staff"
                    element={
                        <ModulePage
                            eyebrow="Staff management"
                            title="Staff"
                            description="Manage roles, permissions, assigned cases, activity logs, and team workload."
                        />
                    }
                />
                <Route
                    path="billing"
                    element={
                        <ModulePage
                            eyebrow="Billing and payments"
                            title="Billing"
                            description="Create invoices, track payment status, record dues, and prepare for Razorpay integration."
                        />
                    }
                />
                <Route
                    path="ai"
                    element={
                        <ModulePage
                            eyebrow="AI assistant"
                            title="AI Assistant"
                            description="Prepare case summaries, document question-answering, timeline extraction, and hearing notes."
                        />
                    }
                />
                <Route
                    path="settings"
                    element={
                        <ModulePage
                            eyebrow="Workspace settings"
                            title="Settings"
                            description="Configure firm details, subscriptions, permissions, security, and notification preferences."
                        />
                    }
                />
            </Route>
        </Routes>
    )
}
