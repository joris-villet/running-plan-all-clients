<script>
  import { useStoreSidebar } from '../store.js';

  const useSidebar = useStoreSidebar();

</script>

<div class="sidebar">
  <span 
    on:click={useSidebar.toggle}
    class="material-icons icon-sidebar"
  >
    arrow_circle_left
  </span> 
</div>



<style>
  /* aside {
    position: relative;
    background: rgba(204, 234, 146, 0.514);
  } */
  
  .icon-sidebar {
    position: absolute;
    top: .5rem;
    right: .5rem;
    cursor: pointer;
    font-size: 2.5rem;
  }
</style>