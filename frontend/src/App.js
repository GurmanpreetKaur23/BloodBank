import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider, useTheme } from './contexts/ThemeContext';
import { store } from './redux/store';
import { themes } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Layout/Header';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import ThemeToggle from './components/ThemeToggle';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Donors from './pages/Donors';
import Analytics from './pages/Analytics';
import AdminPanel from './pages/AdminPanel';
import Profile from './pages/Profile';
import BloodRequests from './pages/BloodRequests';
import Emergency from './pages/Emergency';

// AppContent component that uses the theme
function AppContent() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Header />
          <ThemeToggle />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/emergency" element={<Emergency />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/inventory" element={
                <ProtectedRoute requiredRoles={['admin', 'staff']}>
                  <Inventory />
                </ProtectedRoute>
              } />
              
              <Route path="/donors" element={
                <ProtectedRoute requiredRoles={['admin', 'staff']}>
                  <Donors />
                </ProtectedRoute>
              } />
              
              <Route path="/analytics" element={
                <ProtectedRoute requiredRoles={['admin', 'staff']}>
                  <Analytics />
                </ProtectedRoute>
              } />
              
              <Route path="/blood-requests" element={
                <ProtectedRoute requiredRoles={['admin', 'staff']}>
                  <BloodRequests />
                </ProtectedRoute>
              } />
              
              <Route path="/admin" element={
                <ProtectedRoute requiredRoles={['admin']}>
                  <AdminPanel />
                </ProtectedRoute>
              } />
              
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              {/* Default redirect */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              {/* 404 page */}
              <Route path="*" element={
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

// Main App component
function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <AppContent />
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;