import React from 'react'
import { MdSettings } from 'react-icons/md'
import {
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react'
import { getMyTag } from './tags/getMyTag'

const MyTag = ({ text }) => {
  const myTag = getMyTag(text)

  return (myTag || <Tag size='md' colorScheme='facebook'>
    <TagLeftIcon boxSize='12px' as={MdSettings}/>

    <TagLabel>{text}</TagLabel>
  </Tag>)
}

export default MyTag
