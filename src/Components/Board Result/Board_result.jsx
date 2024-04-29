/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Board_result = () => {
  return (
    <>
      <div className="section">
        <div className="content text-center my-2">
          <h1 className='m-5'>Board Result</h1>
          
          <div className="row row-cols-1 row-cols-md-2 p-3 justify-content-evenly" style={{ margin: '20px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}> 
            <div className="col" >
              <img src="https://gzlfc7.n3cdn1.secureserver.net/wp-content/uploads/2023/12/X.jpeg" alt="Avatar" className="card-img-top " style={{padding:'10px'}} />
              <div className="card-body" >
                <p className="card-text text-justify">Class X Board Results 2022-23</p>
                {/* <Button variant="text">Text</Button> */}
                <button type="button" className="btn btn-outline-primary">Click Here</button>
              </div>
            </div>
            <div className="col">
              <img src="https://gzlfc7.n3cdn1.secureserver.net/wp-content/uploads/2023/12/XII-e1709266522419.jpg?time=1713517318" alt="Avatar" className="card-img-top"style={{padding:'10px'}}  />
              <div className="card-body">
                <p className="card-text text-justify">Class XII Board Results 2022-23</p>
                <button type="button" className="btn btn-outline-primary">Click Here</button>
              </div>
            </div>
            <div className="col-sm-9">
              <img src="https://gzlfc7.n3cdn1.secureserver.net/wp-content/uploads/2023/12/XII-e1709266522419.jpg?time=1713517318" alt="Avatar" className="card-img-top"style={{padding:'10px'}}  />
              <div className="card-body">
                <p className="card-text text-justify">Class XII Board Results 2022-23</p>
                <button type="button" className="btn btn-outline-primary">Click Here</button>
              </div>
            </div>
        
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Board_result
