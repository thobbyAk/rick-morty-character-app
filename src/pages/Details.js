import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Episode from "../components/Episode";
import { selectCharacterById } from "../lib/utils";

const Details = () => {
	const { id } = useParams();
	const [episode, setCurrentEpisode] = useState({});
	const [episodeList, setCurrentEpisodeList] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(1);

	const character = useSelector((state) => selectCharacterById(state, id));

	useEffect(() => {
		let episodeArray = [];
		for (let i = 0; i < character.episode.length; i++) {
			if (!episodeList.includes(i)) {
				episodeArray.push({
					id: i + 1,
					url: character.episode[i],
				});
			}
		}
		const filteredArray = episodeArray.filter((element, index) => {
			return episodeArray.indexOf(element !== index);
		});
		setCurrentEpisodeList(filteredArray);
	}, [id]);

	const getEpisodeContent = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		setCurrentEpisode(data);
	};
	useEffect(() => {
		if (episodeList.length > 0) {
			getEpisodeContent(episodeList[0].url);
		}
	}, [episodeList]);
	useEffect(() => {
		const fetchEpisodeBasedOnIndex = async () => {
			if (episodeList.length > 0) {
				const episode = await episodeList.filter(
					(element) => element.id == currentIndex
				);
				getEpisodeContent(episode[0]?.url);
			}
		};

		fetchEpisodeBasedOnIndex();
	}, [currentIndex]);

	if (character) {
		return (
			<div className="py-6">
				<div className="mx-auto max-w-7xl px-4 ">
					<div className="grid grid-cols-1  bg-teal-600 lg:grid-cols-3 mb-4 lg:p-8 p-4 gap-4">
						<div className="col-span-1 px-5">
							<img
								src={character?.image}
								alt=""
								className="rounded-lg w-full lg:h-80 md:h-64 h-52  "
							/>
						</div>
						<div className="col-span-2 px-5">
							<div className="flex flex-col px-4">
								<div className="text-base lg:text-lg md:text-lg text-dark mb-2 capitalize font-normal">
									{" "}
									Name : {character?.name}
								</div>
								<div className="text-base lg:text-lg md:text-lg text-dark  mb-2 capitalize  font-normal">
									{" "}
									Status : {character?.status}
								</div>
								<div className="text-base lg:text-lg md:text-lg text-dark  mb-2 capitalize  font-normal">
									{" "}
									Specie : {character?.species}
								</div>

								<div className="text-base lg:text-lg md:text-lg text-dark  mb-2 capitalize  font-normal">
									{" "}
									Type : {character?.type}
								</div>
								<div className="text-base lg:text-lg md:text-lg text-dark  mb-2 capitalize  font-normal">
									{" "}
									Gender : {character?.gender}
								</div>
								<div className="text-base lg:text-lg md:text-lg text-dark  mb-2 capitalize  font-normal">
									{" "}
									Origin : {character?.origin?.name}
								</div>

								<div className="text-base lg:text-lg md:text-lg text-dark  mb-2 capitalize  font-normal">
									{" "}
									Created :{" "}
									{moment(character?.created).format("MMMM Do YYYY, h:mm:ss a")}
								</div>
							</div>
						</div>
						<div className="col-span-2 mt-5 px-5">
							<Episode
								episodeList={episodeList}
								episode={episode}
								currentIndex={currentIndex}
								setCurrentIndex={setCurrentIndex}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Navigate to={{ pathname: "/" }} />;
	}
};

export default Details;
