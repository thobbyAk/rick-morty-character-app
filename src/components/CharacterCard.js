import React from "react";
import { shortenText } from "../lib/utils";
import PropTypes from "prop-types";

const CharacterCard = ({ details, viewCharacter }) => {
	return (
		<div className="rounded-lg border bg-teal-600 border-emerald-600 flex shadow-lg flex-col w-full h-62">
			<div className="flex justify-center p-3">
				<img src={details?.image} alt="" className="rounded-full h-40 w-40" />
			</div>
			<div className="flex flex-col p-4">
				<div className="text-base  text-dark mb-2 capitalize font-normal">
					{" "}
					Name : {shortenText(details?.name)}
				</div>
				<div className="text-base  text-dark  mb-2 capitalize  font-normal">
					{" "}
					Specie : {details?.species}
				</div>
				<div className="text-base  text-dark  mb-2 capitalize  font-normal">
					{" "}
					Status : {details?.status}
				</div>
			</div>
			<div className=" p-3 rounded-b-lg bg-teal-700 h-12">
				<div
					className="cursor-pointer "
					onClick={() => {
						viewCharacter(details?.id);
					}}
				>
					{" "}
					<p className="text-base  text-center  text-dark font-normal">Details</p>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	details: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		species: PropTypes.string,
		image: PropTypes.string,
		status: PropTypes.string,
	}),
};

export default CharacterCard;
