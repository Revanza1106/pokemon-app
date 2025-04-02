import React from 'react'
import {TitlePageProps} from './types'
import './styles.scss'


const TitlePage: React.FC<TitlePageProps>= ({title}) => {
  return (
    <div>
        <h2 className='title-page'>{title}</h2>
    </div>
  )
}

export default TitlePage