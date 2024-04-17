/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{ useEffect }  from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Desk_of_principal = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);
    
  return (
    <div className="section">
    <div className="content text-center my-2">
        <div style={{ margin: '0 auto', maxWidth: '100%', width: '640px' }}>
      <h1 className='m-5'>Principal's Desk</h1>
      <p className=''>Every child has the inherent capability of exuding the aura of knowledge. We at GWALIOR GLORY strive to deliver the knowledge and groom every child to a confident personality and a good human being.</p>
      <p className='fw-bold'>-Mr . Adesh Gupta</p>
        </div>
      
      <div className="row row-cols-1 row-cols-md-2 justify-content-evenly" style={{ margin: '20px' }}> 
        <div className="col-sm-8" data-aos="fade-up" data-aos-duration="2000">
            <img src="https://gzlfc7.n3cdn1.secureserver.net/wp-content/uploads/2024/02/PXL_20240209_055014822.PORTRAIT-copy-e1708663841370.jpg?time=1713308460" alt="Avatar" className="card-img-top " style={{padding:'10px'}} />
            <div className="card-body" >
                <p className="card-text text-justify">Every child has the inherent capability of exuding the aura of knowledge. We at GWALIOR GLORY strive to deliver knowledge and groom every child into a confident personality and a good human being. Our school has an elaborate system of activities and learning experiences to modify the behaviour of its students in the desired direction. I wish to express that Gwalior Glory High School has braced itself to stand the tests of time. </p>
                <div>
                <p>Students of Gwalior Glory High School are:-</p>
                <ul>
                    <li style={{textAlign:"start"}}>Independent thinkers with scientific tempers.</li>
                    <li style={{textAlign:"start"}}>Disciplined leaders with a sportsman spirit.</li>
                    <li style={{textAlign:"start"}}>Ethical human beings with a sound moral compass.</li>
                    <li style={{textAlign:"start"}}>Strong individuals who think globally and act locally.</li>
                    <li style={{textAlign:"start"}}>Well prepared to uphold the GLORY of our nation.</li>
                </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Desk_of_principal