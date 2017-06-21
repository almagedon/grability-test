import React from 'react'
import SearchBar from 'material-ui-search-bar'
import { Grid, Row, Col } from 'react-flexbox-grid';


const Search = (props) => (
  <Col xs={12} className='flexCenter' style={{ lineHeight: 'initial',height: '64px'}}>
    <Col xs={5}>
      <SearchBar 
        {...props}
        onRequestSearch={() => console.log('onRequestSearch')}
        hintText='Search character...'
        style={{
          width:'100%',
          overflow: 'hidden'
        }}
      />
    </Col>
  </Col>
);

export default Search