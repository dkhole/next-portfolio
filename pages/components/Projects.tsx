import { cx, css } from "@emotion/css";
import Project from "./Project";
import { cli, games, noname, physio } from "../../public/imgs";
import Image from "next/image";

export default function Projects(props: any) {
	return (
		<div id="projects">
			<div
				className={css`
					text-align: center;
				`}
			>
				<h1
					className={cx(
						props.headingStyle,
						css`
							margin-bottom: 20px;
						`
					)}
				>
					Projects
				</h1>
				<div
					className={css`
						display: flex;
						align-items: center;
						flex-direction: column;
					`}
				>
					<Project
						mediaQ={props.mediaQ}
						isNight={props.isNight}
						title="E-Commerce"
						headingStyle={props.headingStyle}
						gitLink="https://github.com/dkhole/noname"
						icons={["html", "css", "react", "next", "ts"]}
						image={<Image src={noname} alt="Preview of project" layout="fill" objectFit="contain" />}
						description="Currently building an online store for a client using Nextjs with TS for the front-end, emotion css for css-in-JS and shopify for the backend. After considering my options I realised this was the most flexible stack that was both cheap, not too labour intensive and provided my client with full backend capabilities such as product management. Core website is complete but still waiting on the client to provide a few more pages and a domain name. Was using typescript previously but fell in love with it after this project."
					/>
					<Project
						mediaQ={props.mediaQ}
						isNight={props.isNight}
						title="Web Scraper/Puppeteer CLI Tools"
						headingStyle={props.headingStyle}
						gitLink="https://github.com/dkhole/gum-scrape.git"
						icons={["html", "css", "node"]}
						image={<Image src={cli} alt="Preview of project" layout="fill" objectFit="contain" />}
						description="Client wanted a way to scrape data from gumtree to analyse trends in the furniture category so i created this webscraper using node js to scrape and email data in a csv format to the client. Good experiece having to work with and document for non-technical users: https://bit.ly/3uP2Z1s. The Puppeteer tool was a way to programatically login to gumtree and send messages to selected users a similar version to this is available on my github under auto-msg."
					/>
					<Project
						mediaQ={props.mediaQ}
						isNight={props.isNight}
						title="Physiotherapy Business Website"
						headingStyle={props.headingStyle}
						liveLink="https://www.movement-mechanics.com.au/"
						gitLink="https://github.com/dkhole/physio-cms.git"
						icons={["html", "css", "react", "gatsby", "netlify"]}
						image={<Image src={physio} alt="Preview of project" layout="fill" objectFit="contain" />}
						description="Initially designed using Figma and then developed mobile-first using Gatsby.js. Client wanted control over the content but not the styling so i chose to use Netlify CMS for ease of setup. This project was started a while ago when Gatsby was known to be better for SEO but if i was to do it again i would choose Nextjs."
					/>
					<Project
						mediaQ={props.mediaQ}
						isNight={props.isNight}
						title="Game Development"
						headingStyle={props.headingStyle}
						gitLink="https://github.com/dkhole/pixel"
						icons={[]}
						image={<Image src={games} alt="Preview of project" layout="fill" objectFit="contain" />}
						description="I like to dabble in game development during my free time. I currently use Unity for 3D and Godot for 2D but want to transition away from Unity to Unreal. Game development has been a real driving force behind my learning as it???s helped me get comfortable with more advanced topics giving me the confidence and practice when dealing with more difficult problems."
					/>
				</div>
			</div>
		</div>
	);
}
