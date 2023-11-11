const initialState = {
    images: [],
  };
  
  export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_IMAGE':
        return {
          ...state,
          images: [...state.images, action.payload],
        };
      default:
        return state;
    }
  };
  