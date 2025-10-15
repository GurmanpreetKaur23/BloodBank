import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BloodRequestsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const RequestGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing.lg};
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const RequestCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.2s;

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const UrgencyBadge = styled.span`
  display: inline-block;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.small.fontSize};
  font-weight: 600;
  text-transform: uppercase;
  
  ${props => {
    switch (props.urgency) {
      case 'critical':
        return `
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        `;
      case 'high':
        return `
          background: #fffbeb;
          color: #d97706;
          border: 1px solid #fed7aa;
        `;
      case 'medium':
        return `
          background: #f0f9ff;
          color: #0369a1;
          border: 1px solid #bae6fd;
        `;
      default:
        return `
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
        `;
    }
  }}
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.small.fontSize};
  font-weight: 600;
  
  ${props => {
    switch (props.status) {
      case 'completed':
        return `
          background: #f0fdf4;
          color: #16a34a;
        `;
      case 'processing':
        return `
          background: #fffbeb;
          color: #d97706;
        `;
      default:
        return `
          background: #fef2f2;
          color: #dc2626;
        `;
    }
  }}
`;

const BloodRequests = () => {
  const [requests, setRequests] = useState([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockRequests = [
      {
        id: 1,
        patientName: 'John Doe',
        bloodGroup: 'A+',
        units: 2,
        hospital: 'City General Hospital',
        urgency: 'critical',
        status: 'pending',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        patientName: 'Jane Smith',
        bloodGroup: 'O-',
        units: 1,
        hospital: 'Memorial Hospital',
        urgency: 'high',
        status: 'processing',
        createdAt: new Date().toISOString()
      }
    ];
    setRequests(mockRequests);
  }, []);

  return (
    <BloodRequestsContainer>
      <Title>Blood Requests</Title>
      <RequestGrid>
        {requests.map(request => (
          <RequestCard key={request.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, color: 'inherit' }}>{request.patientName}</h3>
              <UrgencyBadge urgency={request.urgency}>
                {request.urgency}
              </UrgencyBadge>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <p><strong>Blood Group:</strong> {request.bloodGroup}</p>
              <p><strong>Units Required:</strong> {request.units}</p>
              <p><strong>Hospital:</strong> {request.hospital}</p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <StatusBadge status={request.status}>
                {request.status}
              </StatusBadge>
              <small style={{ color: 'var(--text-muted)' }}>
                {new Date(request.createdAt).toLocaleDateString()}
              </small>
            </div>
          </RequestCard>
        ))}
      </RequestGrid>
    </BloodRequestsContainer>
  );
};

export default BloodRequests;