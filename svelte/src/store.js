import { writable } from 'svelte/store';

let sidebarActive = writable(true);
export let styleSidebar = writable("500px 1fr");

// const closeSidebar = () => styleSidebar.set("50px 1fr");
// const openSidebar = () => styleSidebar.set("500px 1fr");

// sidebarActive ? closeSidebar() : openSidebar;

function useSidebar() {
	
  if (sidebarActive) {
    styleSidebar.set("50px 1fr")
    sidebarActive.set(false)
  }
  else {
    styleSidebar.set("500px 1fr")
    sidebarActive.set(true)
  }

	// return {
	// 	close: () => styleSidebar.set("50px 1fr"),
  //   open: () => styleSidebar.set("500px 1fr"),
	// };
}

export let sidebar = useSidebar();


