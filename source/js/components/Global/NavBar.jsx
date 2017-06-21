import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import { getHerosSearch } from 'actions/appBarSearch';
import Search from './containers/Search'
import NavSortCharacters from 'components/Containers/NavSortCharacters';
import MarveLogo from '../../../assets/img/Marvel-logo.png';


var styles = {
    backgroundColor: '#2d2727',
    boxShadow: '0px 1px 24px 1px rgba(0,0,0,0.75)'
};
var stylesimg = {
  margin: '8.28px 0px 0px 0px',
  width:'120px'
};

@connect(state => ({
    asyncSearch: state.app.get('asyncSearchData'),
}), {getHerosSearch})
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    
  }
  static propTypes = {
    asyncSearch: PropTypes.object,
    getHerosSearch: PropTypes.func,
  }
  state = {
    value: null,
  };
  render() {
    const {asyncSearch, getHerosSearch} = this.props;
    let autocomplete = [];
    asyncSearch.forEach( item => autocomplete.push(item.get("name")))
    return (
      <AppBar 
        style={styles} 
        title={<Search
        dataSource={autocomplete}
        onChange={getHerosSearch}
        onRequestSearch={() => console.log('onRequestSearch')}
        />} 
        iconStyleLeft={stylesimg} 
        iconElementLeft={<img src={ MarveLogo } alt='Marvel'
        />} 
      />
    );
  }
}