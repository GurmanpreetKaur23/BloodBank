import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
  min-height: calc(100vh - 80px);
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-size: 2rem;
`;

const ProfileCard = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  border: 1px solid ${props => props.theme.colors.border};
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.lg};
  border-bottom: 2px solid ${props => props.theme.colors.border};
`;

const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${props => props.theme.colors.white};
  margin-right: ${props => props.theme.spacing.lg};
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h2`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: 1.5rem;
`;

const ProfileRole = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 500;
  margin: 0;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const ProfileField = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  
  label {
    display: block;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: ${props => props.theme.spacing.xs};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  span {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1rem;
    display: block;
    padding: ${props => props.theme.spacing.sm};
    background: ${props => props.theme.colors.surfaceAlt};
    border-radius: ${props => props.theme.borderRadius.md};
    border: 1px solid ${props => props.theme.colors.border};
  }
`;

const Profile = () => {
  const { user } = useSelector(state => state.auth);

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U';
  };

  return (
    <ProfileContainer>
      <Title>My Profile</Title>
      <ProfileCard>
        <ProfileHeader>
          <ProfileAvatar>
            {getInitials(user?.name)}
          </ProfileAvatar>
          <ProfileInfo>
            <ProfileName>{user?.name || 'Not provided'}</ProfileName>
            <ProfileRole>{user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'User'}</ProfileRole>
          </ProfileInfo>
        </ProfileHeader>

        <ProfileGrid>
          <ProfileField>
            <label>Full Name</label>
            <span>{user?.name || 'Not provided'}</span>
          </ProfileField>
          
          <ProfileField>
            <label>Email Address</label>
            <span>{user?.email || 'Not provided'}</span>
          </ProfileField>
          
          <ProfileField>
            <label>Role</label>
            <span>{user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Not provided'}</span>
          </ProfileField>
          
          <ProfileField>
            <label>Blood Group</label>
            <span>{user?.bloodGroup || 'Not provided'}</span>
          </ProfileField>
          
          <ProfileField>
            <label>Contact Number</label>
            <span>{user?.contact || 'Not provided'}</span>
          </ProfileField>
          
          <ProfileField>
            <label>Member Since</label>
            <span>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Not available'}</span>
          </ProfileField>
        </ProfileGrid>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;