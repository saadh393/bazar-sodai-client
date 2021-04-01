/*  
💥 Title : AdminAddProduct
📃 Description : This Component will show the form of Adding New Products
✍ Author : Saad Hasan
⌚ Date : 31/ March/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card, Row, Col, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addProduct } from "./hanldeAddProduct";

const AdminAddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [uploadState, setUploadState] = useState(false);
  const [show, setShow] = useState(false);

  const onSubmit = (data, e) => {
    setUploadState(true);
    addProduct(data, e)
      .then((data) => {
        setUploadState(false);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((exception) => setUploadState(false));
  };

  return (
    <>
      {show && <Alert />}
      <Card className="p-4 m-4">
        <h3> Add New Product</h3>
        <form onSubmit={handleSubmit(onSubmit)} class="addProductForm">
          <Row>
            <Col>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="form-control"
                  name="productName"
                  defaultValue=""
                  ref={register({ required: true })}
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  placeholder="Product Price in Taka"
                  className="form-control"
                  name="productPrice"
                  defaultValue=""
                  ref={register({ required: true })}
                />
              </div>
            </Col>

            <Col>
              <div className="form-group">
                <label>Product Quantity</label>
                <input
                  type="text"
                  placeholder="Product Quantity"
                  className="form-control"
                  name="productQuantity"
                  defaultValue=""
                  ref={register({ required: true })}
                />
              </div>

              <div className="form-group">
                <label>Product Image</label>
                <input
                  type="file"
                  placeholder="Product Image"
                  className="form-control"
                  name="productImage"
                  accept=".jpg, .png"
                  defaultValue=""
                  ref={register({ required: true })}
                />
              </div>

              <div className="form-group">
                <input type="submit" value="Submit" disabled={uploadState} />
                {uploadState && (
                  <>
                    <span className="mx-2"></span>
                    <Spinner animation="grow" size="sm" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                  </>
                )}
              </div>
            </Col>
          </Row>
        </form>
      </Card>
    </>
  );
};

const Alert = ({ action }) => {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <div>
        <h4 class="alert-heading">Well done!</h4>
        <p>New Product Added Successfully 🎉</p>
      </div>
    </div>
  );
};

export default AdminAddProduct;
