<script setup>
	import OrgStore, { orgList, currentOrg } from '$lib/stores/OrgStore.js';
	import { writable } from 'svelte/store';

	let formData = {
		// panId: '',
		// customerName: '',
		// bankAccNo: '',
		// bankName: '',
		// email: '',
		// mobNo: '',
		userId: '',
		orgId: '',	
		createdAt: Date.now().toString(),
		updatedAt: ''
	};

	function updateCurrentOrg(e) {
		
		OrgStore.setCurrentOrg(e.target.value);
	}
</script>

<div class="navbar bg-base-200">
	<div class="flex-none">
		<label for="my-drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</label>
	</div>
	<div class="navbar-start">
		<h1 class="text-xl font-bold">TSS</h1>
	</div>
	<div class="navbar-center w-1/4">
		<label class="label mb-2 text-sm font-medium" for="orgName">Org Name</label>
		<select
			class="select select-bordered w-full"
			bind:value={formData.orgId}
			on:change={updateCurrentOrg}
		>
			<option disabled selected>Select Org</option>
			{#each $orgList as org}
				<option value={org.orgId}>{org.orgName}</option>
			{/each}
		</select>
	</div>
	<div class="navbar-end gap-2">
		<!-- <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div> -->
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li>
					<a class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>
