import React from "react";
import {
	ArrowLongLeftIcon,
	Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import Rick_and_Morty from "../assets/images/Rick-and-Morty.png";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ sidebarOpen }) => {
	const location = useLocation();
	const navigate = useNavigate();

	function goHome() {
		navigate(`/`);
	}
	return (
		<div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-gray-900 shadow">
			<button
				type="button"
				className=" border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
				onClick={() => sidebarOpen(true)}
			>
				<span className="sr-only">Open sidebar</span>
				<Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
			</button>
			{location.pathname !== "/" && (
				<div
					onClick={() => navigate(-1)}
					className="flex flex-row items-center cursor-pointer text-sm text-white"
				>
					<ArrowLongLeftIcon color="#ffffff" width={20} />
					Back
				</div>
			)}

			<div className="flex flex-1 justify-center px-4">
				<div
					className="cursor-pointer"
					onClick={() => {
						goHome();
					}}
				>
					<img src={Rick_and_Morty} className="w-28" alt="logo" />
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	sidebarOpen: PropTypes.func,
};

export default Header;
