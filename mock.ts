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
                            className: 'cl-4',
                        },
                        {
                            label: 'Electric',
                            value: '2',
                            className: 'cl-4',
                        },
                        {
                            label: 'Electric moped',
                            value: '3',
                            className: 'cl-4',
                        },
                        {
                            label: 'Other electronic aid',
                            value: '4',
                            className: 'cl-4',
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
                    name: 'wheelchair-description',
                    label: 'If other aid, what?',
                    options: [
                        {
                            label: 'Ukraine',
                            value: 'ua',
                            className: 'col-a',
                            selected: true,
                            hidden: true,
                        },
                        {
                            label: 'USA',
                            value: 'usa',
                            className: 'col-a',
                            selected: false,
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
    },
    translations: {
        'Booking number': 'Booking number',
        'Mandatory information': 'Mandatory information',
        'E-mail': 'E-mail',
        'Must be an email address': 'Must be an email address',
    },
};
