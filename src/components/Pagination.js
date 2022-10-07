import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { range } from "../lib/utils";
import PageNumber from "./PageNumber";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
	const pageNumberLimit = 10;
	const pagesCount = Math.ceil(total / limit);
	const [pages] = useState(range(1, pagesCount));
	const [minPageLimit, setMinPageLimit] = useState(0);
	const [maxPageLimit, setMaxPageLimit] = useState(10);

	const onNext = () => {
		if (currentPage + 1 > maxPageLimit) {
			setMaxPageLimit(maxPageLimit + pageNumberLimit);
			setMinPageLimit(minPageLimit + pageNumberLimit);
		}
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageLimit(maxPageLimit - pageNumberLimit);
			setMinPageLimit(minPageLimit - pageNumberLimit);
		}
		onPageChange(currentPage - 1);
	};

	let pageIncrementEllipses = null;
	if (pages.length > 10) {
		pageIncrementEllipses = (
			<li className="list-none text-white" onClick={onNext}>
				&hellip;
			</li>
		);
	}
	let pageDecremenEllipses = null;
	if (minPageLimit >= 1) {
		pageDecremenEllipses = (
			<li className="list-none text-white" onClick={onPrevious}>
				&hellip;
			</li>
		);
	}

	return (
		<div className="flex items-center justify-between bg-dark px-4 py-3 sm:px-6">
			<div className="flex flex-1 justify-between sm:hidden">
				<span
					onClick={onPrevious}
					className="relative cursor-pointer  inline-flex items-center rounded-md border border-gray-300 bg-teal-500 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Previous
				</span>
				<span
					onClick={onNext}
					className="relative cursor-pointer  ml-3 inline-flex items-center rounded-md border border-gray-300 bg-teal-500 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Next
				</span>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						<span
							onClick={onPrevious}
							className="relative cursor-pointer  inline-flex items-center rounded-l-md border border-gray-300 bg-dark px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
						>
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
						</span>
						{pageDecremenEllipses && (
							<span className="relative  cursor-pointer inline-flex items-center rounded-r-md border border-gray-300 bg-dark px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
								{pageDecremenEllipses}
							</span>
						)}

						<PageNumber
							onPageChange={onPageChange}
							pages={pages}
							maxPageLimit={maxPageLimit}
							minPageLimit={minPageLimit}
							currentPage={currentPage}
						/>
						{pageIncrementEllipses && (
							<span className="relative  cursor-pointer inline-flex items-center rounded-r-md border border-gray-300 bg-dark px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
								{pageIncrementEllipses}
							</span>
						)}

						<span
							onClick={onNext}
							className="relative  cursor-pointer inline-flex items-center rounded-r-md border border-gray-300 bg-dark px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
						>
							<span className="sr-only">Next</span>
							<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
						</span>
					</nav>
				</div>
			</div>
		</div>
	);
};

Pagination.propTypes = {
	onPageChange: PropTypes.func,
	currentPage: PropTypes.number,
	total: PropTypes.number,
	limit: PropTypes.number,
};

export default Pagination;
