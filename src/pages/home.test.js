import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Home from './home'


it('renders correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(< Home />)
    expect(queryByTestId('search-button')).toBeTruthy();
    expect(queryByPlaceholderText('Search Github Username...')).toBeTruthy();
})
