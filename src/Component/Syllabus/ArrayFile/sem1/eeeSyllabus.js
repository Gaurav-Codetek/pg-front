const EEE1 = [
  {
    id: 0,
    subject: "Applied Chemistry",
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
    ]
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
    id: 3,
    subject: "Electrical Measurement and Instrumentation",
    chapters: [
      {
        id: 1,
        name: 'Units, Dimensions and Standards',
        topics: [
          'Introduction to MKS & Rationalized MKSA System',
          'SI Units',
          'Standards of EMF, Resistance, Capacitance and Inductance',
          'Systematic errors'
        ]
      },
      {
        id: 2,
        name: 'General Theory of Analog Measuring Instruments',
        topics: [
          'Operating torque, damping & controlling torque, T/W ratio, Pointers & Scales',
          'Principles of operation of various types of electromechanical indicating / registering instruments',
          'PMMC, dynamometer for DC & AC measurement of V, I, W, frequency, phase & power factor etc.',
          'Energy meter, their sources of error & compensation, shunts & multipliers, multi-meter'
        ]
      },
      {
        id: 3,
        name: 'Potentiometers',
        topics: [
          'Basic Potentiometer circuit',
          'Multiple range potentiometers',
          'Constructional details of potentiometers',
          'Applications of d-c potentiometers; self-balancing potentiometers',
          'A-C potentiometers, polar and co-ordinate types'
        ]
      },
      {
        id: 4,
        name: 'Bridges',
        topics: [
          'Sources and Detectors',
          'General equation for bridge balance',
          'Measurement of R, L, C, M, F etc by Wheatstone, Kelvin, Maxwell, Hay\'s, Anderson, Owen, Heaviside, Campbell, Schering, Wien bridges',
          'Bridge sensitivity',
          'Errors',
          'Wagner Earthing Device'
        ]
      },
      {
        id: 5,
        name: 'Magnetic Measurements',
        topics: [
          'Flux meter, B-H Curve',
          'Hysteresis loop',
          'Permeameters',
          'AC Testing of Magnetic materials',
          'Separation of iron losses',
          'Iron loss measurement by Wattmeter and Bridge methods'
        ]
      },
      {
        id: 6,
        name: 'Instrument Transformers',
        topics: [
          'Theory and construction of current and potential transformers',
          'Ratio and phase angle errors and their minimization',
          'Characteristics of CTs. & PTs.',
          'Testing of CTS & PTS'
        ]
      }
    ]
  },
  {
    id: 4,
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
  }
]

export default EEE1;