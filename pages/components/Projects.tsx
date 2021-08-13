import { cx, css } from '@emotion/css';
import Project from './Project';

export default function Projects(props: any) {
    return (
        <div className={css`
            text-align: center;
        `}>
            <h1 className={cx(props.headingStyle, css`margin-bottom: 20px`)}>Projects</h1>
            <div className={css`
                display: flex;
                align-items: center;
                flex-direction: column;
        `}>
                <Project title="Physiotherapy Landing Site" headingStyle={props.headingStyle} liveLink="https://www.google.com" icons={['html', 'css', 'react', 'gatsby', 'netlify']} description="Mobile-first design using Figma to prototype and developed using Gatsby.js to optimize images and improve SEO. Fully fit with Netlify CMS giving client the freedom to customize content. Hosted on netlify. I will probably stick to next js for future projects as it feels cleaner than Gatsby's plugin ecosystem"/>
                <Project title="Web Scraper" headingStyle={props.headingStyle} liveLink="https://www.google.com" icons={['html', 'css', 'node']} description="Command line tool to scrape a website, extract the data to .csv and email to user. Also worked on an automated messaging tool for the same start-up. Wrote documentation intended for non-technical users: https://bit.ly/3uP2Z1s"/>
            </div>
        </div>
    )
}
