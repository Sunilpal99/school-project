/* eslint-disable no-unused-vars */
import React, { Children, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { Button, Dropdown, Space } from 'antd';
import { DownOutlined,HomeOutlined } from '@ant-design/icons';
import './Header.css'

const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
    setInputValue(e.target.value);
};
const items = [
  {
    title: "Home",
    icon: <HomeOutlined />,
    Children: [
      {
        key: '1',
        label: (
          <Link to="/Dashboard" >  Dashboard </Link>
        ),
      },
      
      {
        key: '2',
        label: (
           <Link to="/desk_of_director">  Desk Of Directors </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to="/desk_of_principal">   Desk Of Principal</Link>
        ),
      },
      ]
  },
  {
    title: "About Us",
    Children: [
      {
        key: '1',
        label: (
          <Link to="/">About</Link>
        ),
      },
    ]
  },
  {
    title: "Course",
    Children: [
      {
        key: '1',
        label: (
          <Link to="/course">Course</Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to="#">Assesments</Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link to="/board_result">Inclusive Practices </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to="/board_result"> Board Results </Link>
        ),
      }
    ]
  },

  {
    title: "Contact Us",
    Children: [
      {
        key: '1',
        label: (
          <Link to="#">  Contact Information</Link>
        ),
      },
      {
        key: '1',
        label: (
          <Link to="/activities">Curriculm</Link>
        ),
      },
    ]
  },
  {
    title: "My Account",
    Children: [
      {
        key: '1',
        label: (
          <Link to="">  Logout</Link>
        ),
      },
      {
        key: '1',
        label: (
          <Link to="">  Another Action</Link>
        ),
      },
    ]
  },
];

  return (
    <>
    <NavLink>
    </NavLink>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#" style={{}}>
              <img src="/public/image/sns-new-logo.png" alt="" />
            </a>
            {/* <button
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={{ gap: '10px' }}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold" style={{ gap: '10px' }}>
                {items.map((category, index) => (
                  <li key={index} className="nav-item">
                    <Space direction="vertical">
                      <Space wrap>
                        <Dropdown menu={{ items: category.Children }} placement="bottom">
                          <Button>
                            <Space>
                            <span className="menu-title">{category.title} <DownOutlined /> </span>
                            </Space>
                          </Button>
                        </Dropdown>
                      </Space>
                    </Space>
                  </li>
                ))}
              </ul>
            <a className="navbar-brand2" href="#" style={{width: '10%', maxWidth: '100px'}}>
              <img src="/public/image/sunil_pal.jpg" alt="" />
            </a>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header