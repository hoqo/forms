import {FormConfig} from "./config";
import {Button, FieldContainer, Paragraph, ValidationRules} from "./elements";

const structure: (FieldContainer | Paragraph | Button)[]  = [
    {
        type: 'paragraph',
        html: 'If you have a folding wheelchair, it can fit in a shuttle bus that you can book online when booking your trip. If you have an electric wheelchair, or a wheelchair that doesn’t fold into a pile, you’ll need a special shuttle that you can book with this form. You should also book a special transport if any of the passengers cannot get on the bus themselves or if other large aids that are not collapsible leave for the trip.',
    },
    {
        type: 'paragraph',
        html: 'After receiving the completed form, we will contact you within four business days. In this case, we can also tell you more about the price of transportation. Special transfers must be booked no later than 7 days before departure. If you wish to cancel the special transfer, you can do so free of charge no later than 5 days before departure.',
    },
    {
        type: 'paragraph',
        html: '<strong>This form only applies to transportation to the destination.</strong> Have you checked that the hotel room or apartment you booked is suitable for your needs and also provided a wheelchair for the flight? <a href="/hyva-tietaa/terveys-ja-erityistarpeet/liikuntarajoitteiset/">More information for passengers with reduced mobility can be found here.</a>'
    },
    {
        type: 'paragraph',
        html: '<strong>Please note that some of our destinations do not have the possibility to offer special transport.</strong> Such destinations include Samos, the coast of Marmaris, Cape Verde, the Dominican Republic and Thailand.'
    },

    {
        type: 'field-container',
        title: 'Fill in your information',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'name',
                label: 'Name',
                className: 'col-4',
            },
            {
                type: 'field',
                fieldType: 'tel',
                name: 'phoneNumber',
                label: 'Telephone',
                className: 'col-4',
            },
            {
                type: 'field',
                fieldType: 'text',
                name: 'bookingNumber',
                label: 'Reservation number',
                className: 'col-4',
            },
            {
                type: 'field',
                fieldType: 'email',
                name: 'email',
                label: 'E-mail',
                className: 'col-4',
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Wheelchair / rollator type',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'wheelChairType',
                options: [
                    {
                        label: 'Manual',
                        value: 'Manual',
                    },
                    {
                        label: 'Electric',
                        value: 'Electric',
                    },
                    {
                        label: 'Electric moped',
                        value: 'Electric moped',
                    },
                    {
                        label: 'Other electronic aid',
                        value: 'Other electronic aid',
                    },
                ],
            },
            {
                type: 'field',
                fieldType: 'textarea',
                name: 'wheelChairTypeMessage',
                label: 'If other aid, what?',
            },
        ],
    },

    {
        type: 'field-container',
        title: 'Wheelchair / rollator dimensions (cm, kg)',
        elements: [
            {
                type: 'field',
                fieldType: 'number',
                name: 'name',
                label: 'Length',
                className: 'col-4',
            },
            {
                type: 'field',
                fieldType: 'number',
                name: 'height',
                label: 'Height (max. 86 cm)',
                className: 'col-4',
            },
            {
                type: 'field',
                fieldType: 'number',
                name: 'width',
                label: 'Width',
                className: 'col-4',
            },
            {
                type: 'field',
                fieldType: 'number',
                name: 'weight',
                label: 'Weight',
                className: 'col-4',
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Does the wheelchair / rollator need to be folded?',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'foldable',
                options: [
                    {
                        label: 'Yes',
                        value: 'Yes',
                    },
                    {
                        label: 'No',
                        value: 'No',
                    },
                ],
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Do you need to sit in a wheelchair during transportation?',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'sitingchair',
                options: [
                    {
                        label: 'Yes',
                        value: 'Yes',
                    },
                    {
                        label: 'No',
                        value: 'No',
                    },
                ],
            },
            {
                type: 'field',
                fieldType: 'textarea',
                name: 'extraInfoMessage',
                label: 'Are other aids (eg lift or toilet aids) included in the transport? We automatically reserve one standard-sized suitcase per adult passenger for transportation.',
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
    'name': [
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
    'bookingNumber': [
        {
            type: 'required',
            message: 'Mandatory information',
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

const SpecialTransport: FormConfig = {
    id: 'special-transport-form',
    hash: 'hash',
    structure,
    validations,
    submitUrl: 'submit/url',
};

