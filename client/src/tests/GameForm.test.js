import {render, fireEvent, waitFor} from '@testing-library/react';
import GameForm from '../components/game_components/GameForm';
import { BrowserRouter } from 'react-router-dom';

describe('GameForm ', () => {
    let container;
    beforeEach(() => {
      container = render(<GameForm/>, {wrapper: BrowserRouter})
    })

    // it('should start counter at 0', () => {
    //     const counter = container.getByTestId("counter-button")
    //     expect(counter.textContent).toEqual('0');
    // })


})