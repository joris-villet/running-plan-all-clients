<script>
  import { useStoreSidebar } from '../store.js';

  const useSidebar = useStoreSidebar();

</script>

<aside>
  <span 
    on:click={useSidebar.toggle}
    class="material-icons icon-sidebar"
  >
    arrow_circle_left
  </span> 
</aside>


<style>
  aside {
    position: relative;
    background: rgba(204, 234, 146, 0.514);
  }
  
  .icon-sidebar {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    font-size: 2.5rem;
  }
</style>