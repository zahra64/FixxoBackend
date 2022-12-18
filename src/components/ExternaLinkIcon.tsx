import React from 'react'

interface ExternaLinkIconType {
  link: string
  icon: string
}
const ExternaLinkIcon: React.FC<ExternaLinkIconType> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternaLinkIcon