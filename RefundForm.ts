import {FormConfig} from "./config";
import {Button, FieldContainer, Paragraph, ValidationRules} from "./elements";

const structure: (FieldContainer | Paragraph | Button)[]  = [
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'bookingNumber',
                label: 'Booking number',
            },
        ],
    },
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'customerName',
                label: 'Main traveler',
            },
        ],
    },
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'bank',
                label: 'Bank',
            },
        ],
    },
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'clearingNumber',
                label: 'Clearing number',
            },
        ],
    },
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'accountNumber',
                label: 'Account number',
            },
        ],
    },
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'accountOwner',
                label: 'Account holder',
            },
        ],
    },
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'tel',
                name: 'phoneNumber',
                label: 'Phone number',
            },
        ],
    },
    {
        type: 'field-container',
        elements: [
            {
                type: 'field',
                fieldType: 'email',
                name: 'email',
                label: 'E-mail',
            },
        ],
    },
    {
        type: 'button',
        name: 'submitButton',
        text: 'Send',
        className: 'form-row right-align',
        action: 'submit',
    }
];

const validations: ValidationRules  = {
    'bookingNumber': [
        {
            type: 'required',
            message: 'Mandatory information',
        },
    ],
    'customerName': [
        {
            type: 'required',
            message: 'Mandatory information',
        },
    ],
    'bank': [
        {
            type: 'required',
            message: 'Mandatory information',
        },
    ],
    'clearingNumber': [
        {
            type: 'required',
            message: 'Mandatory information',
        },
    ],
    'accountNumber': [
        {
            type: 'required',
            message: 'Mandatory information',
        },
    ],
    'accountOwner': [
        {
            type: 'required',
            message: 'Mandatory information',
        },
    ],
    // Should we have a default pattern for the region sent over to us?
    'phoneNumber': [
        {
            type: 'tel',
            message: 'Not a phone number',
            value: /^\d{10}$/,
        },
    ],
    'email': [
        {
            type: 'required',
            message: 'Mandatory information',
        },
        {
            type: 'email',
            message: 'Must be an email address',
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        },
    ],
};

const RefundForm: FormConfig = {
    id: 'refund-form',
    hash: 'hash',
    structure,
    validations,
    submitUrl: 'submit/url',
};

