export default function Tag(props) {
  const {colorTag, nameTag} = props;
  return(
    <span className='tag-cards-projects' style={{backgroundColor: `${colorTag}`}}>
      {nameTag}
    </span>
  )
}