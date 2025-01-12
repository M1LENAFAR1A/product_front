import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ORCHID</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-success">Adicionar Produto</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  const [products, setProducts] = useState([]); // Estado para armazenar produtos

  // Fetch na API para buscar os produtos
  useEffect(() => {
    fetch('http://localhost:3000/api/products') // URL do endpoint de produtos
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Atualiza o estado com os produtos
      })
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <>
        <NavigationBar />

        <div style={{ marginTop: '80px' }}>
            <Container>
                <h2 className="text-center my-4">Produtos Disponíveis</h2>
                <Row>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Col key={product.id} md={3} className="grid-item">
                                <div
                                    className="p-3 border text-center"
                                    style={{
                                        backgroundColor: '#A0C4FF',
                                        borderRadius: '8px',
                                        color: '#333',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {/* Imagem do Produto */}
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="square-image"
                                        style={{ width: '15opx', height: '150px', objectFit: 'cover' }}
                                    />
                                    {/* Nome do Produto */}
                                    <h5 className="mt-2">{product.name}</h5>
                                    {/* Preço do Produto */}
                                    <p>Preço: R$ {product.price.toFixed(2)}</p>
                                    {/* Quantidade Disponível */}
                                    <p>Quantidade: {product.qtd}</p>
                                </div>
                            </Col>
                        ))
                    ) : (
                        <p className="text-center">Nenhum produto disponível.</p>
                    )}
                </Row>
            </Container>
        </div>
    </>
);

}

export default App;
