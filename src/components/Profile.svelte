<script>
	import { dataProfile, isLoading, date } from "../stores/GithubStore";
	import Loading from "./Loading.svelte";
</script>

<div
	class="dark:bg-gray-800 bg-white rounded-lg py-8 px-5 lg:px-10 dark:text-gray-100 text-gray-900 md:grid md:grid-cols-3 gap-x-8 shadow-md dark:shadow-none"
>
	{#if $isLoading}
		<div
			class="flex flex-col items-center justify-center w-full h-72 col-span-3"
		>
			<Loading />
		</div>
	{:else if $dataProfile}
		{#if $dataProfile.login}
			<img
				class="hidden rounded-full md:block"
				src={$dataProfile.avatar_url}
				alt="profil"
			/>
			<div class="col-span-2">
				<div class="col-span-2">
					<div class="grid grid-cols-3 items-center gap-x-5">
						<img
							class="md:hidden rounded-full"
							src={$dataProfile.avatar_url}
							alt="profil"
						/>
						<div class="col-span-2">
							{#if $dataProfile.name}
								<h1 class="font-semibold text-lg sm:text-2xl">
									{$dataProfile.name}
								</h1>
							{:else}
								<h1 class="font-semibold text-lg sm:text-2xl">
									{$dataProfile.login}
								</h1>
							{/if}
							<a
								href={$dataProfile.html_url}
								target="_blank"
								class="text-sm text-indigo-600  inline-block mt-2"
								>@{$dataProfile.login}</a
							>
							<h3 class="text-sm mt-4">
								Joined {$date}
							</h3>
						</div>
					</div>
				</div>
				{#if $dataProfile.bio}
					<p class="mt-5 text-sm leading-relaxed">
						{$dataProfile.bio}
					</p>
				{/if}
				<div
					class="dark:bg-gray-900 bg-blue-50 p-5 rounded-lg mt-5 grid grid-cols-3 gap-x-4"
				>
					<div class="flex flex-col items-center sm:items-start">
						<h3 class="text-sm font-light">Repos</h3>
						<h1 class="font-bold text-lg mt-2">{$dataProfile.public_repos}</h1>
					</div>
					<div class="flex flex-col items-center sm:items-start">
						<h3 class="text-sm font-light">Followers</h3>
						<h1 class="font-bold text-lg mt-2">{$dataProfile.followers}</h1>
					</div>
					<div class="flex flex-col items-center sm:items-start">
						<h3 class="text-sm font-light">Following</h3>
						<h1 class="font-bold text-lg mt-2">{$dataProfile.following}</h1>
					</div>
				</div>
				<div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 ">
					<div class="flex space-x-3 items-center">
						{#if $dataProfile.location}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 dark:text-gray-100 text-gray-900"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd"
								/>
							</svg>
							<h1 class="text-md">{$dataProfile.location}</h1>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400 dark:text-gray-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd"
								/>
							</svg>
							<h1 class="text-md text-gray-400 dark:text-gray-500">
								Not Available
							</h1>
						{/if}
					</div>

					<a
						target="_blank"
						href={$dataProfile.html_url}
						class="flex md:grid md:grid-cols-10 xl:flex space-x-3 items-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 dark:text-gray-100 text-gray-900"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
							/>
						</svg>
						<h1 class="text-md md:col-span-9">
							{$dataProfile.html_url.slice(8)}
						</h1>
					</a>

					<div class="flex space-x-3 items-center">
						{#if $dataProfile.twitter_username}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 dark:text-gray-100 text-gray-900 fill-current"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
								/>
							</svg>
							<h1 class="text-md">@{$dataProfile.twitter_username}</h1>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400 dark:text-gray-500 fill-current"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
								/>
							</svg>
							<h1 class="text-md text-gray-400 dark:text-gray-500">
								Not Available
							</h1>
						{/if}
					</div>

					<div class="flex space-x-3 items-center">
						{#if $dataProfile.company}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 dark:text-gray-100 text-gray-900"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
									clip-rule="evenodd"
								/>
							</svg>
							<h1 class="text-md">{$dataProfile.company}</h1>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400 dark:text-gray-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
									clip-rule="evenodd"
								/>
							</svg>
							<h1 class="text-md text-gray-400 dark:text-gray-500">
								Not Available
							</h1>
						{/if}
					</div>
				</div>
			</div>
		{:else if $dataProfile.message == "Not Found"}
			<div
				class="flex flex-col items-center justify-center h-72 w-full col-span-3"
			>
				<img class="w-40" src="not_found.svg" alt="search" />
				<h1 class="text-xs mt-5">Developer Not Found</h1>
			</div>
		{/if}
	{:else}
		<div
			class="flex flex-col items-center justify-center h-72 w-full col-span-3"
		>
			<img class="w-40" src="search.svg" alt="search" />
			<h1 class="text-lg mt-5">Welcome to Devfinder</h1>
		</div>
	{/if}
</div>
