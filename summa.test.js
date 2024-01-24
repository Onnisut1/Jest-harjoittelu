const sum = require ('./summa');
test('suorittaa yhteenlaskun 1 + 2, tulos on 3', () =>{
    expect(sum(1,2)).toBe(3);
}
);
test('suorittaa yhteenlaskun -2 + 2, tulos on 3', () =>{
    expect(sum(-2,2)).toBe(0);
}
);