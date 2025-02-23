const ECE1 = [
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
    subject: 'Basic Electrical and Electronics Engineering',
    chapters: [{
      id: 1,
      name: 'DC Circuits',
      topics: [
        'Voltage and current sources',
        'KCL (Kirchhoff’s Current Law)',
        'KVL (Kirchhoff’s Voltage Law)',
        'Network analysis by mesh and node analysis',
        'Superposition theorem',
        "Thevenin's theorem",
        "Norton's theorem",
        'Maximum-power transfer theorem (numerical based on these theorem)',
      ],
      hours: 7,
    },
    {
      id: 2,
      name: 'AC Fundamentals',
      topics: [
        'Average and RMS values of alternating quantities',
        'Solution and phasor diagram of single phase ac circuits with sinusoidal source excitation',
        'Voltages and currents in star and delta connected systems',
        'Power in a three-phase system',
        'Solution of three-phase balanced circuits',
        'Power and power factor measurement by two watt-meters method',
      ],
      hours: 8,
    },
    {
      id: 3,
      name: 'Transformers',
      topics: [
        'Introduction',
        'Basic Principle',
        'EMF equation',
        'Losses, efficiency, and condition for maximum efficiency',
        'Voltage regulation',
        'Open circuit and short circuit tests',
      ],
      hours: 7,
    },
    {
      id: 4,
      name: 'Semiconductor Diodes',
      topics: [
        'Ideal Diode',
        'Semiconductor materials',
        'Energy Levels',
        'Extrinsic materials: n and p type',
        'Semiconductor diode: working principle',
        'Silicon semiconductor diode characteristics',
        'Zener region and Zener diode',
        'Si vs Ge diode characteristics',
        'Effect of temperature on the characteristics',
        'Light Emitting Diode (working principle)',
      ],
      hours: 8,
    },
    {
      id: 5,
      name: 'Diode Applications',
      topics: [
        'Load Line Analysis',
        'Series Diode Configurations with DC inputs',
        'Parallel and Series-Parallel configurations',
        'AND/OR gates',
        'Sinusoidal inputs: Half wave and full wave rectifications',
        'Clipper and clampers',
      ],
      hours: 7,
    },
    {
      id: 6,
      name: 'Bipolar Junction Transistors',
      topics: [
        'Transistor construction and operation',
        'Common-Base configuration: working principle, characteristics, and applications',
        'Common-Emitter configuration: working principle, characteristics, and applications',
        'Common-Collector configuration: working principle, characteristics, and applications',
      ],
      hours: 8,
    },]
  },
  {
    id: 3,
    subject: 'Programing Fundamental',
    chapters: [
      {
        id: 1,
        name: ' Introduction to Programming',
        topics: [
          'Introduction to components of a computer system: Memory, processor, I/O devices, storage, operating system, concept of assembler, compiler, interpreter, loader and linker.',
          'Concept of algorithm: Representation of an algorithm, flowchart, Pseudocode with examples, converting algorithms to programs.',
          'Programming Basics: Structure of C program, writing and executing the first C program, Syntax and logical errors in compilation, object and executable code. Components of C language, standard I/O in C, data types, variables and constants, memory storage, storage classes.'
        ]
      },
      {
        id: 2,
        name: 'Expressions and Statements',
        topics: [
          'Expressions and their evaluation: Operands and Operators, formation of expressions using arithmetic, relational, logical and bitwise operators, precedence and associativity rules, mixed operands, type conversion and evaluation of expressions.',
          'Statements: Simple and compound statements, Conditional Branching: if and switch statements, nested if-else, dangling else problem, use of break and default with switch.',
          'Iteration and loops: use of while, do while and for loops, nested loops, use of break and continue statements.'
        ]
      },
      {
        id: 3,
        name: 'Arrays & Basic Algorithms',
        topics: [
          'Arrays: Array notation and representation, manipulating array elements, using multi-dimensional arrays, character arrays and strings.',
          'Basic Algorithms: Searching and Sorting Algorithms (Bubble, Insertion and Selection), finding roots of equations, notion of order of complexity through example programs.'
        ]
      },
      {
        id: 4,
        name: 'Functions',
        topics: [
          'Introduction, advantages of modularizing a program into functions, types of functions, passing parameters to functions: call by value, call by reference, passing arrays to functions, recursion with example programs.'
        ]
      },
      {
        id: 5,
        name: 'Structures, Union, Enums and Bit-fields',
        topics: [
          'Defining, declaring and usage of structures, unions and their arrays, passing structures and unions to functions, introduction to enums and bit-fields.'
        ]
      },
      {
        id: 6,
        name: 'Pointers and File handling',
        topics: [
          'Pointers: Introduction, declaration, applications, dynamic memory allocation (malloc, calloc, realloc, free), use of pointers in self-referential structures.',
          'File handling: File I/O functions, standard C pre-processors, defining and calling macros, command-line arguments.'
        ]
      }
    ]
  },
  {
    id: 4,
    subject: 'Engineering Graphics',
    chapters: [
      {
        id: 1,
        name: 'Introduction',
        topics: [
          'Demonstrating knowledge of the theory of CAD software, Tabs and Panels ',
          ' The Command Line Box, Command Tools, Starting a New Drawing, Naming a Drawing, Drawing Units, Drawing Limits, Grid and Snap, Save and Save As, Open, Close, Terminology and Conventions,',
          'Linear Dimension, Dimension Styles, Units, Aligned Dimensions, Radius and Diameter Dimensions, Angular Dimensions, Ordinate Dimensions, Baseline Dimensions, Continue Dimension, Quick Dimension, Center Mark, MLEADER and QLEADER, Text, Dimensioning Holes, Placing Dimensions, Fillets and Rounds, Polar Dimensions, Chamfers, Symbols and Abbreviations.'
        ]
      },
      {
        id: 2,
        name: 'Fundamentals of 2D Construction and Advanced Commands',
        topics: ['Line-Random Points',
          'Erase',
          'Line-Snap Point',
          'Line-Dynamic Inputs',
          'Construction Line',
          'Circle',
          'Circle Centerlines',
          'Polyline',
          'Spline',
          'Ellipse',
          'Rectangle',
          'Polygon',
          'Point',
          'Text',
          'Move',
          'Copy',
          'Offset',
          'Mirror',
          'Array',
          'Rotate',
          'Trim',
          'Extend',
          'Break',
          'Chamfer',
          'Fillet',
          'Table',
          'OSNAP',
          'Layer command.'
        ]
      },
      {
        id: 3,
        name: 'Orthographic Projections',
        topics: [
          'Principles of Orthographic Projections-Conventions - Projections of Points', 'Projection of line- Parallel to both H.P. and V.P.', 'Parallel to one and inclined to other, and inclined to both, contained in profile plane.', 'True length and angle determination of straight line: Rotation method and Auxiliary plane method, Traces of a line, Difference between plane and lamina, Projection of lamina- Parallel to one and perpendicular to other, Perpendicular to one and inclined to other, Inclined to both reference planes.'
        ]
      },
      {
        id: 4,
        name: 'Projection of Regular Solids',
        topics: [
          'Definition of Solids, Types of solids, and elements of solids, Projection of solids in first quadrant- with axis parallel to one and perpendicular to other, axis parallel to one inclined to other and axis inclined to both the principle planes.'
        ]
      },
      {
        id: 5,
        name: 'Section of Solids',
        topics: [
          'Theory of Sectioning, Cutting Plane Lines, Section Lines, Hatch, Styles of Section Lines, Sectioning of Prism, Pyramid, Cone and Cylinder (Simple Cases).'
        ]
      },
      {
        id: 6,
        name: 'Development of Surfaces',
        topics: [
          'Purpose of development, Methods of development of prism, cylinder, cone and pyramid surfaces (for right-angled solids only) and development of surface of sphere.'
        ]
      },
      {
        id: 7,
        name: 'Isometric Projection',
        topics: [
          'Classification of pictorial views, Basic Principle of Isometric projection, Difference between isometric projection and isometric drawing. Isometric projection of solids such as cube, prism, pyramid and cylinder.'
        ]
      }
    ]
  },
  {
    id: 5,
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
  }
];

export default ECE1