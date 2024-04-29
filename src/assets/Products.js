import { Grid } from "antd";
import { Col, Row } from 'antd';
import { useEffect, useState } from "react";
import { Card } from 'antd';
import { Modal } from 'antd';
const { Meta } = Card;

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function productDetail(product) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <h1 style={{ marginLeft: '800px' }}> Products </h1>

      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              className="Card-size"
              onClick={() => productDetail(product)}
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

      {selectedProduct && (
        <Modal

          title={selectedProduct.title}
          visible={isModalVisible}
          onCancel={closeModal}
          footer={null}
        >
          <img src={selectedProduct.image} alt="" height='200px' />
          <p>{selectedProduct.description}</p>
          <h3>Price: {selectedProduct.price}</h3>
        </Modal>
      )}
    </div>
  );
}

export default Products;