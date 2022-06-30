import React from 'react'

function Header() {
  return (
    <header>
      <div className='title'>
        <a href='./index.html'>
          <img className='bookshelf' src='./images/LOGO/LOGO.png' />
        </a>
      </div>

      <div className='title'>
        <div className='add1'>
          <p
            style={{
              fontFamily: 'calibri',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
          >
            Hi, Guest !&nbsp;&nbsp;
            <a href='#'>Sign In</a>
          </p>
        </div>

        <div className='add3'>
          <input type='text' placeholder='Title, Author, etc..' />
          <a href='#search'>
            <button>Search</button>
          </a>
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
      <div className='sticky'>
        <nav>
          <ul className='menu1'>
            <li>
              <a className='active' href='./index.html'>
                HOME
              </a>
            </li>
            <li className='dropdown'>
              <a href='' className='dropbtn'>
                CATEGORY{' '}
              </a>
              <div className='dropdown-content'>
                <a href='#'>FICTION</a>
                <a href='#'>NON-FICTION</a>
                <a href='#'>BOOK REFERENCES</a>
              </div>
            </li>
            <li>
              <a href='#'>BEST SELLERS</a>
            </li>
            <li>
              <a href='#'>NEW ARRIVALS</a>
            </li>
            <li>
              <a href='#'> DEALS</a>
            </li>
          </ul>

          <ul className='menu2'>
            <li className='icon'>
              <a className='FB' href='#'>
                <img src='./images/ICONS/FB.png'></img>
              </a>

              <a className='TW' href='#'>
                <img src='./images/ICONS/TW.png'></img>
              </a>

              <a className='INS' href='#'>
                <img src='./images/ICONS/INS.png'></img>
              </a>
            </li>
          </ul>
          <ul style={{ clear: 'both' }}></ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
