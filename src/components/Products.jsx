import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container, Button, Card, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbr from './Navbr';
import ProductDetailsModal from "./ProductDetailsModal"

const Products = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalShow, setModalShow] = useState(false);
  const [items, setItems] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://api.storerestapi.com/categories')
      .then(response => {
        setCategories(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
    fetchProducts('all');
  }, []);

  const fetchProducts = (category) => {
    setIsLoading(true);
    let url = 'https://api.storerestapi.com/products';
    if (category !== 'all') {
      url = `https://api.storerestapi.com/products/category/${category}`;
    }
    axios.get(url)
      .then(response => {
        setData(response.data.data);
        setIsLoading(false);
        // console.log('response data', data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };

  if (isLoading) {
    return (
      <Container className="my-4 pt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-4 pt-5 text-center">
        <Alert variant="danger">
          Error loading data: {error.message}
        </Alert>
      </Container>
    );
  }

const handleClicked=(item)=>{
  setModalShow(true)
  setItems(item)
}



  return (
    <>
      <Navbr categories={['all', ...categories.map(cat => cat.name)]} onSelectCategory={handleSelectCategory} />
      <Container className="my-4 pt-5">
        <Row>
          {data.map(item => (
            <Col md={4} key={item.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`https://source.unsplash.com/random/500x400/?${encodeURIComponent(item.title)}`} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description || 'No description available.'}
                  </Card.Text>
                  <Card.Text><strong>Price:</strong> ${item.price}</Card.Text>
                  {/* <Button variant="primary" size="md" onClick={() => navigate(`/product/${item._id}`)}> */}
                  <Button variant="primary" size="md" onClick={() => handleClicked(item)}>
                    Product Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ProductDetailsModal
      item={items}
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Products;
