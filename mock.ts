import {FormConfig} from "./config";

const configMock: FormConfig = {
    hash: 'hash',
    id: '8f1097e6-0727-4331-a367-4018e6b333fc',
    styles: 'wide',
    submitUrl: '/post/to/service/',
    actions: [
        {
            'submit': {}
        }
    ],
    structure: [
        // Group with different elements
        {
            type: 'field-container',
            title: 'Wheelchair / rollator type',
            elements: [
                {
                    type: 'field',
                    fieldType: 'checkbox',
                    label: 'wheelchair of type 1',
                    name: 'wheelchair-1',
                    className: 'rw-2',
                },
                {
                    type: 'field',
                    fieldType: 'checkbox',
                    label: 'wheelchair of type 2',
                    name: 'wheelchair-2',
                },
                {
                    type: 'field',
                    fieldType: 'radio',
                    name: 'wheelchair',
                    options: [
                        {
                            label: 'Manual',
                            value: '1',
                        },
                        {
                            label: 'Electric',
                            value: '2',
                        },
                        {
                            label: 'Electric moped',
                            value: '3',
                        },
                        {
                            label: 'Other electronic aid',
                            value: '4',
                        }
                    ]
                },
                {
                    type: 'field',
                    fieldType: 'textarea',
                    name: 'wheelchair-description',
                    label: 'If other aid, what?',
                    placeholder: 'Type here...',
                },
                {
                    type: 'field',
                    fieldType: 'select',
                    placeholder: 'Choose the country',
                    name: 'wheelchair-description',
                    label: 'If other aid, what?',
                    options: [
                        {
                            label: 'Ukraine',
                            value: 'ua',
                        },
                        {
                            label: 'USA',
                            value: 'usa',
                        }
                    ],
                },
            ]
        },
    ],
    validations: {
        'input-email': [
            {
                type: 'required',
                message: 'This field is required.',
            }
        ],
        'input-weight': [
            {
                type: 'required',
                message: 'This field is required.',
            }
        ],
        'radio-group-gender': [
            {
                type: 'required',
                message: 'This field is required.',
            }
        ]
    }
};
