const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => {
    return `Hello ${name}!`;
}

test('should add two numbers', () => {
    const result = add(3, 4);
    expect (result).toBe(7);
});

test('should print Hello Name!', () => {
    const result = generateGreeting('Mike');
    expect (result).toBe("Hello Mike!");
});

test('should gen greeting for no name', () => {
    const result = generateGreeting();
    expect (result).toBe("Hello Anonymous!");
})