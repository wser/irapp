import Vuex from 'vuex'
import firebase, {auth, GoogleProvider, EmailAuth} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      allowed:false,
      drawer: false,
      drawerRight: false,
      page:'',
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      },
      setAllowedOn (state) {
        state.allowed = true;
      },
      setAllowedOff (state) {
        state.allowed = false;
      }
    },
    actions: {
      appInit({ commit }) {
        commit('setAllowedOn');
      },

      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },
      signInWithEmailAndPassword ({commit}, creds) {
        return new Promise((resolve, reject) => {
          auth.signInWithEmailAndPassword(creds.email, creds.password)
          resolve()
        })
      },
      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).then(()=>{
          commit('setAllowedOff')
        })
        .catch(err => console.log(error))
      }
    }
  })
}

export default createStore
