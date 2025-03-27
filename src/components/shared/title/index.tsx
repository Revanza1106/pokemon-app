import React from 'react'
import {TitlePageProps} from './types'
import './TitlePage.scss'


const TitlePage: React.FC<TitlePageProps>= ({title}) => {
  return (
    <div>
        <h2 className='title-page'>{title}</h2>
    </div>
  )
}

export default TitlePage