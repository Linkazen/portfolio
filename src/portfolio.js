const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://linkazen.github.io/portfolio',
  title: 'JH Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jonathan Hurst',
  role: 'Game/Engine Developer',
  picture:
    'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    "I'm an engineer primarily working with C++, C#, Godot and Unity. I enjoy creating games and working on backend systems for engines and other types of apps.",
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jonathan-hurst-ba82702b2/',
    github: 'https://github.com/Linkazen',
    itchio: 'https://linkazen.itch.io/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Galactic Garage',
    description:
      'A chaotic couch co-op multiplayer game, where you repair ships together with a friend.',
    stack: ['Godot', 'GDScript'],
    livePreview: 'https://zero-bounds-studios.itch.io/galactic-garage',
    image: 'GalacticGaragePoster.png',
  },
  {
    name: 'Born to Krill',
    description:
      'A short Cuphead style game about a shrimp battling an octopus. Created for the Global Game Jam 2025.',
    stack: ['Unity', 'C#'],
    sourceCode: 'https://github.com/Linkazen/GlobalGameJam2025',
    livePreview: 'https://aronagox.itch.io/born-to-krill',
    image: 'BornToKrillCover.png',
  },
  {
    name: 'Sincantation',
    description:
      'A rogue-like where you combine spells to create unique incantations of destruction as you fight through multiple floors and enemies.',
    stack: ['Unity', 'C#'],
    sourceCode: 'https://github.com/Serpendio/2-too-many-jam',
    livePreview: 'https://jowsey.itch.io/sincantation',
    image: 'SincantationCover.png',
  },
  {
    name: 'World Machine',
    description:
      'An object oriented DX11 engine utilising C++ to implement full object serialization, Jolt physics and a full editor with reflection capabilities and level creation.',
    stack: ['C++'],
    sourceCode: 'https://github.com/Linkazen/WorldMachine',
  },
]

const skills = [
  'C++',
  'C#',
  'Godot',
  'GDScript',
  'Unity',
  'JavaScript',
  'TypeScript',
  'Perforce',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jpch2k4@gmail.com',
}

export { header, about, projects, skills, contact }
