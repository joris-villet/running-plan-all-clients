<script>
  import { sidebar } from '../store.js';


  function handleSidebar() {
    console.log('click');
    sidebar
    // if (sidebarActive) {
    //   styleSidebar.set("50px 1fr");
    //   sidebarActive.(false);
    // }
    // else {
    //   styleSidebar.set("500px 1fr")
    //   sidebarActive.update(false);
    // }
  }

</script>

<aside>
  <span 
    on:click={handleSidebar}
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