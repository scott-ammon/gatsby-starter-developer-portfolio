import React, { Component } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

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
        <div className="container">
          <h1>Let's Work Together</h1>
          <p>Don't hesitate to reach out.</p>
          <Form method="POST"
                action=""
                name="info-form"
          >
            <label>*Full Name</label>
            <input
              name="name"
              type="text"
              required
            />
            <label>*Email</label>
            <input
              name="email"
              type="text"
              required
            />
            <label>Phone</label>
            <input
              name="phone"
              type="text"
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
            />
            <p>*Indicates required field</p>
            <button>Submit</button>
          </Form>
        </div>
      </Layout>
    )
  }
}

export default ContactPage

const Form = styled.form`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    display: inline-block;
    margin: 0 0 1rem 0;
    border-radius: 3px;
    border: 1px solid #ccc;
    background: #FAFAFA;
    outline: none;
  }
  input {
    width: 300px;
    height: 40px;
  }
  textarea {
    width: 600px;
    height: 200px;
  }
  input:focus,
  textarea:focus {
    background: #fff;
  }
  button {
    background: #2C5364;
    color: white;
    border-radius: 3px;
    border: none;
    padding: .75rem 1.5rem;
    margin-bottom: 3rem;
  }
  button:hover {
    opacity: 0.7;
  }
  select {
    margin-bottom: 1rem;
    width: 300px;
    height: 40px;
    border: 1px solid #ccc;
    background: #FAFAFA;
    font-family: 'Open Sans';
    outline: none;
  }
  option {
    font-family: 'Open Sans';
  }
  @media (max-width: 550px) {
    input,
    textarea,
    select {
      width: 100%;
    }
  }
`;