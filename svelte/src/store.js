import { writable } from 'svelte/store';

export let styleSidebar = writable("500px 1fr");

// export const closeSidebar = () => styleSidebar.set("50px 1fr");
// export const openSidebar = () => styleSidebar.set("500px 1fr");


// export function useStoreSidebar() {

//   return {
//     close: () => styleSidebar.set("50px 1fr"),
//     open: () => styleSidebar.set("500px 1fr"),
//   }

// }

let active = true;

export function useStoreSidebar() {

  return {

    toggle: () => {
      if (active) {
        styleSidebar.set("50px 1fr");
        active = false;
      }
      else {
        styleSidebar.set("500px 1fr");
        active = true;
      }
    }
  }
  
}




