import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

@connect(state => ({
  asyncComicData: state.app.get('asyncComicData'),
}))
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeModal}
      />,
    ];
    return (
      <div>
        <Dialog
          modal={false}
          open={this.props.openModal}
          contentStyle={{padding:'8px'}}
        >
        <Row>
        <Col xs={12}>
        {
          asyncComicData.map((comic,index)=>(
          <Row key={index}>
              <Col xs={12}>
              {comic.get('title')+comic.get('description')}
              </Col>
              
          </Row>
          ))
        }
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeModal}
      />
        </Col>
        </Row>

        </Dialog>
      </div>
    );
  }
}