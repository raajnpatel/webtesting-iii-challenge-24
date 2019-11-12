import React from 'react';
import Display from "./Display";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);


describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('open and unlocked', () => {
        const { getByText } = render(<Display closed = {false} locked = {false} />);

        // check for correct text
        const unlock = getByText(/unlocked/i);
        const open = getByText(/open/i);


        //check for correct colors via css classes
        expect(unlock).toHaveClass('green-led');
        // fireEvent.click(unlock);

        // expect(unlock.className).toMatch(/green-led/i);

        // check that incorrect text does not show up in the doc
        // expect(queryByText(/closed/i)).toBe(null);
    });

    it('closed and unlocked', () => {
        const {getByText} = render(<Display closed={true} locked={false}/>);

        // check for correct text
       const unlock = getByText(/unlocked/i);
        const closed = getByText(/closed/i);



    });

    it('closed and locked', () => {
        const {getByText} = render(<Display closed={true} locked={true}/>);

        // check for correct text
        const locked = getByText(/^locked$/i);
        const closed = getByText(/closed/i);

        expect(locked).toHaveClass('red-led');

    });

});