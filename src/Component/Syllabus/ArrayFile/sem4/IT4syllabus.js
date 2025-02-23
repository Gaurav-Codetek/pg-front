const IT4 = [
    {
        id: 0,
        subject: 'Economics',
        chapters: [
            {
                id: 0,
                name: 'Introduction to Economics',
                topics: [
                    'Nature of Economics',
                    'Economic Thoughts',
                    'Economic Activities',
                    'Relationship of Economics with other Social Sciences and Engineering',
                ],
            },
            {
                id: 1,
                name: 'Theory of Consumer Behaviour',
                topics: [
                    'Demand: Types, Law of Demand',
                    'Determinants of Demand and Change in Demand',
                    'Elasticity of Demand: Nature, Degrees, Types, Measurement',
                    'Factors Affecting Elasticity of Demand and its Application',
                    'Laws of Consumption',
                    'Concept and Applicability of Law of Diminishing Marginal Utility',
                    'Law of Equi-Marginal Utility',
                ],
            },
            {
                id: 2,
                name: 'Theory of Production and Cost',
                topics: [
                    'Cost: Types of Costs',
                    'Production: Law of Variable Proportion',
                    'Returns to Factor and Returns to Scale',
                    'Economies and Diseconomies of Scale',
                ],
            },
            {
                id: 3,
                name: 'Theory of Market',
                topics: [
                    'Nature and Relevance of Perfect Competition',
                    'Monopoly and Monopolistic Competition',
                ],
            },
            {
                id: 4,
                name: 'Basic Concepts of Macro Economics',
                topics: [
                    'National Income: Concept and Measurement',
                    'Determination of Equilibrium of Income',
                    'Inflation: Concept, Causes, and Effect of Inflation',
                    'Measures to Control Inflation',
                ],
            },
        ],
    },
    {
        id:1,
        subject:  'Introduction to Psychology',
        chapters: 
         [
            {
                id: 0,
                name: 'Understanding Human Behaviour:',
                topics: [
                    'Definition, methods,',
                    'branches and application of psychology for engineers',
                ]
            },
            {
                id: 1,
                name: 'Measuring Human abilities',
                topics: [
                    'Intelligence',
                    'theories and assessment',
                ]
            },
            {
                id: 2,
                name: 'The individual working life',
                topics: [
                    'Personality, approaches and trait theories'
                ]
            },
            {
                id: 3,
                name: 'Psychological problems of everyday life',
                topics: [
                    'Stress and coping',
                ]

            },
            {
                id: 4,
                name: 'Motivation',
                topics: [
                    'The concept and theoretical framework, motivating people at work',
                    'Group dynamics, Intergroup relations, conflict and negotiation',
                    'Leadership and Management'
                ]
            }
        ]
    },
    {
        id: 2,
        subject: 'Microprocessor Architecture and Microcomputer Systems',
        chapters: [
            {
                id: 0,
                name: 'Microprocessor Architecture',
                topics: [
                    'The 8085 MPU: Block Diagram, Pin Diagram',
                    'Address/Data Buses',
                    'Concept of de-multiplexing of Buses',
                    'Control and status signals',
                    'Registers, Ports, Flags',
                    'Instruction Decoding and Execution',
                    'Memory Interfacing',
                ],


            },
            {
                id: 1,
                name: 'Interfacing I/O Devices',
                topics: [
                    'Basic Interfacing Concepts',
                    'Interfacing Output Displays',
                    'Interfacing Input Devices',
                    'Memory-Mapped I/O',
                ],


            },
            {
                id: 2,
                name: 'Programming the 8085',
                topics: [
                    'Introduction to 8085 Assembly Language Programming',
                    'The 8085 Programming Model',
                    'Instruction Classification',
                    'Instruction Format',
                    'Data Transfer (Copy) Operations',
                    'Arithmetic Operations',
                    'Logic Operations',
                    'Branch Operations',
                    'Writing Assembly Language Programs',
                ],


            },
            {
                id: 3,
                name: 'Programming Techniques with Additional Instructions',
                topics: [
                    'Programming Techniques Looping, Counting and Indexing',
                    'Additional Data Transfer and 16-Bit Arithmetic Instructions',
                    'Arithmetic Operations Related to Memory',
                    'Logic Operations',
                ],


            },
            {
                id: 4,
                name: 'Counters and Time Delays',
                topics: [
                    'Counters and Time Delays',
                    'Hexadecimal Counter, Modulo Ten, Counter',
                    'Generating Pulse Waveforms',
                    'Debugging Counter and Time-Delay Programs',
                ],


            },
            {
                id: 5,
                name: 'Stack and Subroutines',
                topics: [
                    'Stack, Subroutine',
                    'Conditional Call and Return Instructions',
                ],


            },
            {
                id: 6,
                name: 'Interrupts',
                topics: [
                    'The 8085 Interrupt',
                    '8085 Vectored interrupts',
                ],


            },
            {
                id: 7,
                name: 'General –Purpose Programmable Peripheral Devices',
                topics: [
                    'Block Diagram, Working and Control word of: The 8255A Programmable Peripheral Interface',
                    'The 8259 A Programmable Interrupt Controller',
                    'Programmable communications interface 8251'

                ]
            }
        ]
    },
    {
        id: 3,
        subject: 'Computer Networks',
        chapters: [
          {
            id: 0,
            name: 'Introduction',
            topics: [
              'Basic concepts of computer networks',
              'Network Hardware: LAN, MAN, WAN, Wireless networks, Internet',
              'Network Software: Layer, Protocols, interfaces, and services',
              'Reference Model: OSI/TCP/IP and their comparison',
            ],
           
          },
          {
            id: 1,
            name: 'Physical Layer',
            topics: [
              'Multiplexing',
              'Line coding techniques',
              'Transmission media: Magnetic, Twisted pair, coaxial cable, fiber optics, wireless transmission (radio, microwave, infrared, light wave)',
              'Switching: Circuit Switching & Packet Switching',
              'Cellular radio and communication satellites',
            ],
          
          },
          {
            id: 2,
            name: 'Data Link Layer',
            topics: [
              'Framing',
              'Error control: Error correction & Detection',
              'Sliding window protocols (one bit, Go back n, selective repeat)',
              'Medium Access Sub layer: Channel Allocation',
              'MAC protocols - ALOHA, CSMA protocols, Collision-free protocols',
              'IEEE 802.3, 802.4, 802.5 standards and their comparison',
            ],
         
          },
          {
            id: 3,
            name: 'Network Layer',
            topics: [
              'Design issues',
              'Routing algorithms (shortest path, flooding, flow-based, distance vector, hierarchical, broadcast, multicast)',
              'Congestion control algorithms (Leaky bucket, Token bucket, Choke, Packet, Load shedding)',
              'IPV4, IP addressing, IPV6',
            ],
        
          },
          {
            id: 4,
            name: 'Transport Layer',
            topics: [
              'Addressing',
              'Establishing and releasing connection',
              'Flow control & buffering',
              'Multiplexing',
              'Crash recovery',
              'Internet Transport protocol (TCP and UDP)',
            ],
           
          },
          {
            id: 5,
            name: 'Application Layer',
            topics: [
              'Network Security',
              'Domain Name System',
              'Simple Network Management Protocol',
              'Electronic Mail',
            ],
          },
        ],
      },
      {
        id: 4,
        subject: 'Operating Systems',
        chapters: [
          {
            id: 0,
            name: 'Basic Functions and Concepts of Operating Systems',
            topics: [
              'Concept of an operating system',
              'Batch system',
              'Multi-programmed',
              'Time sharing',
              'Personal Computer System',
              'Parallel system',
              'Real-time system',
              'General system Architecture',
            ],
          },
          {
            id: 1,
            name: 'Features and Objectives of Operating Systems',
            topics: [
              'System components',
              'Operating system services',
              'System calls',
              'System Programs',
              'System Structure',
              'System design and implementation',
              'Concept of process',
              'Process states',
              'Process state transition',
              'Process control block',
              'Operations of processes',
              'Concurrent processes',
              'Deadlocks',
              'Scheduling algorithms',
              'Scheduling criteria',
              'Process Synchronization',
            ],
          },
          {
            id: 2,
            name: 'Memory Management',
            topics: [
              'Logical and physical address space',
              'Storage allocation and management techniques',
              'Swapping',
              'Concepts of multi-programming',
              'Paging',
              'Segmentation',
              'Virtual storage management strategies',
              'Demand Paging',
              'Page Replacement Algorithms',
              'Thrashing',
            ],
          },
          {
            id: 3,
            name: 'Information Management',
            topics: [
              'File concept',
              'Access method',
              'Directory structure',
              'Protection File system structure',
              'Allocation methods',
              'Free space management',
              'Directory implementation',
              'Disk structure',
              'Disk Scheduling',
              'Disk management',
              'Swap space management',
            ],
          },
          {
            id: 4,
            name: 'Distributed-System Structures',
            topics: [
              'Network operating system',
              'Distributed operating systems',
              'Remote services',
              'Robustness',
              'Design Issues',
            ],
          },
          {
            id: 5,
            name: 'Distributed file systems and Distributed Coordination',
            topics: [
              'Naming and Transparency',
              'Remote file Access',
              'Stateful versus stateless service',
              'File replication',
              'Event ordering',
              'Mutual Exclusion',
              'Atomicity',
              'Concurrency control',
              'Deadlock Handling',
            ]
              
        }
    ]
},
{
    id: 5,
    subject: 'Discrete Structures',
    chapters: [
      {
        id: 0,
        name: 'Sets, Relations and Functions',
        topics: [
          'Definition of sets, product sets, and partitions',
          'Relations and digraphs',
          'Matrix of a relation',
          'Paths in relations and digraphs',
          'Equivalence relations and partitions',
          'Operations on relations',
          'Transitive closure and Warshall’s algorithm',
          'Functions',
          'One-to-one and onto functions',
          'Special functions',
          'The pigeon hole principle',
          'Function composition and inverse functions',
          'Sectionally ordered sets',
          'Extremal elements of sectionally ordered sets',
          'Lattices',
          'Linearly ordered sets',
        ],
      },
      {
        id: 1,
        name: 'Fundamentals of Logic',
        topics: [
          'Basic connectives and truth tables',
          'Logical equivalence',
          'The laws of logic',
          'Logical implication',
          'Rules of Inference',
          'Use of Quantifiers',
          'Definitions and Proofs of Theorems',
        ],
      },
      {
        id: 2,
        name: 'Principles of Counting',
        topics: [
          'Rule of Sum and Product',
          'Permutations',
          'Combinations',
          'Combinations with repetition',
          'The principle of Inclusion and Exclusion',
          'Generalizations',
          'Derangements',
          'Generating Functions: Definitions and Examples',
          'Calculation Techniques',
          'Partitions of Integers',
          'The exponential generating function',
          'The summation operator',
          'Recurrence relations',
          'The first-order linear recurrence relation',
          'The second-order linear homogeneous recurrence relation with constant coefficients',
          'The non-homogeneous recurrence relation',
          'The method of generating functions',
        ],
      },
      {
        id: 3,
        name: 'Graph Theory',
        topics: [
          'Definitions and examples',
          'Subgraphs',
          'Complements and Graph Isomorphism',
          'Vertex degree: Euler trails and circuits',
          'Planar Graphs',
          'Hamilton Paths and Cycles',
          'Graph colouring and Chromatic polynomials',
        ],
      },
      {
        id: 4,
        name: 'Groups Theory',
        topics: [
          'Definition and elementary properties of groups',
          'Subgroups',
          'Homomorphism',
          'Isomorphism and Cyclic groups',
          'Cosets and Lagrange’s Theorem',
          'Introduction to Rings and Fields (definitions, examples, and basic properties)',
        ],
      },
    ],
  }     
]
export default IT4