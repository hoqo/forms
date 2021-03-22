export interface FieldContainer {
    type: 'field-container';
    // we usually need a title for the group
    title?: string; // translation key
    elements: (Input | Select | Textarea | RadioGroup)[];
    className?: string;
}

export interface Paragraph {
    type: 'paragraph';
    text: string; // translation key
    className?: string;
}

export interface Button {
    type: 'button';
    name: string;
    text: string; // translation key
    className?: string;
    action?: string; // action to be handled by form actions (ie submit, delete etc)
}

export interface BaseFormField {
    type: 'field';
    name: string;
    label: string; // translation key
    className?: string;
    defaultValue?: string;
}

export interface ValidationRules {
    [name: string]: Rule[];  // name is a unique field key on the element
}

export interface Action {
    [key: string]: {
        // TBD: some action data
    }
}

// ----------------------------------------------------------------------

interface Textarea extends BaseFormField {
    fieldType: 'textarea';
    placeholder?: string; // translation key
}

interface Input extends BaseFormField {
    fieldType: 'email' | 'text' | 'checkbox';
    placeholder?: string; // translation key
}

interface Select extends BaseFormField {
    fieldType: 'select';
    placeholder: string;
    defaultValue?: string;
    multiple?: boolean;
    options: Option[];
}

interface RadioGroup {
    type: 'field';
    fieldType: 'radio';
    name: string;
    options: Option[];
    defaultValue?: string;
}

interface Option {
    label: string;
    value: string;
}

// ----------------------------------------------------------------------

interface Rule {
    type: string;
    message: string;
    value?: any;
}
