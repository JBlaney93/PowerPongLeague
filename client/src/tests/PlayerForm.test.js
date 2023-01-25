import {render, fireEvent, waitFor} from '@testing-library/react';
import PlayerForm from '../components/player_components/PlayerForm';
import { BrowserRouter } from 'react-router-dom';

describe('PlayerForm ', () => {
    let container;
    beforeEach(() => {
      container = render(<PlayerForm/>, {wrapper: BrowserRouter})
    })


    it('input field should start empty', () => {
        const input = container.getByTestId("input-field")
        expect(input.textContent).toEqual("")
    })

    it('input field should accept input', () => {
        const input = container.getByTestId("input-field")
        fireEvent.change(input, {target: {value: "Name"}})
        expect(input.value).toEqual("Name")
    })

    it('can be clicked', () => {
        const saveButton = container.getByTestId("save-player-button")
        fireEvent.click(saveButton);
    })



})