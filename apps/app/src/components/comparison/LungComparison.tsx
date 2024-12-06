import ComparisonTemplate from './ComparisonTemplate';

const LungComparison = () => {
  return (
    <ComparisonTemplate
      organPath={"/organs/lungs.svg"}
      oceanPath={"/oceans/plants.svg"}
      title={"Les plantes marines sont les poumons des océans"}
      organName={"Les poumons"}
      oceanName={"Les plantes marines"}
      organDescription={[
        "Les poumons permettent d'oxygéner le sang en captant l'oxygène de l'air.",
        "Ils éliminent le dioxyde de carbone du corps.",
        "Ils jouent un rôle crucial dans la régulation du pH sanguin.",
        "Ils sont constitués d'alvéoles où les échanges gazeux ont lieu.",
        "Ils sont vulnérables à l'air vicié, comme la pollution atmosphérique qui réduit leur efficacité.",
        "Les particules fines et les gaz toxiques inhalés peuvent provoquer des maladies respiratoires chroniques.",
        "Le tabagisme et l'exposition prolongée à des polluants endommagent durablement les tissus pulmonaires."
      ]}
      oceanDescription={[
        "Les plantes marines, comme le phytoplancton, produisent une grande partie de l'oxygène terrestre.",
        "Elles absorbent le dioxyde de carbone présent dans l'eau des océans.",
        "Elles contribuent à maintenir l'équilibre chimique des océans.",
        "Elles servent de refuge et de nourriture à de nombreuses espèces marines.",
        "Elles sont vulnérables à la pollution marine, comme les hydrocarbures, plastiques et produits chimiques, qui nuisent à leur développement.",
        "Les eaux contaminées par des polluants empêchent ces plantes de remplir efficacement leur rôle.",
        "L'acidification des océans due à l'excès de dioxyde de carbone altère leur croissance et leur capacité à produire de l'oxygène."
      ]}
    />
  );
};

export default LungComparison;
