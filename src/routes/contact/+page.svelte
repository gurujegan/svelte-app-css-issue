<script>
	import Sidebar from '$lib/components/Sidebar.svelte'
	const message = 'Magic script';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<h1>Contact Page</h1>

<Sidebar />
	<div>
		<p class="italic">Name: {data.name}</p>
		<address>{data.address}</address>
		<p>Location: {data.location}</p>
	</div>

	<a href="/">Home</a>

	<div>
		<p>Message:{message}</p>
	</div>
</div>
