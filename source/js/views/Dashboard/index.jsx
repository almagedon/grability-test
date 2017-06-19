import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeros } from 'actions/app';
import NavSortCharacters from 'components/Containers/NavSortCharacters';
import HeroCard from 'components/Containers/HeroCard';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ListItem from 'material-ui/List/ListItem';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import './styles.scss';


@connect(state => ({
  asyncData: state.app.get('asyncData'),
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
    const {asyncData} = this.props;
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
      </Row>
    );
  }
}