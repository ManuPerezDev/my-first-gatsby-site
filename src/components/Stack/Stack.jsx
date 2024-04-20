import React from 'react'
import * as styles from './Stack.module.css'
import { Card } from './Card/Card'
import { Backend } from './StackInfo/Backend'
import { Frontend } from './StackInfo/Frontend'
import { Tools } from './StackInfo/Tools'
import { Methodologies } from './StackInfo/Methodologies'

export const Stack = () => {
  return (
    <section>
      <h2>Stack</h2>
      <div className={styles.cards}>
        <Card title={'Backend'} items={Backend}/>
        <Card title={'Frontend'} items={Frontend}/>
        <Card title={'Tools'} items={Tools}/>
        <Card title={'Methodologies'} items={Methodologies}/>
      </div>
    </section>
  )
}
