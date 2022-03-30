import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-container'>
          <h3>Connect with me</h3>
          <ul class="social-links">
            <li class="links-item">
                <i class="fa fa-github" aria-hidden="true"></i>
            </li>
            <li class="links-item">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
            </li>
            <li class="links-item">
                <i class="fa fa-twitter" aria-hidden="true"></i>
            </li>
          </ul>
          <ul className='d-flex gap-1'>
              <li className='grey-color cursor-pointer'>Home</li>
              <li className='grey-color cursor-pointer'>Services</li>
              <li className='grey-color cursor-pointer'>About</li>
              <li className='grey-color cursor-pointer'>Terms</li>
              <li className='grey-color cursor-pointer'>Privacy policy</li>
          </ul>
          <span className='light-text'>made by Haresh kotkar</span>
    </footer>
  )
}

export default Footer