import { css } from '@emotion/css';
import { injectGlobal } from '@emotion/css';
import Landing from './components/Landing';
import Projects from './components/Projects';
import { useState } from 'react'

export default function Index() {
  const [isNight, setNight] = useState(true);

  injectGlobal`
    @font-face {
      font-family: 'RubikBold';
      src: local('RubikBold'), url(/fonts/Rubik-Bold.woff) format('woff');
    }

    @font-face {
      font-family: 'OpenSans';
      src: local('OpenSans'), url(/fonts/Opensans.woff) format('woff');
    }

    html, body {
      margin: 0;
      padding: 0;
    }
  `

  const mediaQ: string = '@media (min-width: 900px)';
  const headingStyle: string = css([
    {
      fontFamily: 'RubikBold',
      letterSpacing: '-0.05em',
      fontSize: '52px',
      color: 'white'
    },
    !isNight && {
      color: 'black'
    }
  ]);
  

  return (
    <div className={css([
      {
        backgroundColor: 'rgb(47, 47, 47)'
      },
      !isNight && {
        backgroundColor: 'white'
      }
    ])}>
      <Landing headingStyle={headingStyle} isNight={isNight} setNight={setNight} mediaQ={mediaQ}/>
      <Projects headingStyle={headingStyle} isNight={isNight} mediaQ={mediaQ}/>
    </div>
  )
}
