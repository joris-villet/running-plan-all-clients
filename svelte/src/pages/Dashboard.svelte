<script>
  import Sidebar from '../lib/Sidebar.svelte';
  import Table from '../lib/Table.svelte'
  import { styleSidebar } from '../store.js';
</script>

<!-- <div class="container"> -->
<div class="container" style:grid-template-columns={$styleSidebar}>
  <aside>
    <Sidebar />
  </aside>
  <section>
    <Table />
  </section>
</div>

<style>
  .container {
    display: grid;
    height: 100vh;
    transition: .7s cubic-bezier(.45,.67,.9,.73);
    /* grid-template-columns: 500px 1fr;  */
  }

  aside {
    position: relative;
    background: rgba(204, 234, 146, 0.514);
  }
  
  section {
    background: rgba(205, 134, 63, 0.442);
    display: flex;
    justify-content: center;
  }
</style>