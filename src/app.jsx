import { Outlet } from "react-router-dom";

export default function App() {
	return (
		<div className="app">
			<header className="app-header container-fluid pt-1 text-center bg-secondary">
				<h1>
					<a href="/" className="text-light text-decoration-none">
						Wikipebia
					</a>
					<Outlet />
				</h1>
			</header>
		</div>
	);
}
