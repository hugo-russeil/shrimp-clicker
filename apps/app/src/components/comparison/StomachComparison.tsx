import ComparisonTemplate from './ComparisonTemplate';

const StomachComparison = () => {
  return (
    <ComparisonTemplate
      organPath={"/organs/stomach.png"}
      oceanPath={"/oceans/seafloor.png"}
      title={"Les fonds marins sont l'estomac des océans"}
      organName={"L'estomac"}
      oceanName={"Les fonds marins"}
      organDescription={[
        "L'estomac décompose les aliments grâce à des enzymes et des acides.",
        "Il absorbe les nutriments nécessaires pour alimenter le corps.",
        "Il élimine les éléments inutiles en les envoyant vers l'intestin.",
        "Les troubles comme les ulcères ou les reflux gastro-œsophagiens altèrent son fonctionnement.",
        "Une alimentation déséquilibrée ou un excès d'acidité peut endommager les parois de l'estomac."
      ]}
      oceanDescription={[
        "Les fonds marins décomposent les matières organiques qui se déposent depuis la surface.",
        "Ils abritent des bactéries et des organismes essentiels à la dégradation des déchets.",
        "Ils stockent et recyclent les nutriments nécessaires à l'écosystème marin.",
        "La pollution marine, comme les déchets plastiques, perturbe leur capacité à recycler efficacement.",
        "L'extraction minière des fonds marins endommage ces écosystèmes cruciaux pour la santé des océans."
      ]}
    />
  );
};

export default StomachComparison;
