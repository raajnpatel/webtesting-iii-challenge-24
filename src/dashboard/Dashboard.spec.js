import React from 'react';
import Dashboard from "./Dashboard";
import { render, cleanup, fireEvent } from '@testing-library/react/pure';
import '@testing-library/jest-dom/extend-expect';

describe('<Dashboard />', () => {
    beforeEach(cleanup);
    it('renders without crashing', () => {
        render(<Dashboard/>);
    });
});

describe("<Dashboard /> state transitions", () => {
    const { getByText } = render(<Dashboard/>);

    it('default state: open and unlocked', () => {
        //verify open and unlocked
        getByText(/^open$/i);
        getByText(/^unlocked$/i);

        getByText(/^lock gate$/i);
        getByText(/^close gate$/i);
    });

    it('open and unlocked to close and unlocked', () => {
        const closeBtn = getByText(/^close gate$/i);
        fireEvent.click(closeBtn);

        // check display text
        getByText(/^closed$/i);
        getByText(/^unlocked$/i);

        // check button text
        getByText(/^lock gate$/i);
        getByText(/^open gate$/i);
    });

    it('open and unlocked to close and locked', () => {
        const lockBtn = getByText(/^lock gate$/i);
        fireEvent.click(lockBtn);

        // check display text
        getByText(/^closed$/i);
        getByText(/^locked$/i);

        // check button text
        getByText(/^unlock gate$/i);
        getByText(/^open gate$/i);
    });

    it('open and locked to close and unlocked', () => {
        const lockBtn = getByText(/^unlock gate$/i);
        fireEvent.click(lockBtn);

        // check display text
        getByText(/^closed$/i);
        getByText(/^unlocked$/i);

        // check button text
        getByText(/^lock gate$/i);
        getByText(/^open gate$/i);
    });

    it('open and locked to open and unlocked', () => {
        const openBtn = getByText(/^open gate$/i);
        fireEvent.click(openBtn);

        // check display text
        getByText(/^open$/i);
        getByText(/^unlocked$/i);

        // check button text
        getByText(/^lock gate$/i);
        getByText(/^close gate$/i);
    });
});
