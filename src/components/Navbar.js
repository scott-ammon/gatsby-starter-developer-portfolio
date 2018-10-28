import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import classNames from 'classnames'
import MediaQuery from 'react-responsive'
import MobileMenu from '../components/MobileMenu'

class Navbar extends Component {
  constructor(props) {
    super(props)
    let pageName = this.props.location.pathname;
    let navStyle;
 
    if(pageName === '/') {
      navStyle = "headerOne"
    } else {
      navStyle = "headerTwo"
    }
    this.state = {
      nav: navStyle
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
  }

  handleScroll = (e) => {

    let pageName = this.props.location.pathname

    if(pageName === '/') {
      if(document.documentElement.scrollTop > 0) {
        this.setState({
          nav: "headerTwo"
        }) 
      } else if (document.documentElement.scrollTop === 0) {
        this.setState({
          nav: "headerOne"
        })
      }
    }
  }

  handleClick = (e) => {
    this.setState({
      nav: "headerTwo"
    }) 
  }

  handleHomeClick = e => {
    this.setState({
      nav: "headerOne"
    }) 
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  render() {

    // Take first letters from name for 'logo' in navbar
    const name = this.props.name.match(/\b(\w)/g).join('');

    return (
      <div>
        <MediaQuery query="(max-width: 550px)">
          <MobileMenu homeClick={this.handleHomeClick} burgerClick={this.handleClick}></MobileMenu>
        </MediaQuery>
        <Header>
          <div className={classNames(this.state.nav, "nav")}>
            <Logo>
              <Link exact to='/' onClick={this.handleHomeClick}>{name}</Link>
            </Logo>
            <NavLinks>
              <Link exact to="/" onClick={this.handleHomeClick} activeClassName="activeStyle">home</Link>
              <Link to="/about" onClick={this.handleClick} activeClassName="activeStyle">about</Link>
              <Link to="/contact" onClick={this.handleClick} activeClassName="activeStyle">contact</Link>
            </NavLinks>
          </div>
        </Header>
      </div>
    )
  }
}

export default Navbar

const Header = styled.div`
  
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    padding-top: 10px;
    width: 100%;
    z-index: 99;
  }
  .headerOne {
    height: 100px;
    transition: 0.5s ease;
  }
  .headerTwo {
    height: 60px;
    background: #0F2027;
    transition: 1s ease;
    box-shadow: 0 0.125rem 1.25rem rgba(0,0,0,.8);
  }
  @media (max-width: 550px) {
    .navLink {
      display: none;
    }
    .headerOne {
      height: 60px;
    }
  }
`;

const Logo = styled.div`
  a {
    display: inline-block;
    height: 100%;
    margin: 0 1.2rem;
    text-decoration: none;
    color: #fff;
    padding: 0 0 8px 0;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  a {
    display: inline-block;
    height: 100%;
    margin: 0 1.2rem;
    text-decoration: none;
    color: #fff;
    padding: 12px 0 17px 0;
    font-size: 1rem;
  }
  a:hover,
  .activeStyle {
    border-bottom: 1px solid #fff;
  }
`;