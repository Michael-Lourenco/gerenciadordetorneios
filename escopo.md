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
 
 ### COMPETIÇÕES
  -TIPO DE COMPETIÇÃO
  -SISTEMA DE DISPUTA
  -TABELA DE CONFRONTOS

  
  ### SISTEMA DE DISPUTA
   - ELIMINATÓRIA SIMPLES
     - OBS: Para formar disputas do tipo Eliminatória Simples e semelhantes, pode acontecer de existir a caracteristica de haver isentos na tabela se o nº de participantes for diferente de números que fazem parte da potência de 2. 
     - ISENTOS = Potência de 2 Superior - Nº de Participantes.
     - Nesse caso uma regra para encaixar esta sobra deve ser gerada. Um exemplo da regra acima aplicada:
      - Digamos que tenhamos 6 participantes.
      - A potencia de 2 superior relativa ao nº de participantes no caso, é 8.
      - Então criamos 2 participantes fantasmas e encaixamos nos confrontos. 
      - Neste caso, 2 participantes passarão automaticamente para a próxima fase, visto que enfrentarão estes fantasmas.
      - Assim, a tabela ficará correta.
   - RODIZIO
   - DUPLA ELIMINAÇÃO
   - ETC

 

  
