import React, { Component } from 'react'
import {
  
  Link
} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark text-light">
        <div className="container-fluid  text-primary">
          <Link className="navbar-brand text-light" to="/general">AwareMe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active text-light" aria-current="page" to="/general">Home</Link>
              <Link className="nav-link active text-light" to="/business">business</Link>
              <Link className="nav-link active text-light" to="/entertainment">entertainment</Link>
              <Link className="nav-link active text-light" to="/health">health</Link>
              <Link className="nav-link active text-light" to="/science">science</Link>
              <Link className="nav-link active text-light" to="/sports">sports</Link>
              <Link className="nav-link active text-light" to="/technology">technology</Link>

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar