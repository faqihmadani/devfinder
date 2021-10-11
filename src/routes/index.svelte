<script>
	import Profile from "../components/Profile.svelte";
	import Form from "../components/Form.svelte";
	import Navbar from "../components/Navbar.svelte";
	import { darkMode } from "../stores/GithubStore";
</script>

<svelte:head>
	<title>Devfinder</title>
</svelte:head>

<section class={$darkMode}>
	<section
		class="min-h-screen transition-colors duration-200 ease-in-out w-full py-5 dark:bg-gray-900 bg-blue-50 font-mono flex items-center justify-center"
	>
		<div class="sm:w-9/12 w-11/12">
			<Navbar />
			<Form />
			<Profile />
		</div>
	</section>
</section>
