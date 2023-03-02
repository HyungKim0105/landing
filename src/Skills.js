import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faBootstrap, faGit, faPython, faAws } from '@fortawesome/free-brands-svg-icons'
import React from 'react'


const Skills = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faBootstrap} />
        <FontAwesomeIcon icon={faGit} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faAws} />
      </div>
      <div>
        <h1>Certifications</h1>
      </div>
    </div>
  )
}

export default Skills
