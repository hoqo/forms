export interface FieldContainer {
    type: 'field-container';
    title?: string;
    // Should we add possibility to add paragraphs to containers?
    elements: (Input | Select | Textarea | RadioGroup)[];
    className?: string;
}

export interface Paragraph {
    type: 'paragraph';
    html: string;
    className?: string;
}

export interface Button {
    type: 'button';
    name: string;
    text: string;
    className?: string;
    action?: string; // action to be handled by form actions (ie submit, delete etc)
}

type InputType = 'email' | 'text' | 'checkbox' | 'tel' | 'number';

type FieldType = 'textarea' | 'select' | 'radio' | InputType;

export interface BaseFormField {
    type: 'field';
    fieldType: FieldType;
    name: string;
    label?: string;
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
    label: string;
    placeholder?: string;
}

interface Input extends BaseFormField {
    fieldType: InputType;
    placeholder?: string;
}

interface Select extends BaseFormField {
    fieldType: 'select';
    label: string;
    placeholder: string;
    multiple?: boolean;
    options: Option[];
}

interface RadioGroup extends BaseFormField {
    fieldType: 'radio';
    options: Option[];
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
