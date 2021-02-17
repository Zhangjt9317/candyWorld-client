import { queryUsers, queryAccounts } from '@/services/profile';

const ProfileModel = {
  namespace: 'profile',

  state: {
    email: [],
    username: [],
    account1: [],
    account2: [],
    account3: [],
  },

  effects: {
    *fetchBasic({ payload }, { call, put }) {
      const response = yield call(queryUsers, payload);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAccounts);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default ProfileModel;