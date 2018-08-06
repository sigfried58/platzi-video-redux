import React from 'react';
import Category from './category';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';
import './categories.css';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {props.search.map(item => {
        return (
          <Media
            openModal={props.handleOpenModal}
            title={item.get('title')}
            author={item.get('author')}
            type={item.get('type')}
            cover={item.get('cover')}
            src={item.get('src')}
            id={item.get('id')}
            key={item.get('id')}
          />
        );
      })}
      {props.categories.map(item => {
        return (
          <Category
            key={item.id}
            description={item.get('description')}
            title={item.get('title')}
            playlist={item.get('playlist')}
            key={item.get('id')}
            handleOpenModal={props.handleOpenModal}
          />
        );
      })}
    </div>
  );
}

export default Categories;
