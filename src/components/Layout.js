import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const Layout = ({
	children,
	handleChange,
	handleStatusFilter,
	handleGenderFilter,
}) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [status, setStatus] = useState("");
	return (
		<div>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 md:hidden"
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<button
											type="button"
											className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
										</button>
									</div>
								</Transition.Child>
								<div className="flex flex-shrink-0 items-center px-4"></div>
								<div className="mt-5 h-0 flex-1 overflow-y-auto">
									<div className="mt-1 flex rounded-md shadow-sm">
										<div className="mt-5 px-2 mb-2 relative flex flex-grow items-stretch focus-within:z-10">
											<div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
												<MagnifyingGlassIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</div>
											<input
												onChange={(e) => {
													setName(e.target.value);
													handleChange(e);
												}}
												value={name}
												type="text"
												name="name"
												id="name"
												className="block w-full focus:outline-0 rounded-full pl-10 h-12 bg-black text-white border-teal-300 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
												placeholder="Filter by Name"
											/>
										</div>
									</div>
									<div className="mt-1 flex rounded-md shadow-sm px-2 ">
										<select
											id="status"
											name="status"
											onChange={(e) => {
												setStatus(e.target.value);
												handleStatusFilter(e);
											}}
											value={status}
											className="block w-full focus:outline-0 pr-4 rounded-full  h-12 bg-black text-white border-teal-300 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
										>
											<option defaultValue="" value="">
												Status
											</option>
											<option>Unknown</option>
											<option>Alive</option>
											<option>Dead</option>
										</select>
									</div>
									<div className="mt-3 flex rounded-md shadow-sm px-2  ">
										<select
											id="gender"
											name="gender"
											onChange={(e) => {
												setGender(e.target.value);
												handleGenderFilter(e);
											}}
											value={gender}
											className="block w-full focus:outline-0 pr-4 rounded-full  h-12 bg-black text-white border-teal-300 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
										>
											<option defaultValue="" value="">
												Gender
											</option>
											<option>Unknown</option>
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
						<div className="w-14 flex-shrink-0" aria-hidden="true"></div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
				<div className="flex min-h-0 flex-1 flex-col bg-gray-800">
					<div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4"></div>
					<div className="flex flex-1 flex-col overflow-y-auto">
						<div className="mt-1 flex rounded-md shadow-sm">
							<div className="mt-5 px-2 mb-2 relative flex flex-grow items-stretch focus-within:z-10">
								<div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
									<MagnifyingGlassIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</div>
								<input
									onChange={(e) => {
										setName(e.target.value);
										handleChange(e);
									}}
									value={name}
									type="text"
									name="name"
									id="name"
									className="block w-full focus:outline-0 rounded-full pl-10 h-12 bg-black text-white border-teal-300 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
									placeholder="Filter by Name"
								/>
							</div>
						</div>
						<div className="mt-1 flex rounded-md shadow-sm px-2 ">
							<select
								id="status"
								name="status"
								onChange={(e) => {
									setStatus(e.target.value);
									handleStatusFilter(e);
								}}
								value={status}
								className="block w-full focus:outline-0 pr-4 rounded-full  h-12 bg-black text-white border-teal-300 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
							>
								<option defaultValue="" value="">
									Status
								</option>
								<option>Unknown</option>
								<option>Alive</option>
								<option>Dead</option>
							</select>
						</div>
						<div className="mt-3 flex rounded-md shadow-sm px-2  ">
							<select
								id="gender"
								name="gender"
								onChange={(e) => {
									setGender(e.target.value);
									handleGenderFilter(e);
								}}
								value={gender}
								className="block w-full focus:outline-0 pr-4 rounded-full  h-12 bg-black text-white border-teal-300 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
							>
								<option defaultValue="" value="">
									Gender
								</option>
								<option>Unknown</option>
								<option>Male</option>
								<option>Female</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:pl-64">
				<Header sidebarOpen={setSidebarOpen} />

				<main className="flex-1 px-8 py-6">{children}</main>
			</div>
		</div>
	);
};

Layout.propTypes = {
	handleChange: PropTypes.func,
	handleStatusFilter: PropTypes.func,
	handleGenderFilter: PropTypes.func,
};

export default Layout;
