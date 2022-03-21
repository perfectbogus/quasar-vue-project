import { useStore } from 'vuex'
import { computed } from 'vue'

const useUI = () => {

  const store = useStore()

  return {
    //Side Menu Options
    // isSideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen']),
    isSideMenuOpen: computed({
      get(){
        return store.getters['ui/isSideMenuOpen']
      },
      set(val){
        store.commit("ui/toggleSideMenu")
      }
    }),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu")
    },
  }

}

export default useUI
