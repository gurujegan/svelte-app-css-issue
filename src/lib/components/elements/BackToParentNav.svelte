<script>
  import { getContext } from "svelte";

  const listPageUrl = getContext('listPageUrl')

</script>

<div>
  <a class="btn btn-sm md:btn-md gap-2 lg:gap-3" href="{listPageUrl}"
    ><svg
      class="h-6 w-6 fill-current md:h-8 md:w-8"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      ><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg
    >
    <div class="flex flex-col items-start">
      <span class="text-base-content/50 hidden text-xs font-normal md:block">Prev</span>
      <span>Timeline</span>
    </div></a
  ><!---->
</div>