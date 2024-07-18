<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div
  class="hero h-screen"
  style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-neutral-content text-center h-1/2 w-1/2 bg-blue-950 bg-opacity-60 rounded-2xl">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Login!</h1>
      <div class="mb-10 flex-col h-full">
        <div class="flex-col justify-evenly">
        <label for="e-mail"><h5 class="text-start">E-Mail:</h5></label>
        <input
        name="e-mail"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <div class="flex-col justify-evenly">
        <label for="password"><h5 class="text-start">Password:</h5></label>
        <input
        name="password"
        type="password"
        placeholder="Type here"
        class="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <button class="btn btn-primary mt-7">Login</button>
      </div>
      <strong>All rights reserved</strong>
    </div>
  </div>
</div>

