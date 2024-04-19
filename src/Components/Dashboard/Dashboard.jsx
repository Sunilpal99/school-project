/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
// import { Dropdown } from "antd";

import axios from 'axios';
import './Dashboard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


import Course from '../Course/Course';
import { Sidebar} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
    AOS.init(); 
  }, []);
  <script src="bower_components/aos/dist/aos.js"></script> 
  return (
    <>


      {/* <!-- section start --> */}
      <Sidebar>
      </Sidebar>
      <section id="dashboard">
        {/* header */}

        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={image.url} className="d-block w-100" alt={`Image ${index}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        

        {/* <Membership/> */}
        {/* membership */}
        <div className="gender my-5 " >
          <div className="elementor-background-overlay">
            <div className="container">
              <div className="row">
                <div className='col-md-6 col-sm-12 p-2 position-relative' data-aos="flip-up" >
                  <img src="../../../public/image/men.jpg" className='w-100' alt="Men"  />
                  <div className="image-overlay">
                    <h1 className='image-text'>MEN</h1>
                  </div>
                </div>
                
                <div className='col-md-6 col-sm-12 p-2 position-relative' data-aos="flip-down">
                  <img src="../../../public/image/women.jpg" className='w-100' alt="Women" />
                  <div className="image-overlay">
                    <h1 className='image-text'>WOMENs</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            {/* above banner */}
            <div className="above_banner my-5">
          <div className="elementor-background-overlay">
            <div className="container my-5 p-3">
              <div className="row ">
                <div className="col-md-4 col-sm-12 " style={{borderLeft:'0'}}>
                  <img src="../../../public/image/inomative.jpg" className="img-fluid" alt="Image 2" style={{ height: '100px' }} />
                  <div>
                    <h3 style={{fontSize:'20px'}}>Innovative Teaching </h3>
                    <p>Teaching Learning strategies to increase student’s engagement and enhance the learning outcomes.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 ">
                  <img src="../../../public/image/experiencedfaculty.jpg" className="img-fluid" alt="Image 2" style={{ height: '100px' }} />
                  <div>
                    <h3 style={{fontSize:'20px'}}>Experienced Faculty</h3>
                    <p>Learn from the best teachers with vast experience in the field of education.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 ">
                  <img src="../../../public/image/holistic.png" className="img-fluid" alt="Image 2" style={{ height: '100px' }} />
                  <div>
                    <h3 style={{fontSize:'20px'}}>Holistic Education</h3>
                    <p>Holistic Integrated, Enjoyable and Engaging Pedagogical Approach.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* life@mskd start*/}
        <div className="life my-5">
          <div className="elementor-background-overlay mb-3">
            <div className="container ">
              <h1 className=" my-5 text-white fw-bold ">Life @MKSD</h1>
              <p className='text-light fs-4'>Connect with MKSD social network for the latest from campus</p>
            </div>
          </div>
        </div>
        {/* membership start */}
        <div className="membership">
          <h1 className="text-center my-5">Memberships</h1>
          <div className="elementor-background-overlay mb-3">
            <div className="container ">
              <div className="grid-container">
                <div className="grid-item text-center">
                  <img src="../../../public/image/member1.jpg" className="img-fluid" alt="Image 1" />
                </div>
                <div className="grid-item">
                  <img src="../../../public/image/member2.jpg" className="img-fluid" alt="Image 2" />
                </div>
                <div className="grid-item">
                  <img src="../../../public/image/member3.jpg" className="img-fluid" alt="Image 3" />
                </div>
                <div className="grid-item">
                  <img src="../../../public/image/member4.jpg" className="img-fluid" alt="Image 4" />
                </div>
                <div className="grid-item">
                  <img src="../../../public/image/member5.jpg" className="img-fluid" alt="Image 5" />
                </div>
                <div className="grid-item">
                  <img src="../../../public/image/member6.jpg" className="img-fluid" alt="Image 6" />
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* courses start*/}
        {/* <div className="section">
          <div className="content text-center my-2">
            <h1>Courses</h1>
            <p >Course Registration means the official recording of a student's name to study a course or courses.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center" style={{ margin: '10px' }}>
              <div className="col">
                <div className="card h-100">
                  <img src="/image/btech.jpg" alt="Avatar" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Bachelor of Technology</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="/image/bca1.jpg" alt="Avatar" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Bachelor of Computer Applications</h5>
                    <p className="card-text">Architect & Engineer</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="/public/image/mca.jpg" alt="Avatar" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Master of Computer Applications</h5>
                    <p className="card-text">Architect & Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Course />
        {/* testimonials start */}

        <div className="testimonials mt-5">
          <div className="elementor-background-overlay mb-3">
            <div className="container py-5">
            <h1 className="text-center mb-5">Testimonials</h1>
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators" style={{    bottom: '-40px'}}>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 d-flex justify-content-center">
                        <img src="/public/image/sunil_panchmani.JPG" className="d-block rounded-circle" alt="Image 1" style={{height:'150px',width:'150px'}}/>
                      </div>
                      <div className="col-md-8" >
                        <div className="content">
                          <div className="text">
                          <p>
                            The pedagogy, blend of technology in the education system and the zeal to bring forth the best amongst the students has made the institute stand amongst the best not only in the city but also in the country.The efforts of students in creating cognizance in society regarding various social issues related to protecting the environment, conserving heritage and other relevant issues is exemplary.				</p>
                          </div>
                          <div className="info"><h6>Sunil Pal</h6><span>Software Developer</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 d-flex justify-content-center">
                        <img src="/public/image/sunil_pal.jpg" className="d-block rounded-circle" alt="Image 1" style={{height:'150px',width:'150px'}}/>
                      </div>
                      <div className="col-md-8" >
                        <div className="content">
                          <div className="text">
                          <p>
                            The pedagogy, blend of technology in the education system and the zeal to bring forth the best amongst the students has made the institute stand amongst the best not only in the city but also in the country.The efforts of students in creating cognizance in society regarding various social issues related to protecting the environment, conserving heritage and other relevant issues is exemplary.				</p>
                          </div>
                          <div className="info"><h6>Sunil Pal</h6><span>Software Developer</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 d-flex justify-content-center">
                        <img src="/public/image/sunil_panchmani.JPG" className="d-block rounded-circle" alt="Image 1" style={{height:'150px',width:'150px'}}/>
                      </div>
                      <div className="col-md-8" >
                        <div className="content">
                          <div className="text">
                          <p>
                            The pedagogy, blend of technology in the education system and the zeal to bring forth the best amongst the students has made the institute stand amongst the best not only in the city but also in the country.The efforts of students in creating cognizance in society regarding various social issues related to protecting the environment, conserving heritage and other relevant issues is exemplary.				</p>
                          </div>
                          <div className="info"><h6>Sunil Pal</h6><span>Software Developer</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery start */}
        <div id="photo_gallery">
          <h1 className="text-center m-5">Photo Gallery</h1>
          <div className="elementor-background-overlay mb-3">
            <div className="container ">
              <div className="grid-container">
                <div className="grid-item">
                  <img src="/public/image/photogallery1.jpg" className="img-fluid" alt="Image 1" />
                </div>
                <div className="grid-item">
                  <img src="/public/image/photogallery2.jpg" className="img-fluid" alt="Image 2" />
                </div>
                <div className="grid-item">
                  <img src="/public/image/photogallery3.jpg" className="img-fluid" alt="Image 3" />
                </div>
                <div className="grid-item">
                  <img src="/public/image/photogallery4.jpg" className="img-fluid" alt="Image 4" />
                </div>
                <div className="grid-item">
                  <img src="../../../public/image/photogallery5.jpg" className="img-fluid" alt="Image 5" />
                </div>
                <div className="grid-item">
                  <img src="../../../public/image/photogallery6.jpg" className="img-fluid" alt="Image 6" />
                </div>
              </div>
              <div className="text-center m-5">
                <a href="https://stpi.in/en/gwalior" className="btn btn-success" style={{ background: '#fe6818', borderColor: '#fe6818' }}>Submit</a>
              </div>
            </div>
          </div>
        </div>
        {/* ----foter start */}
      
      </section>
      {/* <!-- section end --> */}
    </>
  );
};

export default Dashboard;
