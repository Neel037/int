import React from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ProductDetails(props) {
  const { id } = useParams();
console.log('id, props data--',id, props);

  return (
    <div>
            <div>
              <Image width="16%" src='src/assets/Rectangle 1.png' fluid/>
              {/* <h2 className=''>Products Title: {item.title}</h2>
              <h4>Products Price: {item.price}</h4> */}
            </div>
    </div>
  );
}

export default ProductDetails;