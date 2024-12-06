import ComparisonTemplate from './ComparisonTemplate';

const LiverComparison = () => {
  return (
    <ComparisonTemplate
      organPath={"/organs/liver.svg"}
      oceanPath={"/oceans/corals.png"}
      title={"Les filtres naturels sont le foie des océans"}
      organName={"Le foie"}
      oceanName={"Les filtres naturels"}
      organDescription={[
        "Le foie détoxifie le sang en éliminant les substances nocives.",
        "Il stocke des nutriments essentiels et régule le métabolisme.",
        "Il produit de la bile pour faciliter la digestion des graisses.",
        "Les maladies comme la cirrhose et l'hépatite altèrent son fonctionnement."
      ]}
      oceanDescription={[
        "Les filtres naturels, comme les récifs et les mangroves, nettoient les eaux marines.",
        "Ils piègent les sédiments et les polluants pour préserver l'écosystème marin.",
        "Ils stockent le carbone et réduisent les impacts du réchauffement climatique.",
        "La destruction de ces habitats par l'homme réduit leur capacité à purifier les océans."
      ]}
    />
  );
};

export default LiverComparison;
