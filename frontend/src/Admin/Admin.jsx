import { Box, List, ListItem, useTheme, ListItemButton, ListItemIcon, Toolbar, useMediaQuery, CssBaseline, Drawer, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './components/Dashboard';
import CreateProductForm from './components/CreateProductForm';
import OrdersTable from './components/OrdersTable';
import ProductsTable from './components/ProductsTable';
import CustomersTable from './components/CustomersTable';

const menu = [
    {
        name: 'Dashboard',
        path: '/admin',
        icon: <DashboardIcon />
    },
    {
        name: 'Products',
        path: '/admin/products',
        icon: <InventoryIcon />
    },
    {
        name: 'Customers',
        path: '/customers',
        icon: <PeopleIcon />
    },
    {
        name: 'Orders',
        path: '/admin/orders',
        icon: <StorefrontIcon />
    },
    {
        name: 'AddProduct',
        path: '/admin/product/create',
        icon: <AddCardIcon />
    },

]


const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: "100%"
        }}
        >
            <List className="mt-4">
                {menu.map((item, index) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div className="flex h-screen">
            <CssBaseline />

            <div
                className={`bg-gray-800 text-white ${isLargeScreen ? 'w-64' : 'w-16'} overflow-x-hidden transition-all duration-300 ease-in-out`}
            >
                {drawer}
            </div>

            <div className="flex-1 p-4 overflow-x-hidden">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/product/create" element={<CreateProductForm />} />
                    <Route path="/orders" element={<OrdersTable />} />
                    <Route path="/products" element={<ProductsTable />} />
                    <Route path="/customers" element={<CustomersTable />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
