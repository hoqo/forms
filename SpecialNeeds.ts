import {FormConfig} from "./config";
import {Button, FieldContainer, Paragraph, ValidationRules} from "./elements";

const structure: (FieldContainer | Paragraph | Button)[]  = [
    {
        type: 'paragraph',
        html: 'In the form below, you fill in equipment regarding special needs, which you need to take with you to the destination and during the flight on a trip purchased by TUI. We will process submitted information and provide feedback with a confirmation or supplementary questions within four (4) working days.',
    },
    {
        type: 'paragraph',
        // TBD: links in the text
        html: 'Please note that the form refers to the flight and that we ask you to separately check that the apartment / hotel room you have chosen is adapted to your needs. Also keep in mind that large equipment that is not collapsible can not be transported on our transfer buses. In these cases, we recommend that you book a <a href="/att-resa-med-oss/funktionshinder/forfragan-handikappstransfer/">special transfer</a>.',
    },

    {
        type: 'field-container',
        title: 'Fill in your details here',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'name',
                label: 'First and last name of the person to whom the request relates (mandatory)',
                className: 'col-4 error',
            },
            {
                type: 'field',
                fieldType: 'tel',
                name: 'phoneNumber',
                label: 'Telephone',
                className: 'col-4 error',
            },
            {
                type: 'field',
                fieldType: 'text',
                name: 'bookingNumber',
                label: 'Booking number',
                className: 'col-4 error',
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
        title: 'Special assistance at the airport',
        elements: [
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'impairedHearing',
                label: 'Hearing Impaired (DEAF)',
            },
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'impairedVision',
                label: 'Impaired vision (BLND)',
            },
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'impairedDevelopment',
                label: 'Impaired development (DPNA)',
            },
        ],
    },
    {
        type: 'paragraph',
        html: 'DPNA: for people with cognitive disabilities, who need assistance at airports, for example learning difficulties, dementia, Alzheimer\'s disease, Autism and Down syndrome.',
    },

    /* Special assistance aid sections */

    // Should we handle separate section titles as paragraphs with styling? IMHO would be good to have as a separate type
    {
        type: 'paragraph',
        html: '<h3>Special assistance at the airport when traveling with an aid</h3>',
    },
    {
        type: 'field-container',
        title: 'Do you bring your own wheelchair / walker or similar?',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'ownWheelChairName',
                // Should we have the values for radio groups as booleans simply?
                options: [
                    {
                        label: 'Yes',
                        value: 'yes',
                    },
                    {
                        label: 'No',
                        value: 'no',
                    }
                ],
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Battery information',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'batteryInfo1',
                label: 'Number of batteries, weight and brand and name',
            },
            {
                type: 'field',
                fieldType: 'text',
                name: 'batteryInfo2',
                label: 'Number of volts, amperes and watt hours per battery',
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Type of assistance',
        elements: [
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'typeOfAssistance1',
                label: 'Can go helpfully, WCHR (ramp) WCHR (ramp) means that the traveler can get up / down stairs and to / from the seat on their own. The person needs a wheelchair to / from the aircraft.',
            },
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'typeOfAssistance2',
                label: 'Carrying assistance is needed, WCHS (steps) WCHS (stairs) means that the traveler can not go up / down stairs, but can go to / from his seat. The person needs a wheelchair to / from the aircraft and must be carried up / down stairs.',
            },
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'typeOfAssistance3',
                label: 'Carrying assistance is needed, WCHC (cabin) WCHC (cabin) means that the passenger is completely immobile, needs a wheelchair to / from the aircraft and must be carried up / down stairs and to / from the seat.',
            },
        ],
    },

    /* Special assistance aid sections */

    /* Other aids sections */

    {
        type: 'paragraph',
        html: '<h3>Other aids</h3>',
    },
    {
        type: 'field-container',
        title: 'Do you bring your own oxygen?',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'ownOxygenName',
                // Should we have the values for radio groups as booleans simply?
                options: [
                    {
                        label: 'Yes',
                        value: 'yes',
                    },
                    {
                        label: 'No',
                        value: 'no',
                    }
                ],
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Do you include CPAP / BIPAP?',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'cpapBipap',
                // Should we have the values for radio groups as booleans simply?
                options: [
                    {
                        label: 'Yes',
                        value: 'yes',
                    },
                    {
                        label: 'No',
                        value: 'no',
                    }
                ],
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Do you need to use the CPAP machine on board?',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'needOfcpapBipap',
                // Should we have the values for radio groups as booleans simply?
                options: [
                    {
                        label: 'Yes',
                        value: 'yes',
                    },
                    {
                        label: 'No',
                        value: 'no',
                    }
                ],
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Do you need to use the CPAP machine on board?',
        elements: [
            {
                type: 'field',
                fieldType: 'text',
                name: 'noOfBatteriesAndName',
            },
        ],
    },
    {
        type: 'field-container',
        title: 'Other medical equipment checked in',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'otherMedicalEquipmentCheckIn',
                // Should we have the values for radio groups as booleans simply?
                options: [
                    {
                        label: 'Yes',
                        value: 'yes',
                    },
                    {
                        label: 'No',
                        value: 'no',
                    }
                ],
            },
        ],
    },
    {
        type: 'paragraph',
        html: 'Note. We need detailed information about each equipment, as well as length, width, height and weight per package.',
    },
    {
        type: 'field-container',
        title: 'Other medical equipment included in the cabin',
        elements: [
            {
                type: 'field',
                fieldType: 'radio',
                name: 'otherMedicalEquipmentCabin',
                // Should we have the values for radio groups as booleans simply?
                options: [
                    {
                        label: 'Yes',
                        value: 'yes',
                    },
                    {
                        label: 'No',
                        value: 'no',
                    }
                ],
            },
        ],
    },
    {
        type: 'paragraph',
        html: 'Note. We need detailed information about each equipment, as well as length, width, height and weight per package.',
    },

    /* Other aids sections */

    {
        type: 'paragraph',
        html: 'If you have an airborne allergy of any kind, we would like to draw your attention to the fact that we as airlines can never check what the other passengers have with them for food / snacks on board. It is important to emphasize that we can never guarantee an allergy-free flight, regardless of allergy. We can also never guarantee, despite a request, that other fellow passengers do not bring with them e.g. nuts for consumption on board. Our cabin crew informs other passengers and asks them to show consideration and not open any products carried during the flight. Remember to always have any medicine in your hand luggage. The same applies to any medical certificate where you can show that the medication must be taken (in English).',
    },
    {
        type: 'field-container',
        title: 'Allergies',
        elements: [
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'allergyNuts',
                label: 'Nuts',
            },
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'allergyPeanuts',
                label: 'Peanuts',
            },
            {
                type: 'field',
                fieldType: 'checkbox',
                name: 'allergyCashew',
                label: 'Cashews',
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

const SpecialNeeds: FormConfig = {
    id: 'special-needs-form',
    hash: 'hash',
    structure,
    validations,
    submitUrl: 'submit/url',
};

