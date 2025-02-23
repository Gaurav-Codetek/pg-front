import React from 'react'

function DDMaj() {
    return (
        <>
            <div className="test">
                <div className="head">
                    Section A | Compulsory Questions
                </div>
                <br />
                <div className="ques">
                    <li>
                        <div className="optQue">
                            <li>
                                What is universal gate? Realize AND gate using universal gates.
                            </li>
                            <br />
                            <li>
                                Differentiate canonical and standard form of a Boolean expression.
                            </li>
                            <br />
                            <li>
                                What is a lockout condition in a counter and how it is avoided?
                            </li>
                            <br />
                            <li>
                                Write down specifications of D/A converters.
                            </li>
                            <br />
                            <li>
                                Define noise margin and noise immunity of a logic fammily.
                            </li>
                        </div>
                    </li>
                    <br />
                    <div className="head">
                        Section B | Any two
                    </div>
                    <br />
                    <div className="ques">
                        <li>
                            <div className="optQueChoice">
                                <li>
                                    Obtain the set of prime implicants for &sum; m(0,1,6,7,8,9,13,14,15) using Q-M method.
                                </li>
                                <br />
                                <li>
                                    What is race around condition in a flip-flop? how it can be avoided?
                                </li>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="optQueChoice">
                                <li>
                                    Implement a full adder with two 4x1 multiplexers.
                                </li>
                                <br />
                                <li>
                                    With suitable diagram explain working of a BCD adder.
                                </li>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="optQueChoice">
                                <li>
                                    Convert D to T and S-R to J-K flip-flops.
                                </li>
                                <br />
                                <li>
                                    List the PLA programming table for BCD to excess-3 code converter.
                                </li>
                            </div>
                        </li>
                        <br />
                        <div className="head">
                            Section C | Any two
                        </div>
                        <br />
                        <div className="ques">
                            <li>
                                <div className="optQueChoice">
                                    <li>
                                        Design a 3-bit synchronous counter to count sequence 0,1,4,6,7 and repeat using J-K flip-flop.
                                    </li>
                                    <br />
                                    <li>
                                        What is universal shift register? Draw and explain a 4-bit universal shift register controlled by 4x1 multiplexers.
                                    </li>
                                </div>
                            </li>
                            <br />
                            <li>
                                <div className="optQueChoice">
                                    <li>
                                        What are the drawbacks of weighted-resistor D/A converter? How these drawbacks can be overcome using modified weighted-resistor D/A converter?
                                    </li>
                                    <br />
                                    <li>
                                        Compare TTL, ECL and CMOS logic families based on their characteristics.
                                    </li>
                                </div>
                            </li>
                            <br />
                            <li>
                                <div className="optQueChoice">
                                    <li>
                                        Explain construction and working of totem pole TTL. Why it is advantageous over open collector TTL.
                                    </li>
                                    <br />
                                    <li>
                                        Differentiate a ring counter and twisted ring counter. Explain working of 4-bit Johnson's counter.
                                    </li>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DDMaj