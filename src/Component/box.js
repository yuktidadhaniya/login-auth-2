import { UserOutlined } from '@ant-design/icons';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Card,
  Watermark,
  Rate,
  Button,
  Modal,
  message,
  Form,
  Input,
  Space

} from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchAllUsers,
//   deleteProduct,
//   editProduct,
//   productCategory,
// } from './reducer/list';
import { fetchAllUsers, editProduct, deleteProduct } from '../store/action/login.action';

import { Spin } from 'antd';
import Addproduct from "./Addproduct"

const Box = (props) => {
  const navigate = useNavigate()

  const { Header, Content, Sider } = Layout;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('loading: ', loading);

  const [modalData, setModalData] = useState({});
  const [messageApi] = message.useMessage();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);


  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  const menulist = [
    { name: 'charts', path: '/charts' },
    { name: 'contact', path: '/contact' },
    { name: 'back', path: './box' },
    { name: 'login', path: '/' },
  ];

  const items2 = menulist.map((menu, index) => {
    // console.log("menu",menu)
    const key = String(index + 1);
    return {
      key: `icon${key}`,
      icon: <UserOutlined />,
      label: (
        <div>
          <Link to={menu.path}>{menu.name}</Link>
        </div>
      ),
    };
  });
  const items1 = menulist.map((menu, index) => ({
    label: (
      <div>
        <Link to={menu.path}>{menu.name}</Link>
      </div>
    ),
  }));

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useDispatch();
  // const { list } = useSelector((state) => state.product);
  const list = useSelector((state) => state.login.list);

  console.log('list: ', list);




  // const handleSuccessFetchData = (e) => {
  //   console.log('e: ', e);
  //   setLoading(false);
  // };

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllUsers())
      .then(() => {
        setLoading(false); 
      })
      .catch((error) => {
        setLoading(false); 
      
      });
  }, []);
  



  const handleChange = (event) => {

    if (event.target.name === 'title') {
      const updatedModalData = Object.assign(modalData, {
        title: event.target.value,
      });
      console.log('updatedModalData: ', updatedModalData);
      setModalData({ ...updatedModalData });
    }

    if (event.target.name === 'price') {
      const updatedModalData = Object.assign(modalData, {
        price: event.target.value,
      });
      setModalData({ ...updatedModalData });
    }

    if (event.target.name === 'rating') {
      const updatedModalData = Object.assign(modalData, {
        rating: event.target.value,
      });
      setModalData({ ...updatedModalData });
    }

    if (event.target.name === 'stock') {
      const updatedModalData = Object.assign(modalData, {
        stock: event.target.value,
      });
      setModalData({ ...updatedModalData });
      // setStock(event.target.value)
    }
  };
  const showModal = (user) => {
    console.log('user: ', user);
    let newObj = Object.assign({}, user);
    console.log('newObj: ', newObj);

    setIsModalOpen(true);
    setModalData(newObj);

    setTitle(user.title);
    setPrice(user.price);

  };

  const handleOk = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
    setIsModalOpen(false);
    const body = {
      title: modalData.title,
      price: modalData.price,
      rating: modalData.rating,
    };
    console.log("body", body);
    dispatch(editProduct(body, modalData.id));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const viewCard = (id) => {
    navigate(`/viewcard/${id}`);
  };

  const handleDelete = (user) => {
    Modal.confirm({
      title: user.title,
      content: 'Are you sure you want to delete this product?',
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk() {
        // Call the deleteProduct action here
        dispatch(deleteProduct(user.id));
        
      },
      onCancel() {
      
      },
    });
  };
  

  return (
    <>
      <Layout>

        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            ></Breadcrumb>

            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <div
                style={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'right',
                }}
              >



                <Addproduct />
              </div>
              <h1 style={{ textAlign: "center" }}>
                Product's Details
              </h1>
              {loading ? (
                <Spin size="large" />
              ) : (
                <Watermark content="Product">
                  <Card>

                    {list.products?.map((user) => (

                      <Card.Grid style={gridStyle}>
                        <>
                          <p>title: {user.title}</p>
                          <p>price: {user.price}</p>
                          <p>rating: {user.rating}</p>

                          <p>stock: {user.stock}</p>
                          <p>brand: {user.brand}</p>

                          <p>discountPercentage : {user.discountPercentage}</p>

                          <p>
                            <img
                              src={user.images}
                              alt=""
                              style={{
                                width: '50px',
                                alignItems: 'center',
                              }}
                            />
                          </p>
                          <p>
                            <Rate allowHalf defaultValue={user.rating} />
                          </p>
                        </>
                        <Space wrap>
                          <Button type="primary" onClick={() => showModal(user)}>
                            Edit
                          </Button>
                          <Button
                            type="primary"
                            onClick={() => handleDelete(user)}
                          >
                            Delete
                          </Button>
                          <Button
                            type="primary"
                            onClick={() => viewCard(user.id)}
                          >
                            View
                          </Button>

                        </Space>

                      </Card.Grid>
                    ))}
                  </Card>
                </Watermark>
              )}
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form.Item label="Title">
          <Input
            placeholder="input placeholder"
            value={modalData.title}
            type="text"
            name="title"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Price">
          <Input
            placeholder="input placeholder"
            value={modalData.price}
            type="number"
            name="price"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Rating">
          <Input
            placeholder="input placeholder"
            value={modalData.rating}
            type="number"
            name="rating"
            onChange={handleChange}
          />
        </Form.Item>
        {/* 

       
        <Form.Item label="Rating">
          <Input
            placeholder="input placeholder"
            value={modalData.rating}
            type="number"
            name="rating"
            onChange={handleChange}
          />
        </Form.Item> */}
      </Modal>
    </>
  );
};

export default Box;
