const MECH1 = [
  {
    id: 0,
    subject: 'Applied Chemistry',
    chapters: [
      {
        id: 1,
        name: 'Chemical Bonding',
        topics: [
          'Molecular orbital theory and its applications to the formation of homonuclear (H2, N2) and heteronuclear diatomic molecules (NO, CO, CN)',
          'Valence bond theory as applicable to coordination compounds and its limitations.',
          'Crystal Field Theory',
          'Splitting of octahedral, tetrahedral, and square planar complexes',
          'Crystal field stabilization energies of octahedral and tetrahedral complexes and its application.'
        ],
      },
      {
        id: 2,
        name: 'Stereochemistry of Organic Compounds',
        topics: [
          'Concept of isomerism',
          'Types of isomerism',
          'Optical isomerism-enantiomers, optical activity, properties of enantiomers, diastereomers, meso compounds, resolution of enantiomers, inversion, retention, and racemization',
          'R & S systems of nomenclature',
          'Geometric isomerism-determination of configuration of geometric isomers',
          'E & Z system of nomenclature',
          'Conformational isomerism conformational analysis of ethane and n-butane',
          'Conformations of cyclohexane',
          'Newman projection'
        ],
      },
      {
        id: 3,
        name: 'Spectroscopy',
        topics: [
          'Introduction to Spectroscopy',
          'UV-Introduction, Lambert-Beer\'s Law, selection rules, electronic transitions',
          'Application to simple organic molecules (auxochrome, chromophore), effect of conjugation and solvent on transition of organic molecules',
          'Woodward-Fieser Rules for calculating Amax for dienes',
          'Infrared Spectroscopy-Introduction, Principle of IR spectroscopy-Fundamental vibrations',
          'Application to simple organic molecules (effect of masses of atoms, bond strength, nature of substituent, hydrogen bonding on IR frequency)',
          'Sample preparation for IR'
        ],
      },
      {
        id: 4,
        name: 'Thermodynamics',
        topics: [
          'Review of objectives and limitations of chemical thermodynamics',
          'State functions',
          'Thermodynamic equilibrium, work, heat, internal energy, enthalpy, heat capacity',
          'Zeroth law of thermodynamics',
          'First law of thermodynamics',
          'Reversible, isothermal and adiabatic expansion & compression of an ideal gas',
          'Irreversible isothermal and adiabatic expansion of an ideal gas',
          'Carnot cycle and efficiency of reversible engines',
          'Enthalpy change and its measurement',
          'Flame temperature',
          'Second and third law of thermodynamics',
          'Concept of entropy',
          'Gibb\'s and Helmholtz equations',
          'Simple numericals for calculating w, q, AE, AH, and entropy'
        ],
      },
      {
        id: 5,
        name: 'Catalysis',
        topics: [
          'Catalysis and general characteristics of catalytic reactions',
          'Homogeneous catalysis',
          'Heterogeneous catalysis',
          'Acid-base catalysis and Enzyme catalysis - Michaelis Menten equations',
          'Application of catalysis for industrially important processes',
          'Hydrogenation (Wilkinson\'s catalyst)',
          'Hydroformylation',
          'Acetic acid process',
          'Wacker process'
        ],
      },
      {
        id: 6,
        name: 'Polymers',
        topics: [
          'General introduction',
          'Classification of polymers',
          'Mechanism of addition and condensation polymerization',
          'Idea of number average and weight average molecular masses of polymers',
          'Properties and uses of polystyrene, polyester, polyamide, epoxy, phenol-formaldehyde, and silicon resins'
        ],
      },
    ],
  },
  {
    id: 1,
    subject: 'Calculas',
    chapters: [
      {
        id: 1,
        name: 'Functions of One Variable',
        topics: [
          'Sequences and Series',
          'Limits of sequences',
          'Infinite series',
          'Series of positive terms',
          'Integral test',
          'Comparison test',
          'Ratio test',
          'Root test',
          'Alternating series',
          'Absolute and Conditional Convergence',
          'Leibnitz test',
          'Power series',
          'Radius of convergence of power series',
          "Taylor's and Maclaurin's Series",
        ],
      },
      {
        id: 2,
        name: 'Integral Calculus',
        topics: [
          'Length of curves',
          'Volume (disk and washer method)',
          'Surface areas of revolution',
        ],
      },
      {
        id: 3,
        name: 'Differential Calculus of Functions of Two and Three Variables',
        topics: [
          'Concept of limit and continuity of a function of two and three variables',
          'Partial derivatives',
          'Total derivative',
          'Composite function',
          'Differentiation of an implicit function',
          'Chain rule',
          "Taylor's theorem (statement only)",
          'Maxima and minima of a function of two and three variables',
          "Lagrange's method of multipliers",
        ],
      },
      {
        id: 4,
        name: 'Integral Calculus of Functions of Two and Three Variables',
        topics: [
          'Double and triple integrals',
          'Change of order of integration',
          'Applications to area and volumes',
        ],
      },
      {
        id: 5,
        name: 'Vector Differential Calculus',
        topics: [
          'Vector-valued functions and space curves',
          'Tangents, integration, and arc lengths',
          'name tangent vector',
          'Curvature and torsion of a curve',
          'Gradient of a Scalar field',
          'Directional Derivative',
        ],
      },
      {
        id: 6,
        name: 'Vector Integral Calculus',
        topics: [
          'Line integrals',
          'Vector fields',
          'Work, Circulation, and Flux',
          'Path Independence',
          'Potential functions and Conservative fields',
          "Green's theorem in the plane",
          'Surface Areas and Surface Integrals',
          "Stoke's Theorem",
          'Gauss Divergence Theorem (Statements only)',
        ],
      },
    ],
  },
  {
    id: 2,
    subject: 'Professional Communication',
    chapters: [
      {
        id: 1,
        name: 'English Grammar',
        topics: [
          'Subject-verb agreement',
          'Noun-pronoun agreement',
          'Misplaced modifiers',
          'Articles',
          'Prepositions',
          'Tenses',
          'One word substitutes',
          'Idioms and Phrases',
          'Active-Passive',
          'Synonyms -Antonyms'
        ]
      },
      {
        id: 2,
        name: 'Basic Writing Skills',
        topics: [
          'Sentence Structures',
          'Use of phrases and clauses in sentences',
          'Importance of proper punctuation',
          'Creating coherence',
          'Organizing principles of paragraphs in documents',
          'Techniques for writing precisely',
          'Paragraph, Essay, and Letter writing'
        ]
      },
      {
        id: 3,
        name: 'Communication Details',
        topics: [
          'Four Fundamental communication methods namely Writing, Speaking, Listening, and Reading',
          '7 Cs of Communication',
          'Barriers to Communication'
        ]
      },
      {
        id: 4,
        name: 'Communication in Organizations',
        topics: [
          'Formal Informal Communication',
          'Communication Networks',
          'Intra and Inter Firm Communication'
        ]
      },
      {
        id: 5,
        name: 'Modes of Communication',
        topics: [
          'Emerging channels of communication',
          'Telephone and Email Etiquettes',
          'Non-Verbal Communication',
          'Cross-culture communication',
          'Formal Presentations'
        ]
      },
      {
        id: 6,
        name: 'Communication Methods',
        topics: [
          'Reports and their types',
          'Layout of a report',
          'Writing a report',
          'Office notice',
          'Memo',
          'Business proposals',
          'Minutes of meeting'
        ]
      }
    ]
  },
  {
    id: 3,
    subject: 'Environmental Science',
    chapters: [
      {
        id: 1,
        name: 'General',
        topics: [
          'Introduction',
          'Components of the environment',
          'Environmental degradation'
        ]
      },
      {
        id: 2,
        name: 'Ecology',
        topics: [
          'Elements of ecology',
          'Ecological balance and consequences of change',
          'Principles of environmental impact assessment'
        ]
      },
      {
        id: 3,
        name: 'Air Pollution and Control',
        topics: [
          'Atmospheric composition',
          'Energy balance',
          'Climate',
          'Weather',
          'Dispersion',
          'Sources and effects of pollutants',
          'Primary and secondary pollutants',
          'Greenhouse effect',
          'Depletion of ozone layer',
          'Standards and control measures'
        ]
      },
      {
        id: 4,
        name: 'Water Pollution and Control',
        topics: [
          'Hydrosphere',
          'Natural water',
          'Pollutants: origin and effects',
          'River/lake/groundwater pollution',
          'Standards and control'
        ]
      },
      {
        id: 5,
        name: 'Land Pollution',
        topics: [
          'Lithosphere',
          'Pollutants (municipal, industrial, commercial, agricultural, hazardous solid wastes): origin and effects',
          'Collection and disposal of solid waste',
          'Recovery and conversion methods'
        ]
      },
      {
        id: 6,
        name: 'Noise Pollution',
        topics: [
          'Sources',
          'Effects',
          'Standards',
          'Control'
        ]
      }
    ]
  },
  {
    id: 4,
    subject: 'Engineering Mechanics',
    chapters: [
      {
        id: 1,
        name: 'Equilibrium of a Particle',
        topics: [
          'Vector Addition of Forces',
          'Position Vectors',
          'Dot Product',
          'Conditions for Equilibrium of a Particle',
          'Free Body Diagram',
          'Coplanar Force Systems'
        ]
      },
      {
        id: 2,
        name: 'Equilibrium of a Rigid Body',
        topics: [
          'Moment of a Force',
          'Cross Product',
          'Principle of Moments',
          'Moment of a Force about an Axis',
          'Moment of a Couple',
          'Centre of Mass',
          'Centre of Gravity',
          'Centroid',
          'Resultant of General Distributed Loading',
          'Area Moment of Inertia',
          'Mass Moment of Inertia',
          'Conditions for Rigid Body Equilibrium',
          'Free Body Diagrams',
          'Equations of Equilibrium',
          'Constraints and Statical Determinacy'
        ]
      },
      {
        id: 3,
        name: 'Structural Analysis',
        topics: [
          'Simple Trusses',
          'Method of Joints',
          'Zero-Force Members',
          'Method of Sections',
          'Frames and Machines',
          'Internal Forces',
          'Shear and Moment'
        ]
      },
      {
        id: 4,
        name: 'Friction',
        topics: [
          'Characteristics and Problems Involving Dry Friction'
        ]
      },
      {
        id: 5,
        name: 'Kinematics of a Particle',
        topics: [
          'Rectilinear Motion',
          'Curvilinear Motion',
          'Relative Motion'
        ]
      },
      {
        id: 6,
        name: 'Kinetics of a Particle',
        topics: [
          'Force and Acceleration - Newton\'s Second Law of Motion',
          'Equation of Motion',
          'Equation of Motion for a System of Particles',
          'Work and Energy - Work of a Force',
          'Principle of Work and Energy (and also for a System of Particles)',
          'Power and Efficiency',
          'Conservative Forces and Potential Energy',
          'Conservation of Energy',
          'Impulse and Momentum - Principle of Linear Impulse and Momentum (and also for a System of Particles)',
          'Conservation of Linear Momentum for a System of Particles',
          'Impact',
          'Angular Momentum',
          'Principle of Angular Impulse and Momentum'
        ]
      },
      {
        id: 7,
        name: 'Plane Kinematics of a Rigid Body',
        topics: [
          'Planar Rigid Body Motion',
          'Translation',
          'Rotation about a Fixed Axis',
          'Absolute Motion Analysis',
          'Relative Motion Analysis'
        ]
      },
      {
        id: 8,
        name: 'Planar Kinetics of a Rigid Body',
        topics: [
          'Equations of Motion - Mass Moment of Inertia',
          'Equations of Motion for Translation, Rotation, and General Motion',
          'Work and Energy - Kinetic Energy',
          'Work of a Force',
          'Work of a Couple',
          'Principle of Work and Energy',
          'Impulse and Momentum - Linear and Angular Momentum',
          'Principle of Impulse and Momentum',
          'Conservation of Momentum'
        ]
      }
    ]
  },

]

export default MECH1;