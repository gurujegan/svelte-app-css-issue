<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<style>
	.input, button {
		width:100%;
	}

</style>

<div class="flex flex-col justify-center items-center w-screen h-screen mx-auto">
	<h1 class="mb-5 text-3xl text-left text-white">Sign Up!</h1>
	<div class="flex flex-col justify-center items-center gap-4 p-4 mx-auto md:w-1/2 bg-gradient-to-br from-rose-800 from-1% to-blue-950  to-70% rounded-md">
				<label for="firstname"></label>
				<input
					type="text"
					placeholder="First Name"
					name="firstname"
					class="input input-bordered input-secondary"/>
		
				<label for="lastname"></label>
				<input
					type="text"
					placeholder="Last Name"
					name="lastname"
					class="input input-bordered input-secondary"/>
		<button class="btn">Log in</button>
	</div>
</div>

<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
