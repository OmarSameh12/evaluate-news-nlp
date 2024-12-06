// isValidUrl.test.js
const isValidUrl = require('./isValidUrl');

test('validates a correct URL', () => {
    expect(isValidUrl('https://www.example.com')).toBe(true);
});

test('validates a URL with http', () => {
    expect(isValidUrl('http://localhost:3000')).toBe(true);
});

test('invalidates an incorrect URL', () => {
    expect(isValidUrl('invalid-url')).toBe(false);
});

test('validates an IP address', () => {
    expect(isValidUrl('http://192.168.1.1')).toBe(true);
});

test('validates a URL with IPv6', () => {
    expect(isValidUrl('http://[2001:db8::1]')).toBe(true);
});

