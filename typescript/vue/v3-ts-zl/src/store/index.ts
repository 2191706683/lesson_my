import { createStore } from 'vuex'
import { GlobalDataProps, GlobalErrorProps,  } from '../types'

const store = createStore<GlobalDataProps>({
    state: {
       user: {
        isLogin: true,
        nickname: '蔡帅'
       },
       token: '',
       loading: false,
       error: {
        status: false
       }
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status
        },
        setError(state, e: GlobalErrorProps) {
            state.error = e
        }
    }
})

export default store
