// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';

// const ProductDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get(`https://api.storerestapi.com/products/${_id}`)
//       .then(response => {
//         setProduct(response.data.data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching product details:', error);
//         setError(error);
//         setIsLoading(false);
//       });
//   }, [slug]);

//   if (isLoading) {
//     return (
//       <Container className="my-4 pt-5 text-center">
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className="my-4 pt-5 text-center">
//         <Alert variant="danger">
//           Error loading product details: {error.message}
//         </Alert>
//       </Container>
//     );
//   }

//   if (!product) {
//     return (
//       <Container className="my-4 pt-5 text-center">
//         <Alert variant="warning">
//           Product not found.
//         </Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container className="my-4 pt-5">
//       <Card>
//         <Card.Img variant="top" src={`https://source.unsplash.com/random/500x400/?${encodeURIComponent(product.title)}`} />
//         <Card.Body>
//           <Card.Title>{product.title}</Card.Title>
//           <Card.Text>{product.description}</Card.Text>
//           <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
//           <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
//           <Button variant="secondary" onClick={() => navigate(-1)}>
//             Back
//           </Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default ProductDetails;


import React from 'react'

function ProductDetails() {
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails