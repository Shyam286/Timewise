import { Dashboard } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage/NotFound'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route path="admin/*" element={<NotFoundPage/>} />
        </Routes>
    </div>
  )
}

export default AdminRoutes