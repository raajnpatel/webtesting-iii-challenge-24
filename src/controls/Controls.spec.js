import React from 'react';
import Controls from "./Controls";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls/>);
    });
});