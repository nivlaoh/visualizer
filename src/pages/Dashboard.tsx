import { Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Dashboard() {
    const { rules } = useLoaderData<{ rules: any }>();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Sidebar rules={rules} />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}