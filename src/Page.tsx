import Header from "./Header";
import "./Page.scss";

interface Props {
	children: React.ReactNode
}

export default function Page(props: Props) {
	return (
		<div className="Page">
			<Header />
			<div className="Page-content">
				{props.children}
			</div>
		</div>
	)
}