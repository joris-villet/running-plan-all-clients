<script>
  import Sidebar from '../lib/Sidebar.svelte';
  import { styleSidebar } from '../store.js';
</script>

<!-- <div class="container"> -->
<div class="container" style:grid-template-columns={$styleSidebar}>
  <Sidebar />
  <section></section>
</div>

<style>
  .container {
    display: grid;
    height: 100vh;
    transition: .9s ease-in-out;
    /* grid-template-columns: 500px 1fr;  */
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