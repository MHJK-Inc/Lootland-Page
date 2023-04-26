import React from 'react';
import { Container } from 'react-bootstrap';
import ImplementOne from '../component/ImplementOne';
import ImplementTwo from '../component/ImplementTwo';
import ImplementThree from '../component/ImplementThree';
import ImplementFour from '../component/ImplementFour';
import ImplementFive from '../component/ImplementFive';

const RecentActivity = () => {
  return (
      <Container>
        <ImplementOne/>
        <ImplementTwo/>
        <ImplementThree/>
        <ImplementFour/>
        <ImplementFive/>
      </Container>
  );
};
export default RecentActivity;
