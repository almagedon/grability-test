import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFavorite } from 'actions/app';
import { getComic } from 'actions/appModalData';

import ListItem from 'material-ui/List/ListItem';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Grid, Row, Col } from 'react-flexbox-grid';

import NavSortCharacters from 'components/Containers/NavSortCharacters';
import linkArrow from '../../../assets/img/link-arrow.png';
import './HeroCard.scss'

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  open: state.app.get('modal'),
}), {saveFavorite, getComic})
export default class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: '125px',
      url:''
    }
  } 
  handleMore = () => {
    this.state.maxHeight=='125px'?this.setState({maxHeight: 'initial'}):this.setState({maxHeight: '125px'})
  };
  handleOpen = (comicData) => {
    this.setState({
      open: true,
    });
    console.log(this.state.url)
  };

  render() {
    const {saveFavorite} = this.props;
    const button = (<FlatButton className='HeroMore' onTouchTap={this.handleMore} label="VIEW MORE" labelStyle={{fontWeight:900, color:'#fff'}}/>)
    return (
      <Col xs={12} sm={12} md={6} >
        <Col xs={12} className='HeroCard' >
          <Row className='HeroContainer'>
            <Col xs={12} md={6} className='HeroAvatar-container'>
              <Avatar 
                src={this.props.thumbnail}
                className='HeroAvatar'
              />
            </Col>
            <Col xs={12} md={6}>
              <Col xs={12} className='HeroName'>
                  <span>{this.props.name}</span>
              </Col>
              <Col xs={12}>
                <Col className='HeroDescription' xs={12}>
                  <p className='HeroText' style={{maxHeight: this.state.maxHeight, minHeight: this.state.maxHeight}}>
                    {this.props.description===""||null?'No description associated':this.props.description}
                  </p>
                  <Col className='HeroMoreContiner' xs={12}>
                    {this.props.description!==""||null?button:false}
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col className='relatedContainer' xs={12} md={12}>
              <Col className='relatedTittle' xs={12} md={12}>
                <p>Related Comics</p>
              </Col>
              <Row>
                {
                  this.props.comics.slice(0, 4).map(( comic, index ) => (
                    <Col onClick={this.props.getComic.bind(this, comic.get("resourceURI"))} key={index} className="tittleComics" xs={6}>
                      <img src={linkArrow} className='linkArrow' />
                      <span /* onClick={saveFavorite.bind(this, comic)} */>
                      {comic.get("name")} 
                      </span>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    );
  }
}