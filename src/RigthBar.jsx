import React from 'react'
function RightBar() {
  return (
    <aside>
      <section style={{ textAlign: 'center', marginLeft: '15px' }}>
        <p
          style={{
            color: 'black',
            fontFamily: 'impact',
            fontSize: '28px',
            marginBottom: 0,
          }}
        >
          TOP 10
        </p>
        <h2
          style={{
            color: '#005151',
            fontFamily: 'boulevard',
            fontSize: '50px',
            margin: 0,
          }}
        >
          Best Seller
        </h2>
      </section>
      <section>
        <ol className='article2'>
          <li className='seller'>
            <a href='\FINALS\WEBPAGE\annakarerina.html'>
              <p className='seller1'>1. ANNA KARERINA</p>
              <p className='seller2'>by Leo Tolstoy</p>
            </a>
          </li>

          <li className='seller'>
            <a href='\FINALS\WEBPAGE\ifistay.html'>
              <p className='seller1'>2. IF I STAY</p>
              <p className='seller2'>by Gayle Forman</p>
            </a>
          </li>

          <li className='seller'>
            <a href='\FINALS\WEBPAGE\justone.html'>
              <p className='seller1'>3. JUST ONE</p>
              <p className='seller2'>by Gayle Forman</p>
            </a>
          </li>

          <li className='seller'>
            <a href='\FINALS\WEBPAGE\leaveme.html'>
              <p className='seller1'>4. LEAVE ME</p>
              <p className='seller2'>by Gayle Forman</p>
            </a>
          </li>

          <li className='seller'>
            <a href='\FINALS\WEBPAGE\dividedwestand.html'>
              <p className='seller1'>6. DIVIDED WE STAND</p>
              <p className='seller2'>by Marjorie J. Spruill</p>
            </a>
          </li>
          <li className='seller'>
            <a href='\FINALS\WEBPAGE\grant.html'>
              <p className='seller1'>7. GRANT</p>
              <p className='seller2'>by Ron Chernow</p>
            </a>
          </li>

          <li className='seller'>
            <a href='\FINALS\WEBPAGE\thehungergames.html'>
              <p className='seller1'>8. THE HUNGER GAMES</p>
              <p className='seller2'>by Suzanne Collins</p>
            </a>
          </li>

          <li className='seller'>
            <a href='\FINALS\WEBPAGE\harrypotterandtheprisonerofazkaban.html'>
              <p className='seller1'>
                9. HARRY POTTER & THE PRISONER OF AZKABAN
              </p>
              <p className='seller2'>by J.K Rowling</p>
            </a>
          </li>

          <li className='seller'>
            <a href='\FINALS\WEBPAGE\theformula.html'>
              <p className='seller1'>10. THE FORMULA</p>
              <p className='seller2'>by Sam Artigliere</p>
            </a>
          </li>
        </ol>
      </section>
    </aside>
  )
}

export default RightBar
