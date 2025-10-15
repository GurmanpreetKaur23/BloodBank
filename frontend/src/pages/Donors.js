import React from 'react';
import styled from 'styled-components';

const DonorsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ComingSoon = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  
  h2 {
    color: ${props => props.theme.colors.gray[600]};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
  
  p {
    color: ${props => props.theme.colors.gray[500]};
  }
`;

const Donors = () => {
  return (
    <DonorsContainer>
      <Title>Donor Management</Title>
      <ComingSoon>
        <h2>Donor Management</h2>
        <p>This feature is coming soon. You'll be able to manage donor records here.</p>
      </ComingSoon>
    </DonorsContainer>
  );
};

export default Donors;