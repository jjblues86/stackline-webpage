import { styled } from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;  
  background: #fff;  
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  
  width: 250px;  
  display: flex;
  flex-direction: column;  
  justify-content: start;  
  border-right: 1px solid #e0e0e0;
  margin-right: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

export const ProductName = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

export const ProductSubtitle = styled.h2`
  font-size: 16px;
  color: ${props => props.color || '#777'};
  margin-bottom: 20px;
  font-style: italic;
  text-align: center;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #eee;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 1px;
  font-size: 12px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;  
  height: 100vh;
  margin-top: 55px; 
`;

export const Content = styled.div`
  flex-grow: 1;  
  overflow: auto;  
`;