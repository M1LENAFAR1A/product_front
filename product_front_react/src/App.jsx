import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import productImage from './assets/flower.png'; // Imagem usada nos quadrados

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ORCHID</Nav.Link>
            <img 
                    src={productImage} 
                    alt="Produto" 
                    className="square-image"
                  />
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-success">Adicionar Produto</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Componente Principal
function App() {
  const squareName = 'Produto X'; // Nome padrão para todos os quadrados
  const squareColor = '#A0C4FF'; // Cor padrão para todos os quadrados

  return (
    <>
      {/* Barra de Navegação */}
      <NavigationBar />

      {/* Conteúdo Principal */}
      <div style={{ marginTop: '80px' }}> {/* Margem para evitar sobreposição */}
        <Container>
          <h2 className="text-center my-4">Grade Uniforme 4x3 com Imagem</h2>
          <Row>
            {[...Array(12)].map((_, index) => (
              <Col key={index} md={3} className="grid-item">
                <div
                  className="p-3 border text-center"
                  style={{
                    backgroundColor: squareColor,
                    borderRadius: '8px',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  {/* Imagem no Quadrado */}
                  <img 
                    src={productImage} 
                    alt="Produto" 
                    className="square-image"
                  />
                  {/* Nome do Produto */}
                  <h5 className="mt-2">{squareName}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
