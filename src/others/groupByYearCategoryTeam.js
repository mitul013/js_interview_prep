// Adani AI interview question
// Question -->  gov share 1 ruppes every year to every category for awards, now every category has some teams.
// category distribute to their teams equally, every team has eployee
// team distribute to their employee equally.
// Input

const awards = [
  {
    name: "James Peebles",
    category: "Physics",
    team: "Theoretical discoveries in physical cosmology",
    year: 2019,
  },
  {
    name: "Michel Mayor",
    category: "Physics",
    team: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "Didier Queloz",
    category: "Physics",
    team: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "John B. Goodenough",
    category: "Chemistry",
    team: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "M. Stanley Whittingham",
    category: "Chemistry",
    team: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Akira Yoshino",
    category: "Chemistry",
    team: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Arthur Ashkin",
    category: "Physics",
    team: "Optical tweezers and their application to biological systems",
    year: 2018,
  },
  {
    name: "Gerard Mourou",
    category: "Physics",
    team: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Donna Strickland",
    category: "Physics",
    team: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Frances H. Arnold",
    category: "Chemistry",
    team: "Directed evolution of enzymes",
    year: 2018,
  },
  {
    name: "George P. Smith",
    category: "Chemistry",
    team: "Phage display of peptides and antibodies.",
    year: 2018,
  },
  {
    name: "Sir Gregory P. Winter",
    category: "Chemistry",
    team: "Phage display of peptides and antibodies.",
    year: 2018,
  },
];

// Output
const prizes = [
  {
    category: "Physics",
    year: 2019,
    winners: [
      {
        name: "James Peebles",
        share: 0.5,
      },
      {
        name: "Michel Mayor",
        share: 0.25,
      },
      {
        name: "Didier Queloz",
        share: 0.25,
      },
    ],
  },
  {
    category: "Chemistry",
    year: 2019,
    winners: [
      {
        name: "John B. Goodenough",
        share: 0.3333,
      },
      {
        name: "M. Stanley Whittingham",
        share: 0.3333,
      },
      {
        name: "Akira Yoshino",
        share: 0.3333,
      },
    ],
  },
  {
    category: "Physics",
    year: 2018,
    winners: [
      {
        name: "Arthur Ashkin",
        share: 0.5,
      },
      {
        name: "Gerard Mourou",
        share: 0.25,
      },
      {
        name: "Donna Strickland",
        share: 0.25,
      },
    ],
  },
  {
    category: "Chemistry",
    year: 2018,
    winners: [
      {
        name: "Frances H. Arnold",
        share: 0.5,
      },
      {
        name: "George P. Smith",
        share: 0.25,
      },
      {
        name: "Sir Gregory P. Winter",
        share: 0.25,
      },
    ],
  },
];

function groupByYearAndCategory() {
  const map = {};
  awards.forEach((item, idx) => {
    const { year, category } = item;
    const key = `${year}_${category}`;
    if (map[key]) {
      map[key].winners.push(item);
    } else {
      map[key] = {
        year,
        category,
        winners: [item],
      };
    }
  });
  return Object.values(map);
}

function helperTogroupByReasearch(awards) {
  const map = {};
  awards.forEach((item, idx) => {
    const { team } = item;
    const key = `${team}`;
    if (map[key]) {
      map[key].push(item);
    } else {
      map[key] = [item];
    }
  });
  return Object.values(map);
}

function calculateShare(items) {
  const map = {};
  const teamShare = 1 / items.length;
  items.map((item) => {
    const memberShare = teamShare / item.length;
    item.map((mem) => {
      const { name } = mem;
      mem.share = memberShare;
      if (map[name]) {
        map[name].share = map[name].share + memberShare;
      } else {
        map[name] = { name };
        map[name].share = memberShare;
      }
    });
  });
  return Object.values(map);
}

function groupByReasearch(groups) {
  groups.map((group) => {
    const mapList = helperTogroupByReasearch(group.winners);
    group.winners = calculateShare(mapList);
  });
  console.log(groups);
  return groups;
}

const groupedYearAndCategory = groupByYearAndCategory(awards);
groupByReasearch(groupedYearAndCategory);
