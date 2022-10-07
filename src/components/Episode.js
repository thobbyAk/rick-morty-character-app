import React from "react";
import PropTypes from "prop-types";

const Episode = ({ episodeList, episode, currentIndex, setCurrentIndex }) => {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}
	return (
		<div>
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>

				<select
					id="tabs"
					name="tabs"
					onChange={(event) => {
						setCurrentIndex(event.target.value);
					}}
					className="block w-full rounded-md border-black border-2 bg-teal-600  focus:border-black  focus:border-black"
					defaultValue={`Episode ${currentIndex}`}
				>
					{episodeList?.map((tab) => (
						<option value={tab?.id} key={tab?.id}>
							Episode {tab?.id}
						</option>
					))}
				</select>
			</div>
			<div className="hidden sm:block">
				<div className="border-b border-black">
					<nav className="-mb-px flex space-x-8" aria-label="Tabs">
						{episodeList?.slice(0, 7).map((tab, index) => (
							<span
								key={index}
								onClick={() => {
									setCurrentIndex(tab?.id);
								}}
								className={classNames(
									currentIndex === tab?.id
										? "border-2 border-black text-black cursor-pointer  "
										: "border-transparent text-black cursor-pointer  hover:text-gray-700 hover:border-black-300",
									"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
								)}
							>
								Episode {tab?.id}
							</span>
						))}
					</nav>
				</div>
			</div>
			<div className=" flexl p-4 ">
				<div className="text-lg  text-dark mb-2 capitalize font-normal">
					{" "}
					Episode ID : {episode?.id}
				</div>
				<div className="text-lg  text-dark  mb-2 capitalize  font-normal">
					{" "}
					Episode Name : {episode?.name}
				</div>
				<div className="text-lg  text-dark  mb-2 capitalize  font-normal">
					{" "}
					Episode Air Date : {episode?.air_date}
				</div>
				<div className="text-lg  text-dark  mb-2 capitalize  font-normal">
					{" "}
					Episode : {episode?.episode}
				</div>
			</div>
		</div>
	);
};

Episode.propTypes = {
	episodeList: PropTypes.array,
	episode: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		air_date: PropTypes.string,
		episode: PropTypes.string,
	}),
};

export default Episode;
