export enum ProjectType {
  TUZIEMIEC = 'tuziemiec',
  WALKER = 'walker',
  ANYTRAVEL = 'anytravel',
}

export const projects = [
  {
    id: ProjectType.TUZIEMIEC,
    name: 'name.tuziemiec',
    type: 'type.tuziemiec',
    description: 'description.tuziemiec',
    link: 'https://github.com/Tuziemiec',
    image: 'assets/images/tuziemiec.png',
    technologies: [
      "technology.angular",
      "technology.java",
      "technology.springboot",
      "technology.mysql",
      "technology.docker"
    ]
  },
  {
    id: ProjectType.WALKER,
    name: 'name.walker',
    type: 'type.walker',
    description: 'description.walker',
    link: 'https://github.com/Walker',
    image: 'assets/images/walker.png',
    technologies: [
      "technology.angular",
      "technology.java",
      "technology.springboot",
      "technology.mongodb",
    ]
  },
  {
    id: ProjectType.ANYTRAVEL,
    name: 'name.anytravel',
    type: 'type.anytravel',
    description: 'description.anytravel',
    link: 'https://github.com/AnyTravel',
    image: 'assets/images/anytravel.png',
    technologies: [
      "technology.angular",
      "technology.nodejs",
      "technology.docker",
      "technology.mongodb",
    ]
  },
]
