<script>

import DrawerContentContainer from '$lib/components/container/DrawerContentContainer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<style>
	.input, button {
		width:100%;
	}

</style>


<div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->

      <DrawerContentContainer>
      <h1 class="mb-5 text-3xl text-left text-white">Sign Up!</h1>
      <div class="flex flex-col gap-4 p-4 w-full rounded-md">
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

              <label for="lastname"></label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                class="input input-bordered input-secondary"/>

        <button class="btn">Log in</button>
      </div>
    </DrawerContentContainer>
    
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content h-dvh w-80 p-4">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>