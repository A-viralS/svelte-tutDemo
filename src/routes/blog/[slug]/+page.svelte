<script lang="ts">
    export let data;
</script>

<div>
  {#each data.names as { name }}
    <div>{name}</div>
  {/each}
</div> 