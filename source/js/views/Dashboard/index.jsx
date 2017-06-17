import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeros } from 'actions/app';
import Icon from 'components/Global/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';

var styles = {
    backgroundColor: '#f4f4f4',
};

@connect(state => ({
  asyncData: state.app.get('asyncData'),
}), {getHeros})
export default class Dashboard extends Component {
  static propTypes = {
    asyncData: PropTypes.object,
    getHeros: PropTypes.func,
  }

  constructor(props) {
    super(props);
    props.getHeros();
  }

  render() {
    const {asyncData} = this.props;
    console.log(asyncData);
    return (
      <Row middle="xs" className='Dashboard'>
        <Col xs={10} md={9} style={styles}>
         <Col xs={12}>
          </Col>
            {
              asyncData.map(( hero, index ) => (
                <p key={hero.get("id")}>{hero.get("name")}</p>
              ))
            }
      </Col>
      </Row>
    );
  }
}