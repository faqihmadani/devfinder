<script>
	import {
		dataProfile,
		username,
		isLoading,
		date,
	} from "../stores/GithubStore";

	const handleSearch = async (e) => {
		$isLoading = true;
		e.preventDefault();
		const url = `https://api.github.com/users/${$username}`;
		const res = await fetch(url);
		const data = await res.json();
		$dataProfile = data;

		//Date Created
		let old_date = new Date(data.created_at);
		let year = old_date.getFullYear();
		let month = old_date.getMonth() + 1;
		let dt = old_date.getDate();
		if (dt < 10) {
			dt = "0" + dt;
		}
		if (month < 10) {
			month = "0" + month;
		}
		$date = year + "-" + month + "-" + dt;
		$isLoading = false;
	};
</script>

<div
	class="relative dark:bg-gray-800 bg-white p-2 rounded-lg flex items-center justify-between mb-5 shadow-md dark:shadow-none "
>
	<span class="absolute inset-y-0 left-0 flex items-center pl-2">
		<div class="p-1 focus:outline-none focus:shadow-outline">
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				class="w-6 h-6 text-indigo-700 focus-within:text-indigo-400"
				><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg
			>
		</div>
	</span>
	<form class="flex w-full" on:submit={(e) => handleSearch(e)}>
		<input
			class="py-2 text-sm dark:text-gray-100 dark:bg-gray-800 text-gray-900 bg-white rounded-md pl-10 focus:outline-none w-full"
			placeholder="Search Github Username..."
			autocomplete="off"
			bind:value={$username}
		/>
		<button
			class="py-2 px-5 text-sm bg-blue-600 text-gray-100 ml-2 rounded-md shadow-blue-600"
			on:click={handleSearch}
		>
			Search
		</button>
	</form>
</div>
