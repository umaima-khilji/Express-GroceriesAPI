import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function ProductModal() {
    const [show, setShow] = useState(false);
    const [brands, setBrands] = useState([{ BrandName: 'hi' }])
    const [categories, setCategories] = useState([{ CategoryName: 'hello' }])
    const [ProductName, setProductName] = useState("")
    const [ProductImage, setProductImage] = useState(null)
    const [desc, setDesc] = useState("")

    const [brandVal, setBrandVal] = useState('')
    const [CategoryVal, setCategoryVal] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const AddProduct = (e) => {
        e.preventDefault();
        console.log({ ProductName, ProductImage, brandVal, CategoryVal, desc })
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Product
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={AddProduct}>
                        <div className="mb-3">
                            <label htmlFor="ProductName" className="form-label">
                                Product Name
                            </label>
                            <input
                                value={ProductName}
                                onChange={(e) => setProductName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="ProductName"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Product Image
                            </label>
                            <input className="form-control" onChange={(e) => setProductImage(e.target.files[0])} type="file" id="formFile" />
                        </div>

                        <Form.Group className="mb-3" >

                            <Form.Label>Brand</Form.Label>
                            <Form.Select aria-label="Please Select a Brand" onChange={(e) => setBrandVal(e.target.value)}>
                                <option>Please Select a Brand</option>
                                {
                                    brands.map((val, key) => <option key={key} value={val.BrandName}>{val.BrandName}</option>)
                                }

                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="mb-3" >

                            <Form.Label>Category</Form.Label>
                            <Form.Select aria-label="Please Select a Category" onChange={(e) => setCategoryVal(e.target.value)}>
                                <option>Please Select a Category</option>
                                {
                                    categories.map((val, key) => <option key={key} value={val.CategoryName}>{val.CategoryName}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Description" className='mb-3'>
                            <Form.Control
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>





                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ProductModal;