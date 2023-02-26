import React from 'react'
import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'

const CustomTag = ({ text, bgColor, icon }) => {
  return (
    <Tag size='md' bgColor={bgColor} color={'#FFFFFF'}>
      <TagLeftIcon boxSize='12px' as={icon} />

      <TagLabel>{text}</TagLabel>
    </Tag>
  )
}
export default CustomTag
