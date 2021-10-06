import { cx, css } from "@emotion/css";
import { useState, useEffect } from "react";
import { CssIcon, ExpressIcon, GatsbyIcon, HerokuIcon, HtmlIcon, NetlifyIcon, NodejsIcon, PostgresIcon, ReactIcon, TsIcon, Live, Github, Next } from "../../public/svgs";

export default function Project(props: any) {
	const [icons, setIcons]: any = useState([]);
	const [previewImg, setPreviewImg]: any = useState();

	useEffect(() => {
		setIcons(
			props.icons.map((icon: string) => {
				switch (icon) {
					case "html":
						return <HtmlIcon key={0} />;
					case "ts":
						return <TsIcon key={1} />;
					case "css":
						return <CssIcon key={2} />;
					case "react":
						return <ReactIcon key={3} />;
					case "gatsby":
						return <GatsbyIcon key={4} />;
					case "express":
						return <ExpressIcon key={5} />;
					case "netlify":
						return <NetlifyIcon key={6} />;
					case "heroku":
						return <HerokuIcon key={7} />;
					case "postgres":
						return <PostgresIcon key={8} />;
					case "node":
						return <NodejsIcon key={9} />;
					case "next":
						return <Next key={10} />;
					default:
						return;
				}
			})
		);
	}, []);

	return (
		<div
			className={css(
				{
					border: "1px solid black",
					display: "flex",
					flexDirection: "column",
					height: "auto",
					width: "calc(80% - 40px)",
					borderRadius: "30px",
					padding: "0 40px",
					paddingBottom: "40px",
					backgroundColor: "white",
					boxShadow: "-7px 5px 4px 3px rgba(0, 0, 0, 1)",
					textAlign: "center",
					margin: "40px 0",
					[props.mediaQ]: {
						width: "900px",
						flexDirection: "row",
					},
				},
				!props.isNight && {
					border: "none",
					boxShadow: "-7px 5px 4px 3px rgba(0, 0, 0, 0.1)",
				}
			)}
		>
			<div
				className={css({
					[props.mediaQ]: {
						width: "50%",
					},
				})}
			>
				<h2
					className={cx(
						props.headingStyle,
						css`
							font-size: 35px;
							color: black;
							letter-spacing: 0;
							margin-bottom: 15px;
						`
					)}
				>
					{" "}
					{props.title}
				</h2>
				<div
					className={css`
						display: flex;
						justify-content: center;
						svg {
							height: 30px;
							width: 30px;
							margin: 5px;
							margin-bottom: 15px;
							transition: all 0.25s;
						}
						svg:hover {
							height: 35px;
							width: 35px;
							margin-bottom: 10px;
						}
					`}
				>
					{icons.length > 0 ? icons.map((icon: any) => icon) : false}
				</div>
				<div
					className={css`
						font-family: OpenSans;
						font-size: 13px;
						line-height: 22.5px;
						margin: 40px 0;
					`}
				>
					{props.description}
				</div>
			</div>
			<div
				className={css({
					[props.mediaQ]: {
						width: "50%",
						paddingTop: "40px",
						paddingLeft: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					},
				})}
			>
				<div
					className={css`
						position: relative;
						height: 300px;
						${props.mediaQ} {
							height: 200px;
							width: 350px;
						}
					`}
				>
					{props.image}
				</div>
				<div
					className={css`
						display: flex;
						justify-content: space-around;
						margin-top: 25px;
						a {
							border-radius: 10px;
							border: 1px solid #cfcfcf;
							width: 40%;
							display: flex;
							align-items: center;
							justify-content: center;
							cursor: pointer;
							padding: 5px;
						}
						${props.mediaQ} {
							width: 80%;
						}
					`}
				>
					<a
						href={props.liveLink}
						title="link to live preview if available"
						className={css`
							background-color: orange;
							&:hover {
								background-color: #ffc355;
							}
						`}
					>
						<Live />
					</a>
					<a
						href={props.gitLink}
						title="link to git repo"
						className={css`
							&:hover {
								background-color: #dbdbdb;
							}
						`}
					>
						<Github />
					</a>
				</div>
			</div>
		</div>
	);
}
