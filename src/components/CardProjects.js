import Link from 'next/link'
import react from 'react'
import listProjects from '../list-projects.json'
import Tag from '../components/Tags'

export default function CardProjects({props}) {
  // const url = 'https://raw.githubusercontent.com/vitovls/TFC-Trybe-Futebol-Club/main/front-example.png'
  // return (
  //     <section className='container-project-card'>
  //       <span className='image-project-card' style={{
  //         backgroundImage: `url(${(url)})`
  //       }}></span>
  //       <article className='texts-project-card'>
  //         <h1>Title Project</h1>
  //         <p>About the Project</p>
  //       </article>
  //     </section>
  // )
  return (
    listProjects.map((project) => {
      return (
        <>
          <Link href={`${project.gitHubUrl}`}>
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
          </Link>
        </>
      )
    })
  )
}