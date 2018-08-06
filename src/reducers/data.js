import schema from '../schemas/index.js';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../action-types/index';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
});

const data = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ENTITIES: {
      // let results = [];
      // if (action.payload.query) {
      //   const categories = state.data.categories;
      //   categories.map(category => {
      //     let tempResults = category.playlist.filter(item => {
      //       return item.author
      //         .toLowerCase()
      //         .includes(action.payload.query.toLowerCase());
      //     });
      //     results = results.concat(tempResults);
      //   });
      // }
      // return {
      //   ...state,
      //   search: results
      // };
      return state.set('search', action.payload.query);
    }
    default:
      return state;
  }
};

export default data;
