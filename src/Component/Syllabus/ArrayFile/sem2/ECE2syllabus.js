const ECE2 = [
    {
        id: 0,
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
        id: 1,
        subject: 'Digital Design',
        chapters: [
          {
            id: 0,
            name: 'Introduction and Number Systems',
            topics: [
              'Digital logic',
              'Number Systems and Conversions for Binary, Octal, Decimal, Hexadecimal',
              'Binary Arithmetic',
              'Basic and Universal gates',
              'Boolean Algebra',
              'Binary addition and subtraction',
            ],
            hours: 5,
          },
          {
            id: 1,
            name: 'Minimization Techniques',
            topics: [
              'Sum of Products and Products of Sum forms',
              'Minterms & Maxterms',
              'Karnaugh Map for two, three, four, five and six variables',
              'Quine-McCluskey method',
              'Combinational Circuit Design',
            ],
            hours: 6,
          },
          {
            id: 2,
            name: 'Flip Flops',
            topics: [
              '1-bit memory cell',
              'Clocked and unclocked flip flops',
              'S-R Flip flop, D flip flop, JK Flip flop, T flip flop',
              'Edge triggered flip flop',
              'Race around condition',
              'Master slave flip flop',
              'Conversion of flip flops using excitation table',
            ],
            hours: 5,
          },
          {
            id: 3,
            name: 'Counters',
            topics: [
              'Ripple counter',
              'Design of Mod-N ripple counter',
              'Design of synchronous counter with and without lockout condition',
              'Decade counter',
              'Ring counter',
              'Johnson counter',
            ],
            hours: 5,
          },
          {
            id: 4,
            name: 'Shift Registers and A/D, D/A Converters',
            topics: [
              'Shift Registers',
              'Serial in serial out, serial in parallel out, parallel in serial out, parallel in parallel out shift register',
              'Bidirectional shift register',
              'A/D and D/A Converters',
              'Weighted resistor D/A converter',
              'Binary ladder D/A converter',
              'Flash type, successive approximation, counter ramp type A/D Converters',
              'Characteristics of ADC and DAC',
            ],
            hours: 6,
          },
          {
            id: 5,
            name: 'Logic Families',
            topics: [
              'Characteristics of logic families: fan-out, noise margin, propagation delay, power dissipation',
              'Circuit diagrams and working of DTL, DCTL, I\'L, HTL, TTL, Totem pole TTL, ECL, CMOS logic families',
            ],
            hours: 7,
          },
        ],
      },
      {
        id: 2,
        subject: 'Professional Communication',
        chapters: [
          {
            id: 0,
            name: 'English Grammar and Basic Writing Skills',
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
              'Synonyms-Antonyms',
              'Sentence Structures',
              'Use of phrases and clauses in sentences',
              'Importance of proper punctuation',
              'Creating coherence',
              'Organizing principles of paragraphs in documents',
              'Techniques for writing precisely',
              'Paragraph, Essay and Letter writing',
            ],
            hours: 11,
          },
          {
            id: 1,
            name: 'Communication Details',
            topics: [
              'Four Fundamental communication methods: Writing, Speaking, Listening, Reading',
              '7 Cs of Communication',
              'Barriers to Communication',
            ],
            hours: 3,
          },
          {
            id: 2,
            name: 'Communication in Organizations',
            topics: [
              'Formal-Informal Communication',
              'Communication Networks',
              'Intra and Inter Firm Communication',
              'Reports and their types',
              'Layout of a report',
              'Writing a report',
              'Office notice',
              'Memo',
              'Business proposals',
              'Minutes of meeting',
            ],
            hours: 6,
          },
          {
            id: 3,
            name: 'Modes of Communication',
            topics: [
              'Emerging channels of communication',
              'Telephone and Email Etiquettes',
              'Non-Verbal Communication',
              'Cross-culture communication',
              'Formal Presentations',
            ],
            hours: 3,
          },
        ],
      },
      {
        id: 3,
        subject: 'Fundamentals of Biotechnology',
        chapters: [
          {
            id: 1,
            name: 'Introduction to Biotechnology',
            topics: [
              'Definition, scope, applications in agriculture, medical, food industry, bioremediation, and future prospects'
            ]
          },
          {
            id: 2,
            name: 'Origin of Life',
            topics: [
              "Theories of evolution, chemical evolution, organic evolution, Oparin-Haldane hypothesis, Miller's experiment"
            ]
          },
          {
            id: 3,
            name: 'Cell Structure and Function',
            topics: [
              'Prokaryotic and eukaryotic cell (plant and animal cell), various cell organelles, their structure, and functions'
            ]
          },
          {
            id: 5,
            name: 'Types of Animal Tissues',
            topics: [
              'Basic structure and function of epithelial tissue, connective tissue, muscular tissue, and nervous tissue'
            ]
          },
          {
            id: 6,
            name: 'Biological Systems',
            topics: [
              'Outlines of the major biological systems: digestive, circulatory, nervous, endocrine, and reproductive system'
            ]
          },
          {
            id: 7,
            name: 'Introduction to Biosafety, Bioethics, and IPR in Biotechnology',
            topics: [
              'Concept of biosafety, need and application of biosafety in laboratories and industries, international and national norms regarding biosafety, GLP, GMP, bio-medical wastes, transportation of biological materials'
            ]
          }
        ]
      },
      {
        id:4,
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
export default ECE2