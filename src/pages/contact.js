import React, { Component } from 'react'
import Layout from '../components/Layout'
import styles from "../styles/contact.module.css"

class ContactPage extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // Make sure to set form action
  // I use formspree so no backend is needed,
  // for example: action="https://formspree.io/youremail@gmail.com"
  render() {
    return  (
      <Layout location={this.props.location}>
        <h1 className={styles.title}>Let's Work Together</h1>
        <p className={styles.tagline}>Don't hesitate to reach out.</p>
        <form className={styles.contactFlex} 
              method="POST"
              action=""
              name="info-form"
        >
          <label>*Full Name</label>
          <input
            name="name"
            type="text"
            className={styles.contactInput}
            required
          />
          <label>*Email</label>
          <input
            name="email"
            type="text"
            className={styles.contactInput}
            required
          />
          <label>Phone</label>
          <input
            name="phone"
            type="text"
            className={styles.contactInput}
          />
          <label>Inquiring About:</label>
          <select>
            <option value="default">Select One:</option>
            <option value="freelance">Freelance Work</option>
            <option value="employment">Employment</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
          <label>Comments</label>
          <textarea
            name="comments"
            type="text"
            rows="5"
            className={styles.contactInput}
          />
          <p>*Indicates required field</p>
          <button>Submit</button>
        </form>
      </Layout>
    )
  }
}

export default ContactPage
