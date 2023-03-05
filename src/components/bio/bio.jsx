import * as React from 'react'
import { bioInfo } from './bioInfo'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box, Text
} from '@chakra-ui/react'
import MyTag from '../tag/myTag'
export const Bio = () => {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        {bioInfo().map(element => {
          return (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {element.year} - {element.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>{element.info}</Text>
                {element.tools.map(tag => <MyTag text={tag}/>)}
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
