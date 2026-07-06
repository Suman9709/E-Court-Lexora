import { Navigate, Route, Routes } from "react-router"
import { Login } from "../features/auth/Login"
import { Register } from "../features/auth/Register"
import { ClientDashboard } from "../features/client/ClientDashboard"
import { Cases } from "../features/cases/Cases"




export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />


            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/cases" element={<Cases />} />
        </Routes>
    )
}