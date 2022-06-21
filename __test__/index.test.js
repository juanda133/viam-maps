import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import MapStreetview from '../src/index';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Demo/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Render Component', () => {
    render(
      <MapStreetview
        positionLat="4.7474369"
        positionLng="-74.1048802"
        googleMapsApiKey="AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA"
      />
    );
    // TIP: How to debug
    // eslint-disable-next-line no-console
    console.log(prettyDOM(screen.innerHTML));
    screen.getByTestId('component-demo');
  });

  test('Component has a wrapper class', () => {
    render(
      <MapStreetview
        positionLat="4.7474369"
        positionLng="-74.1048802"
        googleMapsApiKey="AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA"
      />
    );
    const component = screen.getByTestId('component-demo');
    expect(component).toHaveClass('demo-box');
  });

  test('Review if Action Button is enable and works', () => {
    const mockHandler = jest.fn();

    render(
      <MapStreetview
        positionLat="4.7474369"
        positionLng="-74.1048802"
        googleMapsApiKey="AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA"
      />
    );
    const btn = screen.getByText('demo.action');
    // eslint-disable-next-line no-console
    console.log(prettyDOM(btn));

    expect(btn).not.toBeDisabled();
    fireEvent.click(btn);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('Via logo is visible', () => {
    render(
      <MapStreetview
        positionLat="4.7474369"
        positionLng="-74.1048802"
        googleMapsApiKey="AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA"
      />
    );
    const img = screen.getByAltText('via logo');
    const container = img.closest('div');
    // eslint-disable-next-line no-console
    console.log(prettyDOM(container));
    expect(container).not.toHaveStyle('display: none');
    expect(container).toHaveClass('container');
  });

  test.only('Sum result 1+2 is 3', () => {
    render(
      <MapStreetview
        positionLat="4.7474369"
        positionLng="-74.1048802"
        googleMapsApiKey="AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA"
      />
    );
    const result = screen.getByText('demo.totalAmount', { exact: false });
    // eslint-disable-next-line no-console
    console.log(prettyDOM(result));
    const span = result.firstElementChild;
    expect(span.innerHTML).toBe('3');
  });
});
