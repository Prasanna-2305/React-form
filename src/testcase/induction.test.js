import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook } from "@testing-library/react-hooks";
import Form from '../Form';
import Induction from "../Induction";


describe('when introduction mount', () => {
    test('when render ', () => {
        render(<Induction />)
    });
    test('when submit form', () => {
        const formIsSubmitted = true
        const submitForm = jest.fn()
        render(<Form submitForm={submitForm} />)

        const { result } = renderHook(() => jest.fun());
        console.log(result, "result")       
        //    expect(result.current.value).toEqual("TEST STRING");
        fireEvent.change(screen.queryByTestId("handleFirst"), { target: { value: "name" } })
        fireEvent.change(screen.queryByTestId("handleSubmit"), { target: { value: "name" } })
        fireEvent.click(screen.queryByTestId("handleSubmit"))
    });
})

