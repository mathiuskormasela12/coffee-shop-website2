// ========== Data Reducer

const initialState = {
  name: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: action.payload.data.name,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default dataReducer;
