import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EmergencyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EmergencyCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  text-align: center;
  border: 2px solid ${props => props.theme.colors.error};
`;

const EmergencyTitle = styled.h1`
  color: ${props => props.theme.colors.error};
  margin-bottom: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
`;

const EmergencyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.lg} 0;
`;

const Input = styled.input`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.body.fontSize};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }
`;

const Select = styled.select`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.body.fontSize};
  background: ${props => props.theme.colors.surface};
`;

const Button = styled.button`
  background: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.body.fontSize};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-1px);
  }
`;

const ContactInfo = styled.div`
  background: ${props => props.theme.colors.surfaceAlt};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-top: ${props => props.theme.spacing.lg};
`;

const Emergency = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    units: '',
    hospital: '',
    contact: '',
    urgency: 'high'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Emergency blood request submitted! Our team will contact you shortly.');
    // In real app, this would make an API call
    setFormData({
      patientName: '',
      bloodGroup: '',
      units: '',
      hospital: '',
      contact: '',
      urgency: 'high'
    });
  };

  return (
    <EmergencyContainer>
      <EmergencyCard>
        <EmergencyTitle>
          🚨 Emergency Blood Request
        </EmergencyTitle>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Need blood urgently? Fill out this form and we'll help you immediately.
        </p>

        <EmergencyForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
          
          <Select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Select>
          
          <Input
            type="number"
            name="units"
            placeholder="Units Required"
            value={formData.units}
            onChange={handleChange}
            min="1"
            required
          />
          
          <Input
            type="text"
            name="hospital"
            placeholder="Hospital Name"
            value={formData.hospital}
            onChange={handleChange}
            required
          />
          
          <Input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          
          <Select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option value="high">High Urgency</option>
            <option value="critical">Critical Emergency</option>
          </Select>
          
          <Button type="submit">
            Submit Emergency Request
          </Button>
        </EmergencyForm>

        <ContactInfo>
          <h3>📞 Immediate Assistance</h3>
          <p><strong>Emergency Hotline:</strong> 1-800-BLOOD-HELP</p>
          <p><strong>Available:</strong> 24/7</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--primary)' }}>Login here</Link> for faster processing.
          </p>
        </ContactInfo>
      </EmergencyCard>
    </EmergencyContainer>
  );
};

export default Emergency;