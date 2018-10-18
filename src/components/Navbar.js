import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.css'
import classNames from 'classnames'
import MediaQuery from 'react-responsive';
import MobileMenu from '../components/MobileMenu'

class Navbar extends Component {
  constructor(props) {
    super(props)
    let pageName = this.props.location.pathname;
    let navStyle;
 
    if(pageName === '/') {
      navStyle = styles.headerOne
    } else {
      navStyle = styles.headerTwo
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
          nav: styles.headerTwo
        }) 
      } else if (document.documentElement.scrollTop === 0) {
        this.setState({
          nav: styles.headerOne
        })
      }
    }
  }

  handleClick = (e) => {
    this.setState({
      nav: styles.headerTwo
    }) 
  }

  handleHomeClick = e => {
    this.setState({
      nav: styles.headerOne
    }) 
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 550px)">
          <MobileMenu homeClick={this.handleHomeClick} burgerClick={this.handleClick}></MobileMenu>
        </MediaQuery>
        <div className={classNames(this.state.nav, styles.nav)}>
          <div>
            <Link exact to='/' onClick={this.handleHomeClick} className={styles.nameLink}>GH</Link>
          </div>
          <div>
            <Link exact to="/" onClick={this.handleHomeClick} className={styles.navLink} activeClassName={styles.activeStyle}>home</Link>
            <Link to="/about" onClick={this.handleClick} className={styles.navLink} activeClassName={styles.activeStyle}>about</Link>
            <Link to="/contact" onClick={this.handleClick} className={styles.navLink} activeClassName={styles.activeStyle}>contact</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
