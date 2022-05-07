<script>
  import Sidebar from '../lib/Sidebar.svelte';
  import { styleSidebar } from '../store.js';
  // let styleSidebar = "500px 1fr";
</script>

<!-- <div class="container" style="grid-template-columns: 500px 1fr"> -->
<div class="container" style:grid-template-columns={$styleSidebar}>
  <Sidebar />
  <section></section>
</div>

<style>
  .container {
    display: grid;
    height: 100vh;
    transition: 2s;
    /* grid-template-columns: 500px 1fr; */
  }
  
  /* .sidebar {
    display: grid;
    grid-template-columns: 500px 1fr; 
    height: 100vh;
  } */

  section {
    background: rgba(205, 134, 63, 0.442);
  }
</style>