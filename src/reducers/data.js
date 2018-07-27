const data = (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      const results = [];

      state.data.categories.map(category => {
        return category.playlist.filter(item => {
          return (
            item.author.includes(action.payload.query) && results.push(item)
          );
        });
      });
      return {
        ...state,
        search: results
      };
    }
    default:
      return state;
  }
};

export default data;
