import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>My name is Candra Febrianto Wibowo and I am a college student in Universitas Gadjah Mada and a saller in steam, I also like to play Dota 2 at the end of the week.</p>
                    <p>If you wish to trade for any of the items as shown, please feal free to make me an offer. As well with any items you see that i have.</p>
                    <p>I don't mind Same-Set / Cross-Set, but the offer needs to be worth it.</p>
                    <p>I will, however, decline your same-set offer, if the value of your card is much lower than mine. I don't like it when people try to trade me 1:1 same-set to exploit price differences within a set. So lets keep this fair.</p>
                    <p>If you break my sets, that's fine but you will need to make the trade offer worth my time. I will only decline the trade if I plan to craft that set myself.</p>
                    <p>Happy Gaming for my fellow Gamer, hope you can take a break for a moment :) .</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
