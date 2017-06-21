import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeros } from 'actions/app';

import { Grid, Row, Col } from 'react-flexbox-grid';
import ListItem from 'material-ui/List/ListItem';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import HeroCard from 'components/Containers/HeroCard';
import HeroFavorites from 'components/Containers/HeroFavorites';

import NavSortCharacters from 'components/Containers/NavSortCharacters';
import './styles.scss';


@connect(state => ({
  asyncData: state.app.get('asyncData'),
  favorites: state.app.get('favorites'),
}), {getHeros})
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    props.getHeros();
  }
  static propTypes = {
    asyncData: PropTypes.object,
    getHeros: PropTypes.func,
  }
  state = {
    value: null,
  };

    handleChange = (event, index, value) => {
    this.setState({value});
  };
  render() {
    const {asyncData, favorites} = this.props;
    return (
      <Row >
        <Col className='Dashboard' xs={9} md={9}>
          <NavSortCharacters/>
              <Row>
            {
              asyncData.map(( hero, index ) => (
              <HeroCard 
                name={hero.get("name")}
                thumbnail={hero.get("thumbnail").get("path")+'.'+hero.get("thumbnail").get("extension")}
                description={hero.get("description")}
                comics={hero.get("comics").get("items")}
                key={hero.get("id")}
                />
              ))
            }
              </Row>
        </Col>
        <Col className='Dashboard' style={{ backgroundColor: '#ebebeb'}} xs={3} md={3}>
            <HeroFavorites />
        </Col>
      </Row>
    );
  }
}