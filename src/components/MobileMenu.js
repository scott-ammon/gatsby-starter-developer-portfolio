import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import { Link } from 'gatsby'

class MobileMenu extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        menuOpen: false
      }
  }

  render () {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '35px',
        height: '25px',
        right: '18px',
        top: '18px'
      },
      bmBurgerBars: {
        background: 'white',
        height: '10%'
      },
      bmCrossButton: {
        height: '36px',
        width: '36px',
      },
      bmCross: {
        width: '4px',
        height: '20px',
        background: 'white'
      },
      bmMenu: {
        height: '100vh',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        backgroundColor: '#0F2027'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'block',
        textDecoration: 'none',
        fontFamily: 'Roboto Slab',
        paddingBottom: '1.5rem',
        fontSize: '1.5rem',
        textShadow: 'none',
        backgroundImage: 'none',
        color: 'white'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0)'
      },
      bmMenuWrap: {
        top: '0',
        width: '75vw'
      }
    }

    return (
      <Menu isOpen={this.state.menuOpen} right styles={styles}>
        <Link className={styles.menuItem} to="/" onClick={this.props.homeClick}>Home</Link>
        <Link className={styles.menuItem} to="/about" onClick={this.props.burgerClick}>About</Link>
        <Link className={styles.menuItem} to="/contact" onClick={this.props.burgerClick}>Contact</Link>
      </Menu>
    );
  }
}

export default MobileMenu