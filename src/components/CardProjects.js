import Link from 'next/link'
import react from 'react'
import listProjects from '../list-projects.json'
import Tag from '../components/Tags'

export default function CardProjects({props}) {
  return (
    listProjects.map((project) => {
      return (
        <>
          <a target='_blank' href={`${project.gitHubUrl}`}>
            <section className='container-project-card'>
              <img className='image-project-card' src={`${project.imageUrl}`} /> 
              <article className='description-project-card'>
                <h1 className='headling-project-card'>{project.name}</h1>
                <p className='paragraph-project-card'>{project.about}</p>
                <section className='section-tags-project-card'>
                  {project.stacks.map((stacks) => <Tag nameTag={stacks.stackName} colorTag={stacks.brandColor}/>)}
                </section>
              </article>
            </section>
          </a>
        </>
      )
    })
  )
}