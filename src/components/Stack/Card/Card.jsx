import React from 'react'
import * as styles from './Card.module.css'

export const Card = ({ title, items }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h4 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h4>
        <div className={styles.icons}>
        {
          items && items.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>
                {item.icon}
              </div>
              <p>
                {item.name}
              </p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}