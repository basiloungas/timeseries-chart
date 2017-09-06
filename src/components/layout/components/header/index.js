import React from 'react';

import {Link} from 'react-router-dom'
import {Page, Row, Column} from 'hedron';
import {Wrapper, Logo} from './styled';

export default () => (
  <Wrapper>
    <Page>
      <Row>
        <Column>
          <Logo>
            <Link to={'/'} >Timeseries Chart</Link>
          </Logo>
        </Column>
      </Row>
    </Page>
  </Wrapper>
);
