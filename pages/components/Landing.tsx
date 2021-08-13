import { cx, css } from '@emotion/css';
import Face from './Face';
import Github from '../../public/svgs/github.svg';
import Light from '../../public/svgs/light.svg';

export default function Landing(props: any) {

    return (
        <div className={css`
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}>
            <Light onClick={() => { props.isNight ? props.setNight(false) : props.setNight(true)}} className={css([
                {
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                    height: '45px',
                    width: '45px',
                    cursor: 'pointer',
                    'path:first-child': {
                        fill: 'orange'
                    },
                    'path:last-child': {
                        fill: 'grey'
                    }
                },
                !props.isNight && {
                    'path:first-child': {
                        fill: 'white'
                    }
                }
            ])}/>
            <h1 className={cx(props.headingStyle, css([
                !props.isNight && {
                    color: 'black',
                }
            ]))}>Daniel J
                <span className={css`
                    color: orange
                `}>
                    .
                </span> Lee
            </h1>
            <button className={css`
                height: 40px;
                width: 150px;
                background-color: orange;
                border: none;
                box-shadow: 0 4px 4px rgba(0, 0, 0, 0.55);
                color: white;
                font-family: RubikBold;
                font-size: 14px;
                font-weight: 800;
                letter-spacing: 1px;
                text-shadow: 1px 1px #000000;
                cursor: pointer;
                margin-bottom: 80px;
                &:hover {
                    background-color: #ffc355;
                }
            `}>Projects</button>
            <Face isNight={props.isNight}/>
            <a title="link to github page" className={css`
                cursor: pointer;
                &:hover {
                    fill: orange;
                }
            `}>
                <Github className={css`
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    height: 40px;
                    width: 40px;
                `}/>
            </a>
        </div>
    )
}
