import { styled } from "styled-components";

export const Sidebar = styled.div`
  width: 250px; 
  padding: 20px;
  background-color: #FFFFFF;
  border-right: 1px solid #E0E0E0; // Add a subtle border
  box-shadow: 0 2px 10px rgba(0,0,0,0.05); // Soft shadow
  margin: 60px;
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

export const ProductName = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const ProductSubtitle = styled.h2`
  font-size: 16px;
  color: ${props => props.color || '#666'};
  margin-bottom: 10px;
  font-style: italic;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #FFFFFF;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 14px;
`;