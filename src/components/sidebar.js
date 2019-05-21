import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/me.webp)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Candra Febrianto Wibowo</a></h1>
              <span className="email"><i className="icon-mail"></i> Candraweqweq@gmail.com</span>
              <span className="number"><i className="icon-phone"></i> +62-896-4878-760</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="timeline">Education</a></li>
                  <li><a href="#" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/TheCrazyBos" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /> Facebook</a></li>
                <li><a href="https://www.instagram.com/al_candfw" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /> Instagram</a></li>
                <li><a href="https://github.com/ExpPool" target="_blank" rel="noopener noreferrer"><i className="icon-github"/> Github</a></li>
                <li><a href="https://steamcommunity.com/id/ExpPool" target="_blank" rel="noopener noreferrer"><i className="icon-steam" /> Steam</a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}

