import React from 'react'

function DDMin() {
    return (
        <>
            <div className="test">
                <div className="head">
                    Statement Questions
                </div>
                <br />
                <div className="ques">
                    <li>
                        An 8x1 multiplexer has inputs A, B and C connected to the selection inputs S<sub>2</sub>, S<sub>1</sub>, S<sub>0</sub> respectively. The data input I<sub>0</sub> through I<sub>7</sub> are as follows I<sub>1</sub> = I<sub>2</sub> = I<sub>7</sub> = - ; I<sub>3</sub> = I<sub>5</sub> = 1; I<sub>0</sub> = I<sub>4</sub> = D and I<sub>6</sub> = D', determine the Boolean function that the multiplexer implements.
                    </li>
                    <br />
                    <li>
                        A combinational circuit is defined by the following three Boolean functions: F1 = x'y'z' + xz, F2 = xy'z' + x'y'z + xy design the circuit with a decoder and external gates.
                    </li>
                    <br />
                    <li>
                        What is race around condition? How it can be avoided using master slave flip-flop?
                    </li>
                    <br />
                    <li>
                        With the use of k-map, find the simplest form in sum of product of products of the function F=fg, where f and g are respectively, f = wxy' + y'z + w'yz' and g =(w + x + y' + z')(x' + y' + z)(w' + y + z').
                    </li>
                    <br />
                    <li>
                        Convert and design a D to J-K flip-flop and T to D flip-flop.
                    </li>
                </div>
            </div>
        </>
    );
}

export default DDMin