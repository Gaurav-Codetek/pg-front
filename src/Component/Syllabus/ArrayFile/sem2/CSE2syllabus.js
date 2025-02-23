const CSE2 = [
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
        subject: 'Differential Equations and Transforms',
        chapters: [
          {
            id: 0,
            name: 'Ordinary Differential Equations',
            topics: [
              'Review of geometrical meaning of the differential equation',
              'Directional fields',
              'Exact differential equations (scope as in chapter 8, sections 8.1-8.10 of reference 5)',
              'Solution of differential equations with constant coefficients',
              'Methods of differential operators (scope as in chapter 9, sections 9.1-9.5 of reference 5)',
              'Non-homogeneous equations of second order with constant coefficients: Solution by method of variation of parameters',
              'Reduction by order (scope as in chapter 9, section 9.7, 9.10 of reference 5)',
              'Power series method of solution (scope as in chapter 10, section 10.2 of reference 5)'
            ],
          },
          {
            id: 1,
            name: 'Laplace Transforms',
            topics: [
              'Laplace transform',
              'Inverse transforms',
              'Shifting',
              'Transform of derivatives and integrals',
              'Unit step function',
              'Second shifting theorem',
              "Dirac's Delta function",
              'Differentiation and integration of transforms',
              'Convolution Theorem on Laplace Transforms',
              'Application of Laplace transforms to solve ordinary differential equations with initial conditions (Scope as in Chapter 6, Sections 6.1-6.6 of Reference 2)'
            ],
          },
          {
            id: 2,
            name: 'Fourier Series and Transforms',
            topics: [
              'Periodic functions',
              'Fourier series',
              'Even and odd series',
              'Half range expansions',
              'Complex Fourier Series',
              'Approximation by trigonometric polynomials',
              'Fourier integrals',
              'Fourier Cosine and Sine transforms',
              'Fourier Transforms (Scope as in Chapter 11, Sections 11.1-11.2, 11.4-11.5, 11.7-11.9 of Reference 2)'
            ],
          },
          {
            id: 3,
            name: 'Partial Differential Equations',
            topics: [
              'Partial differential equations of first order',
              'Origin',
              'Solution of linear partial differential equations of first order',
              'Integral surfaces passing through a given curve (Scope as in Chapter 2, Sections 1, 2, 4, 5 of Reference 1)'
            ],
          },
          {
            id: 4,
            name: 'Boundary Value Problems',
            topics: [
              "D'Alembert's solution of wave equation",
              'Separation of variables: one dimension heat and wave equation',
              'Scope as in Chapter 12, Sections 12.1, 12.3-12.4, 12.6, 12.9 of Reference 2'
            ],
          },
        ],
      },
      {
        id: 2,
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
        subject: 'Object Oriented Programming',
        chapters: [
          {
            id: 0,
            name: 'Introduction to Object-Oriented Programming',
            topics: [
              'Principles of Objective Oriented Programming',
            ],
          },
          {
            id: 1,
            name: 'Tokens, Expressions, and Control Structures',
            topics: [
              'Various data types and data structures',
              'Variable declaration',
              'Operators and scope of operators',
            ],
          },
          {
            id: 2,
            name: 'Pointers, Functions, Classes, and Objects',
            topics: [
              'Prototyping',
              'Referencing the variables in functions',
              'Memory allocation for classes and objects',
              'Array of objects',
              'Pointers to member functions',
            ],
          },
          {
            id: 3,
            name: 'Constructors and Destructors, Operator Overloading and Type Conversion',
            topics: [
              'Constructors and Destructors',
              'Operator Overloading and type conversion',
            ],
          },
          {
            id: 4,
            name: 'Inheritance',
            topics: [
              'Derived classes',
              'Types of inheritance',
              'Various types of classes',
            ],
          },
          {
            id: 5,
            name: 'Virtual Functions and Polymorphism',
            topics: [
              'Virtual functions',
              'Polymorphism',
            ],
          },
          {
            id: 6,
            name: 'I/O Operations on Files',
            topics: [
              'Classes for files',
              'Operations on a file',
              'File pointers',
            ],
          },
          {
            id: 7,
            name: 'Exception Handling and Generic Programming with Templates',
            topics: [
              'Introduction to templates',
              'Overloading of template functions and Inheritance',
              'Introduction to standard Template Library',
            ],
          },
        ],
      },
      {
        id: 5,
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
      

]
export default CSE2