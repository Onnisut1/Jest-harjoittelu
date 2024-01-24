const sum = require ('./summa');
test('suorittaa yhteenlaskun 1 + 2, tulos on 3', () =>{
    expect(sum(1,2)).toBe(3);
}
);
test('suorittaa yhteenlaskun -2 + 2, tulos on 0', () =>{
    expect(sum(-2,2)).toBe(0);
}
);
test('syötteet merkkijonona syötetään poikkeus', () =>{
    expect(sum("jesse",8)).toBe("Syötä numeroita");
}
);
test('syöttetään vain yksi parametri palautetaan luku itse', () =>{
    expect(sum(8)).toBe("Syötä numeroita");
}
);
test('Ei syötetä mitään', () =>{
    expect(sum()).toBe("Syötä numeroita");
}
);