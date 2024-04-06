import React from 'react'
import * as styles from '../Experience/Experience.module.css'
import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'

export const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experiencia</h2>
      <Timeline className={styles.timeline}>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar}/>
          <Timeline.Content>
            <Timeline.Title className={styles.title}>Desarrollador de Software - <span className={styles.organization}>Lean Mind</span></Timeline.Title>
            <Timeline.Time>Marzo 2021</Timeline.Time>
            <Timeline.Body className={styles.body}>
              En 2021 tuve el honor de ser contratado en el equipo de Carlos Blé, una empresa de desarrollo de software y consultoría.
              En Lean Mind he tenido la oportunidad de trabajar y aprender en equipos de alto rendimiento enfocados en metodologías Agile, especialmente Extreme Programming.
            </Timeline.Body>
              <Button className={styles.button} as={'a'} href={'https://www.leanmind.es/es/'} color='gray'>
                Learn More
                <HiArrowNarrowRight className='ml-2 h-3 w-3' />
              </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title className={styles.title}>Estudiante Bootcamp Fullstack - <span className={styles.organization}>Escuela de Organización Industrial</span></Timeline.Title>
            <Timeline.Time>Septiembre 2020</Timeline.Time>
            <Timeline.Body className={styles.body}>
              Inscripción en la <a href='https://www.eoi.es/es/cursos/90441/curso-de-programacion-fullstack-presencia-virtual-online-tenerife-5a-edicion'>5ª edición</a> del Curso de Programación Fullstack de la EOI dirigido por <a href='https://manz.dev/'>ManzDev</a>.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title className={styles.title}>Estudiante Ciclo Superior - <span className={styles.organization}>CIFP Cesar Manrique</span></Timeline.Title>
            <Timeline.Time>Septiembre 2018</Timeline.Time>
            <Timeline.Body className={styles.body}>
              Estudio de DAM en el CIFP Cesar Manrique, Santa Cruz de Tenerife.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </section>
  )
}
