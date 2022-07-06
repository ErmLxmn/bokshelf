import React from 'react'

function Footer() {
  return (
    <footer style={{ display: 'flex' }}>
      <div className='title' style={{ textAlign: 'left', marginTop: '1%' }}>
        <a href='./index.html'>
          <img
            className='bookshelf'
            src='./images/LOGO/LOGO.png'
            style={{ padding: '5%' }}
          />
        </a>
      </div>
      <div>
        <ul className='menu2'>
          <li className='icon'>
            <div>
              <a className='FB' href='#'>
                <img height='30' src='./images/ICONS/FB.png'></img>
              </a>
            </div>
            <div>
              <a className='TW' href='#'>
                <img height='30' src='./images/ICONS/TW.png'></img>
              </a>
            </div>
            <div>
              <a className='INS' href='#'>
                <img height='30' src='./images/ICONS/INS.png'></img>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
