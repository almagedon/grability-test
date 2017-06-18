import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeros } from 'actions/app';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Characters from '../../../assets/img/characters.png';
import arrowDown from '../../../assets/img/btn_arrow_right.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import NavSortCharacters from 'components/Containers/NavSortCharacters';
import './styles.scss';



const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

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
    console.log(asyncData);
    return (
      <Row >
        <Col className='Dashboard' xs={9} md={9}>
          <NavSortCharacters/>
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