import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeros } from 'actions/app';
import NavSortCharacters from 'components/Containers/NavSortCharacters';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ListItem from 'material-ui/List/ListItem';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import './HeroCard.scss'


export default class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {comics: props.comics};
  }  

  render() {
    
    return (
      <Col xs={6} >
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
                  <p className='HeroText'>
                    {this.props.description===""||null?'lorem':this.props.description}
                  </p>
                  <Col className='HeroMoreContiner' xs={12}>
                    <FlatButton className='HeroMore' label="VIEW MORE" labelStyle={{fontWeight:900, color:'#fff'}}/>
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col xs={12} md={12}>
            <Col xs={12} md={12}>
            Related Comics
            {
              this.props.comics.slice(0, 4).map(( comic, index ) => (
              <p key={index}>
              {comic.get("name")}
              </p>

              ))
            }
            </Col>
            </Col>
          </Row>
        </Col>
      </Col>
    );
  }
}