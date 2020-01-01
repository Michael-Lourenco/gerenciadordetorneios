const competitor = {
    createNameCompetitor: (nome)=> nome,
    createIdCompetitor: (idCompetitor) => Math.random(idCompetitor),
    createCompetitor:(nameCompetitor, idCompetitor)=>{
        return {"nameCompetitor":nameCompetitor,"idCompetitor":idCompetitor}
    } 
}

module.exports = competitor;