import React, { Component } from 'react';
import { getHeros } from 'actions/app';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Characters from '../../../assets/img/characters.png';
import arrowDown from '../../../assets/img/btn_arrow_right.png';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class NavSortCharacters extends Component {

  state = {
    value: null,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };
  render() {
    return (
      <Row className='NavSortCharacters'>
        <Col xs={12} >
          <Row  middle='xs'className='title'>
            <Col xs={6}  >
              <Row  middle='xs'>
                <img src={Characters} />
                <strong>Characters</strong>
              </Row>
            </Col>
          <Col xs={6}  >
            <Row  end='xs'>
               <SelectField
                hintText='Sort by'
                style={{ 
                  backgroundColor: 'white',
                  padding:'0px 11px 0px 11px',
                  color:'#dcdcdc',
                  border: '1px solid',
                   }}
                labelStyle={{ 
                  color:'black',
                   }}
                hintStyle={{ 
                  color:'black',
                   }}
                underlineStyle={{display: 'none'}}
                value={this.state.value}
                onChange={this.handleChange}
                maxHeight={200}
                iconStyle={{transform: 'rotate(90deg)'}}
                dropDownMenuProps={{
                iconButton:<img src={arrowDown} />,
                }}
                  >
                {items}
              </SelectField>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}