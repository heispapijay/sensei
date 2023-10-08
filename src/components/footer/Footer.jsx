import React from 'react';
import './footer.css';

import playbutton from '../../assets/playbutton.svg';

function Footer() {
  return (
    <div className='sensei_footer'>
      <div>
        <a className='sensei_footer_pp' href='http://www.youtube.com'>
        <button><img src={playbutton} alt='button'/></button>
        <p>How Sensei Works</p></a>
      </div>
    </div>
  )
}

export default Footer
