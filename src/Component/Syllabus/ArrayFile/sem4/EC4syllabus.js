const EC4 = [
    {
        id: 0,
        subject: 'Communication Engineering',
        chapters: [
          {
            id: 0,
            name: 'Amplitude Modulation',
            topics: [
              'The need for modulation',
              'Mathematical analysis of AM',
              'Generation of AM',
              'Modulation index and its significance',
              'Envelop detector and its analysis',
              'Properties of AM signals',
              'DSB-SC',
              'Generation of DSB-SC signals',
              'Coherent reception of AM signals',
              'Costa’s receiver',
              'Quadrature carrier multiplexing',
              'Single sideband and vestigial sideband modulation',
              'Homodyne and heterodyne receiver structures',
              'Characteristics of a super-heterodyne receiver'
            ],
          },
          {
            id: 1,
            name: 'Angle Modulation',
            topics: [
              'Frequency and phase modulation',
              'Narrowband FM',
              'Frequency multiplication',
              'Wideband FM',
              'Spectra of FM signals',
              'Transmission bandwidth requirement for FM',
              'Generation of FM and PM signals',
              'Demodulation of FM and PM signals along-with mathematical analysis',
              'The phase locked loop: linear and nonlinear models',
              'The second-order PLL',
              'Nonlinear effects in FM systems'
            ],
          },
          {
            id: 2,
            name: 'Pulse Modulation',
            topics: [
              'The need for sampling',
              'The sampling process',
              'Nyquist sampling theorem',
              'Practical sampling',
              'Aperture effect and its analysis',
              'Band-pass sampling',
              'PAM',
              'PWM',
              'PPM'
            ],
          },
          {
            id: 3,
            name: 'Digital pulse modulation',
            topics: [
              'Quantization Process',
              'Midrise and midtread quantizers',
              'PCM',
              'Noise in PCM',
              'Quantization noise',
              'Companding',
              'A-law and 𝜇-law companding',
              'Delta modulation',
              'Analysis of noise specific to delta modulation',
              'Adaptive delta modulation',
              'Linear prediction',
              'DPCM',
              'Vocoders and Video Compression'
            ],
          },
          {
            id: 4,
            name: 'Noise in Communication Systems',
            topics: [
              'The receiver model and figure of merit of a communication receiver',
              'Noise in baseband systems',
              'Noise in AM, DSB-SC, SSB receivers',
              'Threshold effect',
              'Noise in FM systems',
              'Capture effect',
              'FM threshold reduction',
              'Pre emphasis and de emphasis',
              'Noise in PCM'
            ],
          },
          {
            id: 5,
            name: 'Baseband Pulse Transmission',
            topics: [
              'Line codes, PSD and Bipolar Signaling',
              'Pulse Shaping',
              'ISI',
              'Criterion for zero ISI',
              'Controlled ISI',
              'Differential Encoding',
              'Baseband data transmission in white Gaussian noise',
              'Probability of error',
              'Matched filter and its properties along-with mathematical analysis',
              'The detection problem',
              'Bandlimited nature of channels',
              'Baseband M-ary transmission'
            ],
          },
        ],
      },
      {
        id: 1,
        subject: 'Microcontrollers and Interfacing',
        chapters: [
          {
            id: 0,
            name: 'Introduction of Embedded Systems',
            topics: [
              'Basic definition and ingredients of embedded systems',
              'Requirements & challenges in designing of macro and micro embedded systems',
              'Different types of microcontrollers: Embedded microcontrollers, external memory microcontrollers',
              'Processor architectures: Harvard V/S Princeton, CISC V/S RISC'
            ],
          },
          {
            id: 1,
            name: 'Tools and Software for Embedded System Design',
            topics: [
              'Development tools/environments',
              'Assembly language programming style',
              'Interpreters',
              'High-level languages',
              'Intel hex format object files',
              'Debugging'
            ],
          },
          {
            id: 2,
            name: '8051 Microcontrollers',
            topics: [
              'Architecture',
              'Pin configuration',
              'SFR’s',
              'Memory',
              '8051 Addressing modes',
              'Introduction to 8051 assembly language programming: JUMP, LOOP and CALL instructions',
              'Arithmetic instructions: Unsigned addition and subtraction, unsigned multiplications and Division',
              'Signed number concepts and arithmetic operations',
              'Logic And Compare instructions',
              'I/O PORT',
              'Single bit instruction programming',
              'Single bit operations with CY',
              'Reading Input Pins Vs Port latch',
              'Programming 8051 timers',
              'Counter programming'
            ],
          },
          {
            id: 3,
            name: 'Timers, Serial Interface & Interrupts of 8051 Microcontroller',
            topics: [
              'Timer: Control Word, mode of timers, simple programming, generation of square wave',
              'Serial interface: Introduction, Control Word, mode of serial interface, simple programming',
              'Interrupts: Introduction, Control word'
            ],
          },
          {
            id: 4,
            name: 'Applications Based on 8051 Microcontrollers',
            topics: [
              'Interfacing of memory',
              'Intelligent LCD',
              'ADC, DAC',
              'LED display',
              'Stepper motor',
              'Ultra sonic distance measuring',
              'Smart Automation Systems',
              'Traffic Control system'
            ],
          },
          {
            id: 5,
            name: 'PIC18 Microcontroller',
            topics: [
              'Introduction to PIC18 microcontrollers',
              'Features of PIC family microcontrollers',
              'Architecture',
              'Pin diagram and pipelining concept',
              'Programming model',
              'Addressing modes',
              'CPU registers',
              'Introduction to data copy, arithmetic and branch instructions',
              'Logical and bit manipulation instructions and simple programming operations'
            ],
          },
        ],
      },
      {
        id: 2,
        subject: 'Probability and Random Processes',
        chapters: [
          {
            id: 0,
            name: 'Introduction',
            topics: [
              'The communication process',
              'The layered approach',
              'Block diagram of a general communication system',
              'A brief history of communications'
            ],
          },
          {
            id: 1,
            name: 'Representations of Signals',
            topics: [
              'Review of low pass and band pass filters',
              'The communication channel as a filter',
              'Low pass and band pass signals',
              'Hilbert transform',
              'Complex baseband representation of band pass signals',
              'Band pass systems',
              'Phase and group delay',
              'Sources of information'
            ],
          },
          {
            id: 2,
            name: 'Random Variables and Processes',
            topics: [
              'Probability theory',
              'Classical and axiomatic definition of probability',
              'Bayes theorem',
              'Conditional and joint probability',
              'Random variables',
              'PDF, CDF and their properties',
              'Conditional and joint PDFs for several random variables',
              'Standard distributions (Binomial, Poisson, Uniform, Gaussian, Rayleigh)',
              'Derivation of the Poisson distribution',
              'Statistical averages, moments, and characteristic functions',
              'Random processes',
              'Ergodicity and stationarity',
              'Mean, correlation and covariance functions',
              'PSD of a random process and its properties',
              'Transmission of a random process through an LTI system',
              'Gaussian process',
              'Central limit theorem'
            ],
          },
          {
            id: 3,
            name: 'Noise',
            topics: [
              'Noise, classification and characterization of noise',
              'Noise temperature, noise figure',
              'Narrowband noise and its representations',
              'Stochastic model of radio link channel',
              'The requirement of a minimum working SNR',
              'Link budgeting',
              'FRIIS equation and system design for given SNR requirements'
            ],
          },
          {
            id: 4,
            name: 'Elements of Information Theory',
            topics: [
              'Information',
              'Measure of Information',
              'Entropy',
              'Source encoding theorems',
              'Fixed length and variable length codes',
              'Coding efficiency',
              'Huffman coding',
              'Lossless and lossy coding',
              'Discrete memoryless channels',
              'Mutual information and channel capacity',
              'Channel coding theorem',
              'Capacity of a Gaussian channel and Shannon’s channel capacity theorem'
            ],
          },
        ],
      },
      {
        id: 3,
        subject: 'Computer Networks',
        chapters: [
          {
            id: 0,
            name: 'Introduction',
            topics: [
              'Computer Networks',
              'Network Hardware',
              'Network Software',
              'OSI & TCP/IP Reference models',
              'ARPANET',
              'Frame Relay',
              'Introduction to Internet',
              'ATM',
              'Network devices: Hub, Bridge, Switch (Layer 2 & Layer 3), Router & Gateway',
              'Addressing: Physical addresses, Logical addresses, Port Addresses'
            ],
            hours: 5,
          },
          {
            id: 1,
            name: 'Physical Layer',
            topics: [
              'Data Communication concepts',
              'Wired and Wireless transmission media',
              'Transmission Impairments and Performance',
              'Parallel and Serial Transmission',
              'Switching',
              'Circuit Switching',
              'Packet Switching',
              'Virtual Circuit Switching'
            ],
            hours: 5,
          },
          {
            id: 2,
            name: 'Data Link Layer',
            topics: [
              'Data link layer Design Issues',
              'Framing',
              'Error Detection and Correction',
              'Flow Control',
              'Sliding Window Protocols',
              'HDLC',
              'SLIP',
              'PPP'
            ],
            hours: 6,
          },
          {
            id: 3,
            name: 'Medium Access Control Sublayer',
            topics: [
              'Channel Allocation',
              'Description and Analysis of ALOHA',
              'Slotted ALOHA',
              'CSMA',
              'CSMA/CD',
              'IEEE LAN Standards: Ethernet (802.3), Gigabit Ethernet',
              'Wireless LAN (802.11)',
              'Broadband Wireless (802.16)',
              'Bluetooth'
            ],
            hours: 6,
          },
          {
            id: 4,
            name: 'Network Layer',
            topics: [
              'Network layer Design Issues',
              'IPv4 and IPv6 Structure and addresses',
              'Routing algorithms– Shortest path, Flooding, Distance Vector Routing and Link State Routing',
              'General principles of Congestion Control',
              'Congestion Control in Datagram and Virtual Circuit Subnets',
              'Brief idea of Quality of Service',
              'Internetworking',
              'IP protocol',
              'IP Addresses',
              'Internet Control Protocols',
              'Subnetting and Supernetting',
              'ARP',
              'NAT',
              'DHCP'
            ],
            hours: 12,
          },
          {
            id: 5,
            name: 'Transport Layer',
            topics: [
              'The Transport Service',
              'Elements of Transport Protocols',
              'TCP & UDP Protocols'
            ],
            hours: 5,
          },
          {
            id: 6,
            name: 'Application Layer',
            topics: [
              'Domain Name System',
              'SMTP',
              'FTP',
              'HTTP',
              'WWW',
              'SNMP',
              'Multimedia',
              'Cryptography'
            ],
            hours: null,
          },
        ],
      },
      {
        id: 4,
        subject: 'Analog Electronic Circuits',
        chapters: [
          {
            id: 0,
            name: 'Multistage or Cascaded Amplifiers',
            topics: [
              'Classification of Multi-stage Amplifier',
              'Types of coupling',
              'Effect of cascading on voltage gain, Current gain, Phase, Input and output impedances and bandwidth',
              'Analog of cascaded or multistage amplifiers',
              'Miller Theorem',
              'Darlington pair',
              'Bootstrap Circuits',
              'Transistor at high frequency and its hybrid pi CE model'
            ],
            hours: 6,
          },
          {
            id: 1,
            name: 'Feedback Amplifiers',
            topics: [
              'Concept of feedback',
              'Positive and negative feedback',
              'Voltage and current feedback',
              'Series and shunt feedback',
              'Effect of feedback on performance characteristics of an amplifier'
            ],
            hours: 6,
          },
          {
            id: 2,
            name: 'Differential Amplifiers',
            topics: [
              'Basic of Differential Amplifier',
              'Transistorized differential Amplifier',
              'Configurations of Differential Amplifier',
              'Analysis of Dual Input Balanced Output Differential Amplifier',
              'Constant Current Bias',
              'Current Mirror Circuit'
            ],
            hours: 6,
          },
          {
            id: 3,
            name: 'Operational Amplifier',
            topics: [
              'Block diagram of a typical Op-Amp',
              'Schematic symbol',
              'Characteristics and performance parameters of an ideal Op-Amp',
              'Open loop configurations: Differential, Inverting & Non-Inverting'
            ],
            hours: 4,
          },
          {
            id: 4,
            name: 'Practical Op-Amp',
            topics: [
              'Offset voltage analysis and compensation',
              'Input bias and offset current analysis and compensation',
              'Change in Input offset voltage and Input offset current with time, Temperature and supply voltage',
              'Common mode configuration and Common mode rejection Ratio',
              'Frequency response',
              'Slew rate'
            ],
            hours: 4,
          },
          {
            id: 5,
            name: 'Op-amp Applications',
            topics: [
              'DC and AC amplifiers',
              'Peaking amplifiers',
              'Summing, Scaling and Averaging amplifiers',
              'Differential amplifier',
              'Instrumentation amplifiers',
              'V to I and I to V converters',
              'Differentiator and integrator',
              'A to D and D to A converters',
              'Log and antilog amplifiers',
              'Sample and hold circuits'
            ],
            hours: 7,
          },
          {
            id: 6,
            name: 'Active Filter, Oscillators',
            topics: [
              'Active filters',
              'Essentials of Oscillator',
              'Types of Oscillator',
              'Sinusoidal Oscillator',
              'Schmitt Trigger Circuits'
            ],
            hours: 6,
          },
          {
            id: 7,
            name: 'Non-Linear Wave Shaping',
            topics: [
              'Clipping circuits (diode & transistor)',
              'Diode comparators',
              'Transistor differential comparator',
              'Operational amplifier comparator',
              'Clamping circuits',
              'Practical clamping circuit',
              'Clamping circuit'
            ],
            hours: null, // You didn't provide the hours for this section
          },
        ],
      },
      {
        id: 5,
        subject: 'Electromagnetic Theory',
        chapters: [
          {
            id: 0,
            name: 'Electrostatics & Steady Magnetic Field',
            topics: [
              'Introduction',
              "Gauss’s law",
              'Divergence theorems',
              "Stoke’s Theorem",
              "Poisson’s equation and Laplace’s equation",
              'Electrostatics energy',
              'The Electrostatics uniqueness theorem',
              'Theories of magnetic field',
              "Faraday’s law",
              "Ampere’s law",
              'Magnetic vector potential',
              'Analogies between Electric and magnetic fields'
            ],
            hours: 7,
          },
          {
            id: 1,
            name: 'Maxwell’s Equations',
            topics: [
              'Derivation of Maxwell’s equations in their integral and differential forms',
              'Maxwell’s equations in free space and in harmonically varying fields',
              'Physical Interpretation and Boundary Conditions'
            ],
            hours: 4,
          },
          {
            id: 2,
            name: 'Plane Waves in Dielectric and Conducting Media',
            topics: [
              'Uniform plane wave: properties, relation between E and H',
              'Conductors and Dielectrics: Wave equations, wave propagation',
              'Intrinsic impedance',
              'Skin effect',
              'Poynting Theorem and Electromagnetic vector, application to energy radiation',
              'Velocities of propagation',
              'Electromagnetic wave polarization',
              'Reflection and transmission of the wave at a boundary (Perfect conductor, perfect dielectric, perfect insulator)',
              'Poynting Theorem: Application to energy radiation'
            ],
            hours: 11,
          },
          {
            id: 3,
            name: 'Transmission Lines',
            topics: [
              'Basic principle',
              'Equivalent circuit',
              'Primary constants',
              'Transmission line parameters',
              'Transmission line equations',
              'Input impedance',
              'Relation between infinite and finite line',
              'Standing wave ratio and power'
            ],
            hours: 7,
          },
          {
            id: 4,
            name: 'Guided Waves',
            topics: [
              'Waves between parallel planes',
              'TEM waves',
              'Field analysis of T.M. & T.E. wave',
              'Characteristics of T.M. & T.E. Waves'
            ],
            hours: 6,
          },
          {
            id: 5,
            name: 'Wave Guides',
            topics: [
              'Rectangular and Circular waveguides: T.M. & T.E. Modes',
              'Impossibility of TEM wave in waveguides',
              'Solution of the Field equations (Rectangular and Circular)',
              'Wave impedance and characteristic impedances',
              'Attenuation factor and Q of waveguides',
              'Cavity Resonator'
            ],
            hours: null, // You didn't provide the hours for this section
          },
        ],
      }
      
      
       
      
]
export default EC4