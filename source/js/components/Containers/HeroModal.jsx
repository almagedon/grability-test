import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFavorite } from 'actions/app';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

import closeModal from '../../../assets/img/btn-close.png';
import favouritesPrimary from '../../../assets/img/btn-favourites-primary.png';
import favouritesDefault from '../../../assets/img/btn-favourites-default.png';
import shoppingCart from '../../../assets/img/shopping-cart-primary.png';
import './HeroModal.scss'

const customPadding = {
  padding: '0 0 0 0',
  overflow: 'hidden',
};
@connect(state => ({
  asyncComicData: state.app.get('asyncComicData'),
}),{saveFavorite})
export default class HeroModal extends React.Component {
  constructor(props) {
    super(props);
  } 
  static propTypes = {
    asyncComicData: PropTypes.object,
    getHeros: PropTypes.func,
  }

  render() {
    const {asyncComicData} = this.props;
    const {saveFavorite} = this.props;
    const actions = (
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={6} className='modalButton'>
              <FlatButton
              icon={<img src={favouritesPrimary} />} 
              label="add" 
              fullWidth={true} 
              hoverColor={'#322827'}
              backgroundColor={'#f0f0f0'}
              style={{
                height:'75px',
                color:'red',
              }}
              labelStyle={{
                fontWeight: 'bold',
              }}
              />
            </Col>
            <Col xs={6} className='modalButton' >
              <FlatButton
              icon={<img src={shoppingCart} />} 
              label="buy" 
              fullWidth={true}
              hoverColor={'#dcdcdc'}
              backgroundColor={'#dcdcdc'}
              disableTouchRipple={true}
              onClick={saveFavorite.bind(this, asyncComicData)}
              style={{
                height:'75px',
                color:'red',
              }}
              labelStyle={{
                fontWeight: 'bold',
              }}
              />
            </Col>
          </Row>
        </Col>
     </Row>);
    const title = (
      <Row>
        <Col xs={12}>
          <Row end="xs">
            <img src={closeModal} className='linkArrow' onClick={this.props.closeModal} />
          </Row>
        </Col>
      </Row>);
     
    return (
      <div>
        <Dialog
          modal={false}
          actions={actions}
          style={customPadding}
          open={this.props.openModal}
          contentStyle={{width:'65%'}}
          title={title}
          titleStyle={{
            padding: '10px 19px',
            margin:'0'
          }}
          bodyStyle={{
            borderTop:'0'
          }}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          actionsContainerStyle={customPadding}
        >
        <Row>
        <Col xs={12}>
        {
          asyncComicData.map((comic,index)=>(
          <Row key={index}>
            <Col xs={12}>
              <Row>
                  <Col xs={5}>
                  <Row center="xs">
                    <img 
                    src={comic.get('thumbnail').get("path")+'.'+comic.get('thumbnail').get('extension')} 
                    className='linkArrow' 
                    style={{height:'300px'}}
                    />
                  </Row>
                  </Col>
                  <Col xs={6}>
                    <Row>
                      <Col className='tittleModal' xs={12}>
                        {comic.get('title')}
                      </Col>
                      <Col className='descriptionModal'  xs={12}>
                        {comic.get('description')}
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </Col>
          </Row>
          ))
        }
        </Col>
        </Row>

        </Dialog>
      </div>
    );
  }
}