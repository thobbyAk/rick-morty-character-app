import React from "react";
import PropTypes from "prop-types";

const PageNumber = ({
	pages,
	onPageChange,
	currentPage,
	maxPageLimit,
	minPageLimit,
}) => {
	return (
		<>
			{pages.map((page, index) => (
				<React.Fragment key={index}>
					{page <= maxPageLimit && page > minPageLimit && (
						<span
							aria-current="page"
							onClick={() => onPageChange(page)}
							className={
								currentPage == page
									? `relative cursor-pointer  z-10 inline-flex items-center border border-gray-300   px-4 py-2 text-sm font-medium text-cyan-600 focus:z-20`
									: `relative cursor-pointer  z-10 inline-flex items-center border border-gray-300   px-4 py-2 text-sm font-medium text-gray-200 focus:z-20`
							}
						>
							{page}
						</span>
					)}
				</React.Fragment>
			))}
		</>
	);
};

PageNumber.propTypes = {
	pages: PropTypes.array,
	onPageChange: PropTypes.func,
	currentPage: PropTypes.number,
	maxPageLimit: PropTypes.number,
	minPageLimit: PropTypes.number,
};

export default PageNumber;
