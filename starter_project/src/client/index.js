// js files
import { handleSubmit } from './js/formHandler'
import {checkForName} from './js/nameChecker'
const isValidUrl = require('./urlValidator');

test('validates a correct URL', () => {
    expect(isValidUrl('https://www.example.com')).toBe(true);
});

test('invalidates an incorrect URL', () => {
    expect(isValidUrl('invalid-url')).toBe(false);
});

alert("I EXIST")

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForName,
    handleSubmit
}