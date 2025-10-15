import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../redux/slices/authSlice';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.sm};
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: background-color 0.2s;
  font-weight: 500;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Button = styled.button`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  border: none;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.gray[100]};
    transform: translateY(-1px);
  }
`;

const UserInfo = styled.span`
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          🩸 LifeFlow Blood Bank
        </Logo>
        
        <NavLinks>
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              {user?.role === 'admin' && (
                <NavLink to="/admin">Admin Panel</NavLink>
              )}
              {['admin', 'staff'].includes(user?.role) && (
                <>
                  <NavLink to="/inventory">Inventory</NavLink>
                  <NavLink to="/donors">Donors</NavLink>
                  <NavLink to="/analytics">Analytics</NavLink>
                </>
              )}
              <UserInfo>Welcome, {user?.name}</UserInfo>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;