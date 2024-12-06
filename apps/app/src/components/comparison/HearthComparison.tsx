import ComparisonTemplate from './ComparisonTemplate';

const HeartComparison = () => {
  return (
    <ComparisonTemplate
      organPath={"/organs/heart.svg"}
      oceanPath={"/oceans/currents.svg"}
      title={"Les courants marins sont le cœur de la planète"}
      organName={"Le cœur"}
      oceanName={"Les courants marins"}
      organDescription={[
        "Le cœur permet de pomper le sang et de le faire circuler dans tout le corps.",
        "Il transporte l'oxygène et les nutriments vers les cellules.",
        "Il régule la température corporelle via la circulation sanguine.",
        "Les maladies cardiovasculaires, comme l'hypertension, endommagent ce système vital."
      ]}
      oceanDescription={[
        "Les courants marins permettent de distribuer l'eau dans les océans.",
        "Ils transportent les nutriments et les organismes vivants dans l'eau.",
        "Ils régulent la température des océans et influencent le climat global.",
        "La pollution marine et le réchauffement climatique perturbent ces courants essentiels."
      ]}
    />
  );
};

export default HeartComparison;
