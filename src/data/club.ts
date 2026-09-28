export const club = {
  name: "La Horde",
  tagline: "Club de Force Athlétique — Lyon / Villeurbanne",
  short: "FA · Force Athlétique · Powerlifting",
  description:
    "La Horde est une association de force athlétique (powerlifting) basée à Villeurbanne, ouverte à toutes et tous. Squat, bench, deadlift : on s'entraîne sérieusement, sans se prendre au sérieux.",
  address: {
    street: "43 rue Pierre Baratin",
    postal: "69100",
    city: "Villeurbanne",
    country: "France",
    mapsQuery: "La Horde Villeurbanne powerlifting",
  },
  contact: {
    email: "horde.gym@gmail.com",
    instagram: "horde.gym",
    instagramUrl: "https://instagram.com/horde.gym",
  },
  tarifs: {
    abonnes: {
      title: "Abonnés",
      subtitle: "Pour s'entraîner à l'année",
      items: [
        {
          label: "Abonnement mensuel",
          price: "50 €",
          unit: "/ mois",
          highlight: true,
        },
        {
          label: "Licence FFForce (avec abonnement)",
          price: "70 €",
          unit: "/ an",
        },
      ],
    },
    unite: {
      title: "À l'unité",
      subtitle: "Pour tester ou passer de temps en temps",
      items: [
        {
          label: "Séance découverte (U)",
          price: "10 €",
          unit: "/ séance",
        },
        {
          label: "Carnet de 10 séances",
          price: "90 €",
          unit: "/ carnet",
          highlight: true,
        },
        { label: "Licence FFForce seule", price: "100 €", unit: "/ an" },
      ],
    },
  },
} as const;
