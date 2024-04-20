import React from 'react'
import { Agile } from './Icons/Agile'
import { Scrum } from './Icons/Scrum'
import { Kanban } from './Icons/Kanban'
import { ExtremeProgramming } from './Icons/ExtremeProgramming'
import { CICD } from './Icons/CICD'
import { TDD } from './Icons/TDD'
import { PairProgramming } from './Icons/PairProgramming'

export const Methodologies = [
  {
    name: 'Agile',
    icon: <Agile/>
  },
  {
    name: 'Scrum',
    icon: <Scrum/>
  },
  {
    name: 'Kanban',
    icon: <Kanban/>
  },
  {
    name: 'XP',
    icon: <ExtremeProgramming/>
  },
  {
    name: 'CI/CD',
    icon: <CICD/>
  },
  {
    name: 'TDD',
    icon: <TDD/>
  },
  {
    name: 'Pair Programming',
    icon: <PairProgramming/>
  }
]
