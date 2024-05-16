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
  font-size: 12px;
  margin-bottom: 20px;
  width: 200px; 
  color: #757575;
  text-align: center;    
`;


export const Tag = styled.span`
  background-color: white;   
  border: 1px solid #ccc;    
  color: #333;               
  font-size: 12px;           
  padding: 5px 15px;         
  margin: 5px;               
  border-radius: 4px;       
  display: inline-flex;      
  align-items: center;      
  justify-content: center;  
  flex-wrap: wrap;          
  max-width: 100%;        
  box-sizing: border-box;    
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); 
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