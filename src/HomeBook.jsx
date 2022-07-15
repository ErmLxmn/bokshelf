import React from 'react'

function HomeBook(props) {
  console.log(props)
  return (
    <div className='book'>
      <a className='content1' href={props.link}>
        <img src={props.src} />
        <p className='title_des1'>{props.title}</p>
        <p className='title_des2'>{props.author}</p>
      </a>
    </div>
  )
}

export default HomeBook
