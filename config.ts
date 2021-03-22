import {Action, Button, FieldContainer, Paragraph, ValidationRules} from "./elements";

export interface FormConfig {
    id: string;
    hash: string; // generated with any change in the form, like a git-hash
    structure: (FieldContainer | Paragraph | Button)[];
    validations: ValidationRules;
    submitUrl: string; // check emailing the form res
    styles?: string;
    actions?: Action[]; // ???
}

// SmartEdit
// + Add element (FieldContainer, Paragraph, Button)

// Setup Container
// + Add field
// type = 'text' | 'email'
