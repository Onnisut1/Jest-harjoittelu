const onkoTaysiIkainen= require ('./onkotaysiikainen');
test('Onko 17 vuotias täysi ikäinen', () =>{
    expect(onkoTaysiIkainen(17)).toBe("Ei täysi ikäinen");
}
);
test('Onko 18 vuotias täysi ikäinen', () =>{
    expect(onkoTaysiIkainen(18)).toBe("Täysi ikäinen");
}
);
test('Onko teksti', () =>{
    expect(onkoTaysiIkainen("Liisa")).toBe("Anna NUMERO");
}
);
