const BT1 = [
    {
        id: 0,
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
        id: 1,
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
        id:3,
        subject: "Universal Human Value",
        chapters :[
          {
            id: 1,
            name: 'Course Introduction - Need, Basic Guidelines, Content and Process for Value Education',
            topics: [
              "Purpose and motivation for the course",
              "Self-Exploration-what is it? - Its content and process; 'Natural Acceptance' and Experiential Validation- as the process for self-exploration",
              "Continuous Happiness and Prosperity- A look at basic Human Aspirations",
              "Right understanding, Relationship and Physical Facility- the basic requirements for fulfillment of aspirations of every human being with their correct priority",
              "Understanding Happiness and Prosperity correctly- A critical appraisal of the current scenario",
              "Method to fulfill the above human aspirations: understanding and living in harmony at various levels."
            ]
          },
          {
            id: 2,
            name: 'Understanding Harmony in the Human Being - Harmony in Myself!',
            topics: [
              "Understanding human being as a co-existence of the sentient 'I' and the material 'Body'",
              "Understanding the needs of Self ('I') and 'Body-happiness and physical facility",
              "Understanding the Body as an instrument of 'I' (I being the doer, seer and enjoyer)",
              "Understanding the characteristics and activities of 'T' and harmony in 'I'",
              "Understanding the harmony of I with the Body: Sanyam and Health; correct appraisal of Physical needs, meaning of Prosperity in detail.",
              "Programs to ensure Sanyam and Health."
            ]
          },
          {
            id: 3,
            name: 'Understanding Harmony in the Family and Society- Harmony in Human- Human Relationship',
            topics: [
              "Understanding values in human-human relationship; meaning of Justice (nine universal values in relationships) and program for its fulfillment to ensure mutual happiness; Trust and Respect as the foundational values of relationship",
              "Understanding the meaning of Trust; Difference between intention and competence",
              "Understanding the meaning of Respect, Difference between respect and differentiation; the other salient values in relationship",
              "Understanding the harmony in the society (society being an extension of family): Resolution, Prosperity, fearlessness (trust) and co-existence as comprehensive Human Goals",
              "Visualizing a universal harmonious order in society- Undivided Society, Universal Order- from family to world family."
            ]
          },
          {
            id: 4,
            name: 'Understanding Harmony in the Nature and Existence - Whole existence as Coexistence',
            topics: [
              "Understanding the harmony in the Nature.",
              "Interconnectedness and mutual fulfillment among the four orders of nature-recyclability and self-regulation in nature.",
              "Understanding Existence as Co-existence of mutually interacting units in all-pervasive space",
              "Holistic perception of harmony at all levels of existence."
            ]
          },
          {
            id: 5,
            name: 'Implications of the above Holistic Understanding of Harmony on Professional Ethics',
            topics: [
              "Natural acceptance of human values",
              "Definitiveness of Ethical Human Conduct",
              "Basis for Humanistic Education, Humanistic Constitution and Humanistic Universal Order",
              "Competence in professional ethics:",
            ]
          }
        ]
      }
]

export default BT1