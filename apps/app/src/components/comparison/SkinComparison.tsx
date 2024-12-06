import ComparisonTemplate from './ComparisonTemplate';

const SkinComparison = () => {
  return (
    <ComparisonTemplate
      organPath={"/organs/skin.png"}
      oceanPath={"/oceans/surface.png"}
      title={"La surface des océans est comme la peau de la planète"}
      organName={"La peau"}
      oceanName={"La surface des océans"}
      organDescription={[
        "La peau protège le corps contre les agressions extérieures.",
        "Elle régule la température corporelle grâce à la transpiration.",
        "Elle joue un rôle dans l'élimination des toxines par la sueur.",
        "La peau est sensible aux rayons UV, aux infections et à la pollution."
      ]}
      oceanDescription={[
        "La surface des océans protège les couches inférieures des agressions climatiques.",
        "Elle échange de la chaleur et des gaz avec l'atmosphère, régulant le climat global.",
        "Elle subit des pollutions, comme les marées noires et les déchets flottants.",
        "Les rayons UV et les variations climatiques perturbent la vie en surface."
      ]}
    />
  );
};

export default SkinComparison;
