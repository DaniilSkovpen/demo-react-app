import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='baby i want you' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('baby i want you')
    });

    test('after creation should be displayed', () => {
        const component = create(<ProfileStatus status='baby i want you' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('after creation span should contain correct status', () => {
        const component = create(<ProfileStatus status='baby i want you' />);
        const instance = component.root;
        expect(() => {
            let input = instance.findByType('input')
        }).toThrow();
    });

    test('after creation span should contain be same status', () => {
        const component = create(<ProfileStatus status='baby i want you' />);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.children[0]).toBe('baby i want you');
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='baby i want you' />);
        const instance = component.root;
        let span = instance.findByType("span");
        span.props.onDoubleClick();
        let input= instance.findByType("input");
        expect(input.props.value).toBe('baby i want you');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='baby i want you' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditorMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
