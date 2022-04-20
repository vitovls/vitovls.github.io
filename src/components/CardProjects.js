import listProjects from '../list-projects.json'
import Tag from '../components/Tags'
import Image from 'next/image'

export default function CardProjects({props}) {
  return (
    listProjects.map((project, index) => {
      return (
        <section key={`Projeto Nº ${index}`} className='container-project-card'> 
          <section>
            <a target='_blank' href={`${project.gitHubUrl}`} rel="noreferrer">
              <Image width='350px' height='230px' alt={`Miniatura do Projeto: ${project.name}`} className='image-project-card' src={project.imageUrl}/>
              <article className='description-project-card'>
                <h1 className='headling-project-card'>{project.name}</h1>
                <p className='paragraph-project-card'>{project.about}</p>
                <section className='section-tags-project-card'>
                  {project.stacks.map((stacks, index) => <Tag key={`Stack Nº ${index}`} nameTag={stacks.stackName} colorTag={stacks.brandColor}/>)}
                </section>
              </article>
            </a>
          </section>
          </section>
      )
    })
  )
}