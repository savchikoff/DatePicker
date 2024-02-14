import Button from ".";

export default {
    title: 'Calendar/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        actions: {}
    },
    argTypes: {
        label: {
            name: "Button label"
        }
    }
};

export const BasicButton = {
    args: {
        label: "Button"
    }
};