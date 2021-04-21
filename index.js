const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Mariliz Pereira Jorge's version
const adjectives = [
  "Ignóbil", "Basculho", "Baixo", "Repugnante", "Canalha", "Deplorável", "Mesquinho", "Patife", "Ordinário", "Reles", "Pulha", "Sórdido", "Torpe", "Velhaco", "Abominável", "Detestável", "Ralé", "Biltre", "Infame", "Bandalho", "Aberração", "Calhorda", "Desprezível", "Pífio", "Ignorante", "Vil", "Ribaldo", "Soez", "Jacodes", "Cafajeste", "Bronco", "Inculto", "Boçal", "Néscio", "Estúpido", "Rude", "Verme", "Desgraçado", "Maldito", "Jumento", "Monstruoso", "Sádico", "Burro", "Insensível", "Mentecapto", "Demônio", "Desalmado", "Incapaz", "Covarde", "Crápula", "Incompetente", "Doentio", "Sociopata", "Peste", "Idiota", "Energúmeno", "Reaça", "Desequilibrado", "Imoral", "Rato", "Mandrião", "Beócio", "Abjeto", "Descarado", "Pusilânime", "Enxurro", "Choldra", "Gentalha", "Labrusco", "Desrespeitoso", "Cruel", "Facínora", "Atroz", "Maligno", "Cafona", "Execrável", "Infando", "Nefando", "Abominável", "Inclemente", "Mau", "Sicário", "Viperino", "Tirano", "Impiedoso", "Desumano", "Malfeitor", "Celerado", "Estrupício", "Chorume", "Louco", "Escroto", "Lixo", "Inútil", "Escória", "Ogro", "Mitômano", "Ególatra", "Tosco", "Verdugo", "Mentiroso", "Asno", "Babaca", "Déspota", "Autoritário", "Morte", "Opressor", "Tapado", "Mandão", "Autocrata", "Desnecessário", "Safardana", "Prepotente", "Abusivo", "Injusto", "Reacionário", "Fascista", "Cínico", "Animal", "Desaforado", "Histrião", "Grosseiro", "Vulgar", "Malandro", "Inconveniente", "Sujo", "Sem-vergonha", "Obsceno", "Brega", "Charlatão", "Perverso", "Monstro", "Ditador", "Embusteiro", "Horrível", "Desnaturado", "Carrasco", "Egocêntrico", "Mariola", "Salafrário", "Imbecil", "Lunático", "Bufão", "Garganta", "Farofeiro", "Farsante", "Oportunista", "Indefensável", "Broxável", "Carniceiro", "Irresponsável", "Excrementíssimo", "Marginal", "Praga", "Traiçoeiro", "Criminoso", "Terrorista", "Asqueroso", "C", "d", "boi", "Podre", "Capiroto", "Embuste", "Lazarento", "Indecoroso", "Desmoralizado", "Imprudente", "Maléfico", "Parasita", "Delinquente", "Seboso", "Coisa-ruim", "Quadrilheiro", "Arrombado", "Mau-caráter", "Frouxo", "Fracassado", "Ressentido", "Obtuso", "Boçal", "Brutamontes", "Cavalgadura", "Descortês", "Lorpa", "Pateta", "Cretino", "Parvo", "Pacóvio", "Inapto", "Desqualificado"
]

getRandomAdjective = () => {
  const randomAjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  return randomAjective;
}

app.get('/v1/captain/adjectives', (req, res) => {
  res.send(getRandomAdjective());
});

app.get('/v1/captain/adjectives/all', (req, res) => {
  res.send(adjectives);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
