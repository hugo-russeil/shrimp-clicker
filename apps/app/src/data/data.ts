const OceanProblems = [
    {
        "id": 1,
        "nom": "La pollution plastique",
        "description": "Chaque année, des millions de tonnes de plastique finissent dans les océans, mettant en danger les écosystèmes marins et les espèces qui y vivent. Ces déchets se fragmentent en microplastiques, contaminant l’ensemble de la chaîne alimentaire."
    },
    {
        "id": 2,
        "nom": "Le réchauffement climatique et l’acidification des océans",
        "description": "Les océans absorbent une grande partie du CO₂ émis par les activités humaines, provoquant leur acidification. Ce phénomène menace les récifs coralliens et la biodiversité marine, et perturbe l’équilibre des courants océaniques essentiels au climat."
    },
    {
        "id": 3,
        "nom": "Le blanchissement des coraux",
        "description": "Ce phénomène, lié au réchauffement climatique et à l’acidification des océans, détruit les récifs coralliens, essentiels à la biodiversité marine, et servant d'abri pour de nombreuses espèces."
    },
    {
        "id": 4,
        "nom": "La surpêche",
        "description": "L’exploitation excessive des ressources marines diminue drastiquement les populations de poissons, mettant en péril la biodiversité et les communautés dépendant de la pêche."
    },
    {
        "id": 5,
        "nom": "La montée du niveau de la mer",
        "description": "Liée au réchauffement climatique, la fonte des glaces et l’expansion thermique des océans provoquent une élévation du niveau de la mer, menaçant les zones côtières et leurs populations."
    },
    {
        "id": 6,
        "nom": "Les marées noires",
        "description": "Bien que moins fréquentes, les déversements de pétrole causent des impacts catastrophiques sur les écosystèmes marins et côtiers, accumulant des hydrocarbures dans la chaîne alimentaire."
    },
    {
        "id": 7,
        "nom": "La perte de biodiversité",
        "description": "La destruction des habitats marins entraîne une diminution de la biodiversité, menaçant les écosystèmes marins essentiels à la santé globale de la planète."
    },
    {
        "id": 8,
        "nom": "Les migrations d’espèces induites par le climat",
        "description": "La hausse des températures pousse les espèces marines à migrer, perturbant les écosystèmes établis et les pêcheries."
    },
    {
        "id": 9,
        "nom": "L’introduction d’espèces invasives",
        "description": "Le transport maritime introduit des espèces non indigènes via les eaux de ballast ou les coques, menaçant les écosystèmes locaux."
    },
    {
        "id": 10,
        "nom": "Les risques liés au transport maritime",
        "description": "L'intensification du transport maritime accroît les risques de collision avec des espèces marines, de pollution et d'émissions nocives pour le climat."
    },
    {
        "id": 11,
        "nom": "La perte des écosystèmes marins arctiques et antarctiques",
        "description": "La fonte des glaces modifie les écosystèmes polaires, impactant des espèces clés et la biodiversité mondiale."
    },
    {
        "id": 12,
        "nom": "La pêche illégale, non déclarée et non réglementée (IUU)",
        "description": "Ces pratiques compromettent la gestion durable des pêcheries, épuisent les stocks et provoquent des pertes économiques."
    },
    {
        "id": 13,
        "nom": "La pollution sonore",
        "description": "Les activités humaines génèrent un bruit intense sous l’eau, perturbant les mammifères marins comme les baleines et les dauphins."
    },
    {
        "id": 14,
        "nom": "Les impacts des parcs éoliens offshore",
        "description": "Ces installations, bien qu’essentielles pour une énergie durable, modifient les habitats et interfèrent avec les routes migratoires."
    },
    {
        "id": 15,
        "nom": "L’exploitation minière des fonds marins",
        "description": "La recherche de métaux rares détruit des écosystèmes uniques et perturbe les habitats marins."
    },
    {
        "id": 16,
        "nom": "Les panaches de sédiments liés à l'exploitation minière",
        "description": "Ces panaches étouffent les communautés benthiques et propagent des polluants sur de vastes zones."
    },
    {
        "id": 17,
        "nom": "L'accumulation de PPCPs",
        "description": "Les eaux usées introduisent des produits chimiques dans l'océan, affectant la physiologie et la reproduction des organismes marins."
    },
    {
        "id": 18,
        "nom": "La désoxygénation des océans",
        "description": "La réduction des niveaux d'oxygène crée des zones mortes hostiles à la vie marine."
    },
    {
        "id": 19,
        "nom": "L’AMOC",
        "description": "Ce système de circulation joue un rôle clé dans le climat. Son affaiblissement pourrait causer des perturbations climatiques graves."
    },
    {
        "id": 20,
        "nom": "La perturbation des courants océaniques",
        "description": "Le changement climatique modifie les courants océaniques globaux, impactant la régulation de la chaleur et des nutriments."
    },
    {
        "id": 21,
        "nom": "Les déchets de pêche fantômes",
        "description": "Les filets abandonnés continuent de capturer et tuer des animaux marins, perturbant les écosystèmes."
    },
    {
        "id": 22,
        "nom": "Les microplastiques dans les eaux profondes",
        "description": "Les microplastiques s'accumulent dans les sédiments et perturbent les écosystèmes des grandes profondeurs."
    },
    {
        "id": 23,
        "nom": "L’impact des micropolluants",
        "description": "Les métaux lourds et produits chimiques industriels affectent la santé des écosystèmes marins."
    },
    {
        "id": 24,
        "nom": "Les proliférations d’algues nuisibles (HAB)",
        "description": "Les proliférations produisent des toxines dangereuses, réduisant l'oxygène et affectant la vie marine."
    },
    {
        "id": 25,
        "nom": "Les impacts de l'acidification au-delà des récifs",
        "description": "L'acidification affecte les organismes formant des coquilles, menaçant les pêcheries mondiales."
    },
    {
        "id": 26,
        "nom": "La disparition des mangroves et des herbiers marins",
        "description": "Ces habitats, essentiels pour le stockage de carbone et la biodiversité, sont détruits par l'urbanisation."
    },
    {
        "id": 27,
        "nom": "L’eutrophisation",
        "description": "L'excès de nutriments provoque des zones mortes où la vie marine ne peut prospérer."
    },
    {
        "id": 28,
        "nom": "La réduction de la taille du plancton",
        "description": "Le réchauffement climatique réduit la taille des planctons, diminuant leur capacité à stocker le carbone."
    },
    {
        "id": 29,
        "nom": "La destruction de la neige marine",
        "description": "Les forages marins détruisent les agrégats organiques qui transportent le carbone, aggravant les impacts climatiques."
    }

];