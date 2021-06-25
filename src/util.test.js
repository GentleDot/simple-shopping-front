import { addNumber } from "./util";

it('add two numbers', function () {
    const result = addNumber(1, 2);

    expect(result).toBe(3);
});
