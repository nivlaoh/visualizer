import { Box, Breadcrumbs, Card, CardContent, Grid2 as Grid, Link, Typography } from "@mui/material";
import { Outlet, useLoaderData } from "react-router-dom";
import RuleGraph from "../components/RuleGraph";

export default function Rule() {
    const { rule } = useLoaderData();
    return (
        <Box sx={{ backgroundColor: '#eee', p: 3, minHeight: '100vh' }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
            </Breadcrumbs>
            <h1>Rule</h1>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card>
                        <CardContent>
                            <ul>
                                <li key={rule.id}>
                                    <h2>{rule.name}</h2>
                                    <p>{rule.description}</p>
                                </li>
                            </ul>
                            <RuleGraph rule={rule} />
                            <Outlet />        
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}