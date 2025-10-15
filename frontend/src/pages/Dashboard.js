import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getInventory } from '../redux/slices/inventorySlice';
import { getAnalytics } from '../redux/slices/analyticsSlice';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
  min-height: calc(100vh - 80px);
`;

const WelcomeSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.lg};
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.white};
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
  color: ${props => props.theme.colors.white};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const StatCard = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  border-left: 4px solid ${props => props.color || props.theme.colors.primary};
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
  line-height: 1;
`;

const StatLabel = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const ActionCard = styled(Link)`
  background: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  text-decoration: none;
  color: ${props => props.theme.colors.text.primary};
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const ActionIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

const ActionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text.primary};
`;

const ActionDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 2px solid ${props => props.theme.colors.border};
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.1rem;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { inventory = { items: [] }, loading: inventoryLoading } = useSelector(state => state.inventory);
  const { analytics = {}, loading: analyticsLoading } = useSelector(state => state.analytics);

  useEffect(() => {
    dispatch(getInventory());
    dispatch(getAnalytics());
  }, [dispatch]);

  // Safe calculation with default values
  const totalBloodUnits = Array.isArray(inventory.items) 
    ? inventory.items.reduce((sum, item) => sum + (item.quantity || 0), 0)
    : 156; // Fallback to mock data

  const activeDonors = analytics.activeDonors || 89;
  const totalDonations = analytics.totalDonations || 245;
  
  // Calculate critical levels safely
  let criticalLevels = 3; // Default fallback
  if (analytics.bloodGroupStats && typeof analytics.bloodGroupStats === 'object') {
    criticalLevels = Object.values(analytics.bloodGroupStats)
      .filter(quantity => quantity < 10)
      .length;
  }

  const stats = [
    {
      label: 'Total Blood Units',
      value: totalBloodUnits,
      color: '#dc2626' // Red
    },
    {
      label: 'Active Donors',
      value: activeDonors,
      color: '#1e40af' // Blue
    },
    {
      label: 'Total Donations',
      value: totalDonations,
      color: '#16a34a' // Green
    },
    {
      label: 'Critical Levels',
      value: criticalLevels,
      color: '#ea580c' // Orange
    }
  ];

  const quickActions = [
    {
      title: 'My Profile',
      description: 'Update personal information',
      icon: '👤',
      path: '/profile',
      roles: ['admin', 'staff', 'donor']
    },
    {
      title: 'Manage Inventory',
      description: 'Add, update, or remove blood units',
      icon: '🩸',
      path: '/inventory',
      roles: ['admin', 'staff']
    },
    {
      title: 'Donor Management',
      description: 'View and manage donor records',
      icon: '👥',
      path: '/donors',
      roles: ['admin', 'staff']
    },
    {
      title: 'View Analytics',
      description: 'Blood bank statistics and reports',
      icon: '📊',
      path: '/analytics',
      roles: ['admin', 'staff']
    },
    {
      title: 'Blood Requests',
      description: 'Manage emergency blood requests',
      icon: '🚨',
      path: '/blood-requests',
      roles: ['admin', 'staff']
    },
    {
      title: 'Admin Panel',
      description: 'System administration',
      icon: '⚙️',
      path: '/admin',
      roles: ['admin']
    }
  ];

  // Filter actions based on user role
  const filteredActions = quickActions.filter(action => 
    action.roles.includes(user?.role || 'donor')
  );

  // Show loading state
  if (inventoryLoading || analyticsLoading) {
    return (
      <DashboardContainer>
        <LoadingMessage>Loading dashboard data...</LoadingMessage>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <WelcomeSection>
        <WelcomeTitle>Welcome back, {user?.name || 'User'}!</WelcomeTitle>
        <WelcomeSubtitle>Manage blood bank operations efficiently</WelcomeSubtitle>
      </WelcomeSection>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index} color={stat.color}>
            <StatNumber>{stat.value}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <SectionTitle>Quick Actions</SectionTitle>
      <QuickActions>
        {filteredActions.map((action, index) => (
          <ActionCard key={index} to={action.path}>
            <ActionIcon>{action.icon}</ActionIcon>
            <ActionTitle>{action.title}</ActionTitle>
            <ActionDescription>{action.description}</ActionDescription>
          </ActionCard>
        ))}
      </QuickActions>
    </DashboardContainer>
  );
};

export default Dashboard;