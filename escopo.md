# Escopo do Projeto

Baseado no estudo realizado em [Outros Gerenciadores de Torneios](https://github.com/Michael-Lourenco/gerenciadordetorneios/blob/master/outrosgerenciadoresdetorneios.md).

# MVP (Minimum Viable Product / Produto Minimamente Viável)

O escopo inicial deste projeto é:
Uma API REST de Gerenciador de Torneios onde, dado um número qualquer de COMPETIDORES, é retornado uma COMPETIÇÃO com PARTIDAS do tipo ELIMINATÓRIO de PARTIDA ÚNICA.
Neste método de disputa, os COMPETIDORES se enfrentam em partidas melhor de uma (MD1). O vencedor continua na competição e o perdedor está automaticamente desclassificado.
Nesta API podem ser inseridos MANUALMENTE os RESULTADOS de cada PARTIDA, gerando um VENCEDOR ao final de cada partida.
Este vencedor enfrenta o VENCEDOR de outra partida, enquanto o PERDEDOR é automaticamente desclassificado da competição.
  
## Entidades da Competição formato Eliminatórias de Partida Única
  Fitrando do estudo anterior temos:
 - COMPETIÇÕES
 - COMPETIDORES
 - PARTIDAS
 - FASES/TURNOS
 - RODADAS
 
 ### COMPETIÇÕES
  -TIPO DE COMPETIÇÃO
  -SISTEMA DE DISPUTA
  -TABELA DE PARTIDAS

  
  ### SISTEMA DE DISPUTA
   - ELIMINATÓRIA SIMPLES
    -Rodadas
     - O Número de Rodadas (NR) = Expoente da potência de 2 que corresponde ao número de competidores (NC)
      - EXEMPLO: NC = 8 -> NC = 2^3 -> NR = 3 (neste caso o numero de rodadas é igual a 3)
     - OBS: Para formar disputas do tipo Eliminatória Simples e semelhantes, pode acontecer de existir a caracteristica de haver isentos na tabela se o nº de competidores for diferente de números que fazem parte da potência de 2. 
     - ISENTOS = Potência de 2 Superior - Nº de Competidores.
      - Nesse caso uma regra para encaixar esta sobra deve ser gerada. Um exemplo da regra acima aplicada:
      - Digamos que tenhamos 14 competidores.
      - A potencia de 2 superior relativa ao nº de competidores(no caso 14) é 16.
      - ISENTOS = 16-14 = 2
      - Então criamos 2 isentos (no inicio) OU (no final) OU (no inicio e no final) da tabela de confrontos. 
      - Neste caso, 2 competidores passarão automaticamente para a próxima fase, disputando com os vencedores dos confrontos das chaves subsequentes.
      - Assim, a tabela ficará correta.  
    - Cálculo do número de Partidas = Nº de partidas = nº de competidores - 1.
      
   - RODIZIO
   - DUPLA ELIMINAÇÃO
   - ETC
### TABELA DE CONFRONTOS
  - A tabela pode ser gerada de diversas formas, sendo as mais conhecidas:
    - Ordem de inscrição
    - Sorteio
    - Critério Técnico

# Resultados esperados dos EndPoints
## Eliminação Simples
```json  
singleElimination = {
    "matchups":[
      "match":["Equipe 1", "Equipe 2"], 
      "match":["Equipe 3", "Equipe 4"]  
  ]
 ,
  "results": [
   "rounds":[
      "round":[
        "match-result":[1, 2],
        "match-result":[3, 4]
      ],
      "round":[                  
       "match-result" :[5, 6],
       "match-result" :[7, 8]
      ]
    ]
  ]
}
``` 
## Competição
```json
[
  {
    "competition": {
      "id": 202,
      "competition_type": "single elimination",
      "description": "",
      "game_id": 5,
      "game_name": "Conti GO",     
      "name": "Torneio das Estrelas",
      "participants_count": 4,
      "ranked_by": "match wins",
      "show_rounds": true,
      "tie_breaks": [
        "match wins vs tied",
        "game wins",
        "points scored"
      ]
    }
  },{
    "competition": {
      "id": 534,
      "competition_type": "single elimination",
      "description": "",
      "game_id": 5,
      "game_name": "Conti GO",     
      "name": "Torneio das Estrelas",
      "participants_count": 4,
      "ranked_by": "match wins",
      "show_rounds": true,
      "tie_breaks": [
        "match wins vs tied",
        "game wins",
        "points scored"
      ]
    }
  }
 
 
]
```

## Competidor
```json
[
  {
    "competitor": {
      "id": 13251545,
      "name": "Equipe 1"
    }
  },
   {
    "competitor": {
      "id": 50215412,
      "name": "Equipe 2"
    }
  },
    {
    "competitor": {
      "id": 25455242,
      "name": "Equipe 3"
    }
  },
   {
    "competitor": {
      "id": 12478563,
      "name": "Equipe 4"
    }
  }
]
```

## Partida
```json
[
  {
    "match":{
      "id": 23457812,
      "location": null,
      "competitors":[
        {"competitor_id":12478563,"score":1,"winner":false},
        {"competitor_id":50215412,"score":4,"winner":true}
      ],
      "round": 1,
      "state": "closed",
      "competition_id": 202,
    }
  }

]

```