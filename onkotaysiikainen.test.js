const onkoTaysiIkainen= require ('./onkotaysiikainen');
test('suorittaa yhteenlaskun 1 + 2, tulos on 3', () =>{
    expect(onkoTaysiIkainen(17)).toBe("Ei täysi ikäinen");
}
);