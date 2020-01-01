const competitors =require('../src/competitors.js');

describe('Testes para criar os Competidores',()=>{
    it('Criar um objeto Competidor com nameCompetitor=Pedro e idCompetitor=5',()=>{
        expect(competitors.createCompetitor("Pedro",5))
        .toEqual({"nameCompetitor":"Pedro","idCompetitor":5}) 
    })  
    it('Criar o nome do Competidor chamado Pedro',()=>{
        expect(competitors.createNameCompetitor("Pedro")).toEqual("Pedro") 
    })   

    it('Criar o idCompetidor que deve ser igual ao numero randomico gerado entre 0 e 10',()=>{
        
        expect(competitors.createIdCompetitor(10)).toBeLessThanOrEqual(10);
    })   
})

