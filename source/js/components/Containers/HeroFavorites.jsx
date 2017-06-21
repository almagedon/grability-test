import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sliceFavorite } from 'actions/app';
import { getComic } from 'actions/appModalData';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Shield from '../../../assets/img/btn-favourites-primary.png';
import deleteTrash from '../../../assets/img/btn-delete.png';

@connect(state => ({
  favorites: state.app.get('favorites'),
}),{sliceFavorite})
export default class HeroFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  } 
  static propTypes = {
    sliceFavorite: PropTypes.func,
  }


  render() {
    const {favorites, sliceFavorite} = this.props;
    return (
      <Row >
        <Col xs={12}  >
          <Row middle='xs'>
            <img src={Shield} style={{ marginRight: '15px'}} />
            <strong style={{fontSize: '1.5em'}} >My favourites</strong>
          </Row>
        </Col>
        {
          favorites.map(( favorite, index ) => (
        <Col xs={12} key={index}>
          <Row end='xs'>
            <img src={deleteTrash} onClick={sliceFavorite.bind(this, favorite)} style={{ marginRight: '15px'}} />
          </Row>
          <Row center='xs'>
            <img 
                    src={favorite[0] ? favorite[0].thumbnail.path+'.'+favorite[0].thumbnail.extension : favorite.get(0).thumbnail.path+'.'+favorite.get(0).thumbnail.extension} 
                    style={{height:'300px'}}
                    />
          </Row>
        </Col>
          ))
        }
      </Row>
    );
  }
}