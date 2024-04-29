import { Grid } from "antd";
import { Col, Row } from 'antd';
import { useEffect, useState } from "react";
import { Card } from 'antd';
const { Meta } = Card;

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }
    , []);

  return (
    <div >
      <h1> Products </h1>
      <Row>
        {products.map((product) => (
          <Col span={6} key={product.id}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={product.image} />}
            >
              <Meta title={product.title} description={product.price} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;