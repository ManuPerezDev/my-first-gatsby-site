import React from 'react'
import CustomTag from './customTag'
import { tagsDictionary } from './tagsDictionary'

export function getMyTag(text) {
  const platform = tagsDictionary[text.toLowerCase()]
  if (!platform) return null
  return <CustomTag text={text} bgColor={platform.bgColor} icon={platform.icon}/>
}
