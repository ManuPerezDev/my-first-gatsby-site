import React from 'react'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton
} from 'react-share'

import * as styles from './share-buttons.module.css'

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaReddit, FaWhatsappSquare } from 'react-icons/fa'

const ShareButtons = ({ title, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <FacebookShareButton url={url} >
          <FaFacebookSquare fontSize='1.5em'/>
        </FacebookShareButton>
      </div>

      <div className={styles.button}>
        <TwitterShareButton url={url} title={title}>
          <FaTwitterSquare fontSize='1.5em'/>
        </TwitterShareButton>
      </div>

      <div className={styles.button}>
        <LinkedinShareButton url={url} >
          <FaLinkedin fontSize='1.5em'/>
        </LinkedinShareButton>
      </div>

      <div className={styles.button}>
        <RedditShareButton url={url} title={title} >
          <FaReddit fontSize='1.5em'/>
        </RedditShareButton>
      </div>

      <div className={styles.button}>
        <WhatsappShareButton url={url} title={title}>
          <FaWhatsappSquare fontSize='1.5em'/>
        </WhatsappShareButton>
      </div>
    </div>
  )
}
export default ShareButtons
