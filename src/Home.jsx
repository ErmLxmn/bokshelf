import React from 'react'
import HomeBook from './HomeBook'

function Home() {
  return (
    <main>
      <section>
        <div className='article1'>
          <img src='.\images\ICONS\ART1.png' />
        </div>

        <div className='article2'>
          <HomeBook
            src='.\images\BOOKS\_READERS%20CHOICE\1A.jpg'
            title='DIARY OF A YOUNG GIRL'
            author='Aljon Laxamana'
            link='\FINALS\WEBPAGE\diaryofayounggirl.html'
          />
          <HomeBook
            src='\images\BOOKS\_READERS%20CHOICE\5A.jpg'
            title='TO KILL A MOCKINGBIRD'
            author='Harper Lee'
            link='\FINALS\WEBPAGE\tokillamockingbird.html'
          />
          <HomeBook
            src='.\images\BOOKS\_READERS%20CHOICE\7A.jpg'
            title='PRIDE AND PREJUDICE'
            author='Jane Austen'
            link='\FINALS\WEBPAGE\prideandprejudice.html'
          />
          <HomeBook
            src='\images\BOOKS\_READERS%20CHOICE\5A.jpg'
            title='AS OLD AS TIME'
            author='Liz Brazwell'
            link='\FINALS\WEBPAGE\asoldastime.html'
          />
        </div>

        <div style={{ clear: 'both' }}></div>
      </section>
      <section>
        <div className='article1'>
          <img src='.\images\ICONS\ART2.png' />
        </div>

        <div className='article2'>
          <div className='book'>
            <a
              className='content1'
              href='\FINALS\WEBPAGE\timetravelerswife.html'
            >
              <img src='.\images\BOOKS\_TIME%20FANTASY\T1.jpg' />
              <p className='title_des1'>THE TIME TRAVELLER'S WIFE</p>
              <p className='title_des2'>Audrey Niffenegger</p>
            </a>
          </div>
          <div className='book'>
            <a className='content1' href='\FINALS\WEBPAGE\outlander.html'>
              <img src='.\images\BOOKS\_TIME%20FANTASY\T2.jpg' />
              <p className='title_des1'>OUTLANDER</p>
              <p className='title_des2'>Diana Gabaldon</p>
            </a>
          </div>
          <div className='book'>
            <a className='content1' href='\FINALS\WEBPAGE\thetimemachine.html'>
              <img src='.\images\BOOKS\_TIME%20FANTASY\T3.jpg' />
              <p className='title_des1'>THE TIME MACHINE</p>
              <p className='title_des2'>H. G. Wells</p>
            </a>
          </div>
          <div className='book'>
            <a
              className='content1'
              href='\FINALS\WEBPAGE\eleventwetytwosixtythree.html'
            >
              <img src='.\images\BOOKS\_TIME%20FANTASY\T4.jpg' />
              <p className='title_des1'>11/22/63</p>
              <p className='title_des2'>Stephen King</p>
            </a>
          </div>
        </div>

        <div style={{ clear: 'both' }}></div>
      </section>
      <section>
        <div className='article1'>
          <img src='.\images\ICONS\ART3.png' />
        </div>

        <div className='article2'>
          <div className='book'>
            <a className='content1' href='\FINALS\WEBPAGE\bittersweetlove.html'>
              <img src='.\images\BOOKS\_POETRY/P1.jpg' />
            </a>
            <p className='title_des1'>BITTER SWEET LOVE</p>
            <p className='title_des2'>Michael Faudet</p>
          </div>
          <div className='book'>
            <a className='content1' href='\FINALS\WEBPAGE\iftheycomeforus.html'>
              <img src='.\images\BOOKS\_POETRY/P2.jpg' />
            </a>
            <p className='title_des1'>IF THEY COME FOR US</p>
            <p className='title_des2'>Fatima Asghar</p>
          </div>
          <div className='book'>
            <a className='content1' href='\FINALS\WEBPAGE\ilovemylove.html'>
              <img src='.\images\BOOKS\_POETRY/P3.jpg' />
            </a>
            <p className='title_des1'>I LOVE MY LOVE</p>
            <p className='title_des2'>Reyna Biddy</p>
          </div>
          <div className='book'>
            <a
              className='content1'
              href='\FINALS\WEBPAGE\ihopemyvoicedoesntskip.html'
            >
              <img src='.\images\BOOKS\_POETRY/P4.jpg' />
            </a>
            <p className='title_des1'>I HOPE MY VOICE DOES'NT SKIP</p>
            <p className='title_des2'>Alicia Cook</p>
          </div>
        </div>

        <div style={{ clear: 'both' }}></div>
      </section>
    </main>
  )
}

export default Home
