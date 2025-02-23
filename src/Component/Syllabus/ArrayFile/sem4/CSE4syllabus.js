const CSE4 =[
    {
        id: 0,
        subject: 'Analysis and Design of Algorithms',
        chapters: [
          {
            id: 0,
            name: 'Introduction',
            topics: [
              'Revisiting space/time complexity and asymptotic notations',
              'Recurrences: writing and solving',
              'Iterative substitution',
              'Recursion-tree method',
              "Master's theorem",
              'Substitution method',
            ],
          },
          {
            id: 1,
            name: 'Divide and Conquer',
            topics: [
              'General method',
              'Analysis of divide and conquer based solutions to:',
              'Binary Search',
              'Merge sort',
              'Quick sort',
              'Selection sort',
              'Finding maximum and minimum using divide and conquer',
              "Strassen's matrix multiplication",
            ],
          },
          {
            id: 2,
            name: 'Greedy Algorithms',
            topics: [
              'Elements of Greedy strategy',
              'Activity Selection Problem',
              'Knapsack problem',
              'Single source Shortest paths problem',
              'Minimum Spanning tree problem and analysis of these problems',
            ],
          },
          {
            id: 3,
            name: 'Dynamic Programming',
            topics: [
              'Elements of dynamic programming',
              'Assembly-line scheduling problem',
              'Matrix-chain multiplication',
              'Multistage Graph',
              'All Pairs Shortest paths',
              'Longest common subsequence',
              '0/1 Knapsack',
            ],
          },
          {
            id: 4,
            name: 'Backtracking',
            topics: [
              'General method',
              "N-Queen's problem",
              'Graph coloring problem',
              'Sum of subsets Problem',
            ],
          },
          {
            id: 5,
            name: 'NP-Completeness',
            topics: [
              'Polynomial Time',
              'Polynomial-time verification',
              'NP-completeness and reducibility',
              'NP-complete problems',
            ],
          },
        ],
      },
      {
        id: 1,
        subject: 'Web Technologies',
        chapters: [
          {
            id: 0,
            name: 'Internet and World Wide Web',
            topics: [
              'Introduction',
              'Internet addressing',
              'ISP',
              'Types of Internet connections',
              'Introduction to WWW',
              'Web browsers',
              'Web servers',
              'URL',
              'HTTP',
              'DNS',
              'Web applications',
              'Tools for website creation',
            ],
          },
          {
            id: 1,
            name: 'HTML',
            topics: [
              'Introduction to HTML',
              'Lists',
              'Adding graphics to HTML page',
              'Creating tables',
              'Linking documents',
              'Frames',
              'DHTML',
              'Cascading style sheets',
            ],
          },
          {
            id: 2,
            name: 'JavaScript',
            topics: [
              'Introduction',
              'Programming constructs: variables, operators, and expressions',
              'Conditional checking',
              'Functions and dialog boxes',
              'JavaScript DOM',
              'Creating forms',
              'Objects like Window, Navigator, History, Location',
              'Introduction to cookies',
            ],
          },
          {
            id: 3,
            name: 'XML',
            topics: [
              'Why XML',
              'XML syntax rules',
              'XML elements',
              'XML attributes',
              'XML DTD',
              'Displaying XML with CSS',
            ],
          },
          {
            id: 4,
            name: 'PHP',
            topics: [
              'Introduction',
              'Syntax',
              'Variables',
              'Statements',
              'Operators',
              'Decision making',
              'Loops',
              'Arrays',
              'Strings',
              'Forms',
              'Get and post methods',
              'Functions',
              'Cookies',
              'Sessions',
            ],
          },
          {
            id: 5,
            name: 'PHP and MySQL',
            topics: [
              'Introduction to MySQL',
              'Connecting to MySQL database',
              'Creation, insertion, deletion, and retrieval of MySQL data using PHP',
              'PHP and XML',
              'XML parsers',
              'XML DOM',
            ],
          },
        ],
      },
      {
        id: 2,
        subject: 'Operating System',
        chapters: [
          {
            id: 0,
            name: 'Introduction',
            topics: [
              'What is an O.S.',
              'O.S. Functions',
              'Different types of O.S.: batch, multiprogrammed, time sharing, real time, distributed, parallel',
              'General structure of operating system',
              'O/S services',
              'System calls',
            ],
          },
          {
            id: 1,
            name: 'Process Management',
            topics: [
              'Introduction to processes',
              'Concept of processes',
              'Process scheduling',
              'Operations on processes',
              'Interprocess Communication',
              'Critical Sections',
              'Mutual Exclusion with Busy Waiting, Sleep and Wakeup',
              'Semaphores',
              'Message passing',
              'CPU scheduling',
              'Scheduling criteria',
              'Preemptive & non-preemptive scheduling',
              'Scheduling Algorithms: FCFS, SJF, RR and priority',
              'Threads',
            ],
          },
          {
            id: 2,
            name: 'Deadlocks',
            topics: [
              'Introduction to deadlocks',
              'Conditions for deadlock',
              'Resource allocation graphs',
              'Deadlock Detection and Recovery',
              'Deadlock Avoidance',
              'Deadlock Prevention',
            ],
          },
          {
            id: 3,
            name: 'Memory Management',
            topics: [
              'Background',
              'Logical vs. physical address space',
              'Memory management without swapping',
              'Swapping',
              'Contiguous memory allocation',
              'Paging',
              'Segmentation',
              'Segmentation with paging',
              'Virtual Memory',
              'Demand paging',
              'Performance',
              'Page replacement',
              'Page replacement algorithms (FIFO, Optimal, LRU)',
              'Thrashing',
            ],
          },
          {
            id: 4,
            name: 'File Systems',
            topics: [
              'Files - file concept',
              'File structure',
              'File types',
              'Access methods',
              'File attributes',
              'File operations',
              'Directory structure',
              'Allocation methods (contiguous, linked, indexed)',
              'Free-space management (bit vector, linked list, grouping)',
              'Protection mechanisms',
            ],
          },
          {
            id: 5,
            name: 'Secondary Storage',
            topics: [
              'Disk Structure',
              'Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN, LOOK)',
              'Disk Management (Disk Formatting, Boot Blocks, Bad Blocks)',
              'Swap Space Management (Swap Space use, Swap Space Location, Swap Space Management)',
            ],
          },
          {
            id: 6,
            name: 'Case Studies',
            topics: [
              'Brief introduction of MS-DOS',
              'Windows',
              'UNIX and LINUX',
            ],
          },
        ],
      },
      {
        id: 3,
        subject: 'Software Engineering',
        chapters: [
          {
            id: 0,
            name: 'Introduction',
            topics: [
              'Introduction to Software Engineering',
              'System Engineering Vs Software Engineering',
              'Software Evolution',
              'Software Characteristics',
              'Cost of Software Production',
              'Software Components',
              'Crisis – Problem and Causes',
              'Challenges in Software Engineering',
            ],
          },
          {
            id: 1,
            name: 'Software Process Models',
            topics: [
              'SDLC',
              'Waterfall Model',
              'Incremental Model',
              'Prototyping Model',
              'Evolutionary Model',
              'Spiral Model',
              'Rapid Application Development Model',
              'Rational Unified process Model',
              'Agile Methods',
              'Xtreme programming',
              'SEI Capability Maturity Model',
            ],
          },
          {
            id: 2,
            name: 'Software Requirements Analysis and Specification Concepts',
            topics: [
              'Requirement Engineering',
              'Requirement Elicitation Techniques',
              'Requirements Documentation',
              'Characteristics and Organization of SRS',
            ],
          },
          {
            id: 3,
            name: 'Software Analysis and Design',
            topics: [
              'Design Principles',
              'Design issues and Approaches',
              'Abstraction',
              'Modularity',
              'Coupling',
              'Cohesion',
              'Structured Analysis and Design',
              'DFD',
              'Object-oriented Design',
              'Data Design',
              'Architectural design',
              'Interface Design',
              'Component Level Design',
              'Object-oriented Design Concepts',
              'Structured vs. Object Oriented Analysis',
            ],
          },
          {
            id: 4,
            name: 'Project Management Concepts',
            topics: [
              'Management Activities',
              'Project Planning',
              'Project Scheduling',
              'Size Estimation – LOC, FP',
              'Cost Estimation Models –COCOMO, COCOMO-II',
            ],
          },
          {
            id: 5,
            name: 'Coding & Testing',
            topics: [
              'Coding',
              'Coding Standards',
              'Coding Conventions',
              'Programming Style',
              'Verification and Validation',
              'Testing Process',
              'Design of Test Cases',
              'Software Testing Strategies',
              'Unit Testing',
              'Integration Testing',
              'Top Down and Bottom Up Integration Testing',
              'Alpha & Beta Testing',
              'System Testing and Debugging',
            ],
          },
          {
            id: 6,
            name: 'Technical Metrics for Software',
            topics: [
              'Software Measurements: What and Why',
              'A Framework for Technical Software Metrics',
              'Metrics for the Analysis Model',
              'Metrics for Design Model',
              'Metrics for Source Code',
              'Metrics for Testing',
              'Metrics for Software Quality',
              'Metrics for Maintenance',
            ],
          },
          {
            id: 7,
            name: 'CASE (Computer Aided Software Engineering) and Introduction to UML',
            topics: [
              'CASE and its Scope',
              'Building blocks of CASE',
              'CASE Tools',
              'CASE Environment',
              'UML Concepts',
              'Use Case Diagrams',
              'Sequence Diagrams',
              'Collaboration Diagrams',
              'Class Diagrams',
              'State Transition Diagrams',
              'Component and Deployment Diagrams',
            ],
          },
        ],
      },
      {
        id: 4,
        subject: 'COMPUTER ARCHITECTURE & ORGANIZATION',
        chapters: [
          {
            id: 0,
            name: 'Basic Organization of Computers',
            topics: [
              'Block level description of functional units related to program execution',
              'Fetch, decode, and execute cycle',
            ],
          },
          {
            id: 1,
            name: 'Machine Instructions and Architecture',
            topics: [
              'Machine instructions',
              'Instruction set architectures',
              'Assembly language programming',
              'Addressing modes',
              'Instruction cycles',
              'Registers and storage',
              'RISC versus CISC architectures',
              'Inside a CPU',
            ],
          },
          {
            id: 2,
            name: 'Information Representation and Computer Arithmetic',
            topics: [
              'Information representation',
              'Floating point representation (IEEE 754)',
              'Computer arithmetic and implementation',
              'Fixed-Point Arithmetic: Addition, Subtraction, Multiplication, and Division',
              'Arithmetic Logic Units control and data path',
              'Data path components',
              'Design of ALU and data path',
              'Controller design',
              'Hardwired and Micro programmed Control',
            ],
          },
          {
            id: 3,
            name: 'Memory Technology and Hierarchy',
            topics: [
              'Memory Technology',
              'Static and dynamic memory',
              'Random Access and Serial Access Memories',
              'Cache memory and Memory Hierarchy',
              'Address Mapping',
              'Cache updation schemes',
              'Virtual memory and memory management unit',
            ],
          },
          {
            id: 4,
            name: 'I/O Subsystems',
            topics: [
              'Input-Output devices (Disk, CD-ROM, Printer, etc.)',
              'Interfacing with IO devices',
              'Keyboard and display interfaces',
              'Basic concepts of Bus Control',
              'Read Write operations',
              'Programmed IO',
              'Concept of handshaking',
              'Polled and Interrupt-driven I/O',
              'DMA data transfer',
            ],
          },
          {
            id: 5,
            name: 'Pipeline Processing and Parallel Processing',
            topics: [
              'Pipeline Processing',
              'Instruction and Arithmetic Pipeline',
              'Pipeline hazards and their resolution',
              'Parallel Processing',
            ],
          },
        ],
      }
      
        
]
export default CSE4