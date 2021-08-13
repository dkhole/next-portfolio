import { cx, css } from '@emotion/css';
import { useState, useEffect } from 'react'
import CssIcon from '../../public/svgs/css.svg';
import ExpressIcon from '../../public/svgs/expressjs.svg';
import GatsbyIcon from '../../public/svgs/gatsby.svg';
import HerokuIcon from '../../public/svgs/heroku.svg';
import HtmlIcon from '../../public/svgs/html-5.svg';
import NetlifyIcon from '../../public/svgs/netlify.svg';
import NodejsIcon from '../../public/svgs/nodejs.svg';
import PostgresIcon from '../../public/svgs/postgresql.svg';
import ReactIcon from '../../public/svgs/react.svg';
import TsIcon from '../../public/svgs/typescript.svg';
import Live from '../../public/svgs/livePreview.svg';
import Github from '../../public/svgs/github.svg';

export default function Project(props: any) {
    const [icons, setIcons]: any = useState([]);

    useEffect(()=>{
        setIcons(props.icons.map((icon: string) => {
            switch(icon) {
                case 'html':
                    return <HtmlIcon key={0}/>;
                case 'ts':
                    return <TsIcon key={1}/>;
                case 'css':
                    return <CssIcon key={2}/>;
                case 'react':
                    return <ReactIcon key={3}/>;
                case 'gatsby':
                    return <GatsbyIcon key={4}/>;
                case 'express':
                    return <ExpressIcon key={5}/>;
                case 'netlify':
                    return <NetlifyIcon key={6}/>;
                case 'heroku':
                    return <HerokuIcon key={7}/>;
                case 'postgres':
                    return <PostgresIcon key={8}/>;
                case 'node':
                    return <NodejsIcon key={9} />;
                default:
                    return;
            }
        }))
      }, []);

    return (
        <div className={css`
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            height: auto;
            width: calc(80% - 40px);
            border-radius: 30px;
            padding: 0 40px;
            padding-bottom: 40px;
            background-color: white;
            box-shadow: -7px 5px 4px 3px rgba(0, 0, 0, 1);
            text-align: center;
            margin: 40px 0;
    `}>
        <div>
            <h2 className={cx(props.headingStyle, css`
            font-size: 35px;
            color: black;
            letter-spacing: 0;
            margin-bottom: 15px;
            `)}> {props.title}</h2>
            <div className={css`
                display: flex;
                justify-content: center;
                svg {
                    height: 30px;
                    width: 30px;
                    margin: 5px;
                    margin-bottom: 15px;
                }
            `}>
               {icons.length > 0 ? icons.map((icon: any) => icon) : false}
            </div>
            <div className={css`
                font-family: OpenSans;
                font-size: 13px;
                line-height: 22.5px;
                margin: 40px 0;
            `}>
                {props.description}
            </div>
        </div>
        <div>
            <div className={css`
                border: 1px solid black;
                height: 300px;
            `}></div>
            <div className={css`
                display: flex;
                justify-content: space-around;
                margin-top: 25px;
                a {
                    border-radius: 10px;
                    border: 1px solid #CFCFCF;
                    width: 40%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    padding: 5px;
                }
            `}>
                <a href={props.liveLink} title="link to live preview" className={css`
                    background-color: orange;
                    &:hover {
                        background-color: #ffc355;
                    }
                `}>
                    <Live />
                </a>
                <a href={props.gitLink} title="link to git repo" className={css`
                    &:hover {
                        background-color: #dbdbdb;
                    }
                `}>
                    <Github />
                </a>
            </div>
        </div>
    </div>
    )
}
