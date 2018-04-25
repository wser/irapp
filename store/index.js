import Vuex from 'vuex'
import firebase, {auth, GoogleProvider, EmailAuth} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
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
      }
    },
    actions: {
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
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore
