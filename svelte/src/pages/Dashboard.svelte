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
  @import '../assets/scss/Dashboard/index.css';

  .container {
    display: grid;
    height: 100vh;
    /* -moz-transition: .7s cubic-bezier(.45,.67,.9,.73);
    -webkit-transition: .7s cubic-bezier(.45,.67,.9,.73);
    transition: .7s cubic-bezier(.45,.67,.9,.73); */
    transition: .7s ease;
    -webkit-transition: .7s ease;
    /* grid-template-columns: 500px 1fr;  */
  }

  /* aside {
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    -moz-backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
  } */
  
  section {
    /* background: rgba(205, 134, 63, 0.442); */
    display: flex;
    justify-content: center;
  }

</style>