import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle
} from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'
import * as styles from '../Experience/Experience.module.css'
import { GradientButton } from '../GradientButton/GradientButton'
import { experienceInfo } from './ExperienceInfo'

export const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experiencia</h2>
      <Timeline className={styles.timeline}>
        {experienceInfo().map(experience => {
          return (
            <TimelineItem key={experience.title}>
              <TimelinePoint icon={HiCalendar} />
              <TimelineContent>
                <TimelineTitle className={styles.title}>{experience.title}</TimelineTitle>
                <TimelineTime>{experience.time}</TimelineTime>
                <TimelineBody className={styles.body}>
                  {experience.body.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </TimelineBody>
                {experience.learnMoreLink && (
                  <GradientButton gradient='purpleToBlue' className={styles.button} href={experience.learnMoreLink}>
                    {experience.buttonDescription}
                    <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                  </GradientButton>
                )}
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </section>
  )
}
