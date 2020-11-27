import React from "react";
import { render, fireEvent } from '@testing-library/react';

import Home from './home'

it('renders correctly', () => {
    const { queryByTestId } = render(< Home />)

    expect(queryByTestId('search-button')).toBeTruthy();

})

