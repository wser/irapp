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
      setAllow(state, payload){
        state.allowed = payload
      }
    },
    actions: {
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
        commit('setAllow', true)
      },
      signInWithEmailAndPassword ({commit}, creds) {
        return new Promise((resolve, reject) => {
          auth.signInWithEmailAndPassword(creds.email, creds.password)
          resolve()
        })
        .then(()=>{
          commit('setAllow', true)
        })
      },
      signOut ({commit}) {
        auth.signOut()
        .then(() => {
          commit('setUser', null)
        })
        .then(()=>{
          commit('setAllow', false)
        })
        .catch(err => console.log(err))
      }
    }
  })
}

export default createStore
