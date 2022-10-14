import React from "react";
// import "../Css/global.css";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container } from 'react-materialize'

export default function Films({ films }) {


  return (
    //   <div className="container">
    //     {films.map((film) => (
    //       <div className="column">
    //         <div className="card ">
    //           <div className="image-card">
    //             <img src={film.Image} alt="no"></img>
    //           </div>
    //           <h2 className="textt">{film.Title}</h2>
    //           <p className="textt">Year public: {film.Year}</p>
    //           <p className="textt">Country: {film.Nation}</p>
    //           <p>
    //             <Link to={`detail/${film.id}`}>
    //               <button className="button1">Detail</button>
    //             </Link>
    //           </p>

    //         </div>
    //       </div>
    //     ))}

    //     {/* <div id="popup1" className="overlay">
    //       <div className="popup">
    //         <img src={film.Image} alt="ko co film"></img>
    //         <h2>{film.Title}</h2>
    //         <a className="close" href='#'>
    //           &times;
    //         </a>
    //         <div className="content">{film.Info}</div>
    //       </div>
    //     </div> */}
    //   </div>


    < Container className="container_2">
      <Row >

        {films.map((film) => (
          <Col
            m={4}
            s={12}>

            <Card style={{ backgroundColor: "#ffe4c4" }}>

              <img style={{ width: "100%", height: "500px" }} src={film.Image} alt="no"></img>
              <h2 style={{ color: "black", fontSize: "25px" }}>{film.Title}</h2>
              <p style={{ color: "black" }}>Year public: {film.Year}</p>
              <p style={{ color: "black" }}>Country: {film.Nation}</p>
              <p>
                <Link to={`detail/${film.id}`}>
                  <button className="button1">Detail</button>
                </Link>
              </p>
            </Card>
          </Col>
        ))}


      </Row>
    </Container >


  )
}
