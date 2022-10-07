import React from "react";
import CharacterCard from "../components/CharacterCard";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import EmptyState from "../components/EmptyState";
import PropTypes from "prop-types";

const Index = ({ characters, currentPage, setCurrentPage, total }) => {
	let navigate = useNavigate();
	function viewCharacter(id) {
		navigate(`/${id}`);
	}

	if (characters?.length > 0)
		return (
			<>
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{characters.map((details) => (
						<CharacterCard
							key={details.id}
							details={details}
							viewCharacter={viewCharacter}
						/>
					))}
				</div>
				{characters?.length >= 20 && (
					<Pagination
						currentPage={currentPage}
						total={total}
						limit={20}
						onPageChange={setCurrentPage}
					/>
				)}
			</>
		);
	if (characters?.length === 0) {
		return <EmptyState />;
	}
};
Index.propTypes = {
	characters: PropTypes.array,
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
	total: PropTypes.number,
};

export default Index;
