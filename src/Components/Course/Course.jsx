/* eslint-disable react/no-unescaped-entities */
import React from 'react'


const Course = () => {
  return (
    <>
   
            <div className="section">
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
            </div>
  
    </>
  )
}
export default Course