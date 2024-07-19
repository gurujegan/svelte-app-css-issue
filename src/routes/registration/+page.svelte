<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-col justify-center items-center w-screen h-screen">
	<div class="flex flex-col justify-center items-center h-1/2 w-1/2 bg-gradient-to-br from-rose-800 from-1% to-blue-950  to-70% rounded-md">
		<h1 class="mb-5 text-3xl text-white">Sign Up!</h1>
				<label for="firstname"></label>
				<input
					type="text"
					placeholder="First Name"
					name="firstname"
					class="input input-bordered input-secondary w-1/2 mb-5"/>
		
				<label for="lastname"></label>
				<input
					type="text"
					placeholder="Last Name"
					name="lastname"
					class="input input-bordered input-secondary w-1/2"/>
		<button class="mt-5 btn btn-secondary">Log in</button>
	</div>
</div>
