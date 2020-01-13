const filter = require('./filter')
const contatos =[{"nome":"paulo","sobrenome":"camargo"},{"nome":"pedro","sobrenome":"camargo"}]

const encontrado ={"nome":"paulo","sobrenome":"camargo"}

describe('Filtro',()=>{
    test('Pesquisar um nome que existe na base',()=>{
        expect(filter(contatos,"paulo")).toEqual(encontrado)
    })

    test('Pesquisar um nome que nao existe na base',()=>{
        expect(filter(contatos,"xpto")).toBeUndefined()
    })   
})

