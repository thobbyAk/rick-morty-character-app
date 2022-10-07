import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Details from "./pages/Details";
import Index from "./pages/Index";
import { fetchInitialData } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const dateFromState = useSelector((state) => state.data);
	const [characters, setCharacters] = useState(dateFromState?.results);
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${currentPage}`
			);
			const newdata = await response.json();
			dispatch(fetchInitialData(newdata));
		};

		fetchData();
	}, [currentPage]);

	useEffect(() => {
		if (dateFromState) {
			setCharacters(dateFromState?.results);
		}
	}, [dateFromState]);

	function handleChange(event) {
		filterCharacterByName(event.target.value);
	}

	function handleStatusFilter(event) {
		filterCharacterByStatus(event.target.value);
	}

	function handleGenderFilter(event) {
		filterCharacterByGender(event.target.value);
	}

	const filterCharacterByStatus = async (status) => {
		if (status == "") {
			setCharacters(dateFromState?.results);
		} else {
			const filteredStatus = await dateFromState.results.filter(
				(character) => character.status.toLowerCase() == status.toLowerCase()
			);
			setCharacters(filteredStatus);
		}
	};
	const filterCharacterByGender = async (gender) => {
		if (gender == "") {
			setCharacters(dateFromState?.results);
		} else {
			const filteredGender = await dateFromState.results.filter(
				(character) => character.gender.toLowerCase() == gender.toLowerCase()
			);
			setCharacters(filteredGender);
		}
	};

	const filterCharacterByName = async (name) => {
		const filteredNames = await dateFromState.results.filter((character) =>
			character.name.toLowerCase().includes(name.toLowerCase())
		);
		setCharacters(filteredNames);
	};
	return (
		<Router>
			<Layout
				handleChange={handleChange}
				handleStatusFilter={handleStatusFilter}
				handleGenderFilter={handleGenderFilter}
			>
				<Routes>
					<Route
						path="/"
						element={
							<Index
								characters={characters}
								total={dateFromState?.info.count}
								currentPage={currentPage}
								setCurrentPage={(page) => {
									setCurrentPage(page);
								}}
							/>
						}
					/>
					<Route path="/:id" element={<Details />} />
					<Route path="*" element={<Index />} /> // page-not-found route
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
