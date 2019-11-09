import React from 'react';
import Dashboard from "./Dashboard";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard/>);
    });


});
