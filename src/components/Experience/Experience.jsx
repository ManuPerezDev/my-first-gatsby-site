import React from 'react'
import * as styles from '../Experience/Experience.module.css'
import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'
import { experienceInfo } from './ExperienceInfo'

export const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experiencia</h2>
      <Timeline className={styles.timeline}>
        {
          experienceInfo().map((experience, index) => {
            return (
              <Timeline.Item key={index}>
                <Timeline.Point icon={HiCalendar}/>
                <Timeline.Content>
                  <Timeline.Title className={styles.title}>{experience.title}</Timeline.Title>
                  <Timeline.Time>{experience.time}</Timeline.Time>
                  <Timeline.Body className={styles.body}>
                    {experience.body}
                  </Timeline.Body>
                  {experience.learnMoreLink &&
                  <Button gradientDuoTone='purpleToBlue' className={styles.button} as={'a'} href={experience.learnMoreLink}>
                    {experience.buttonDescription}
                    <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                  </Button>
                  }
                </Timeline.Content>
              </Timeline.Item>
            )
          })
        }
      </Timeline>
    </section>
  )
}
