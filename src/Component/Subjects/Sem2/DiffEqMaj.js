import React from 'react'

function DiffEqMaj() {
    return (
        <>
            <div className="test">
                <div className="head">
                    Section A | Compulsory Questions
                </div>
                <br />
                <div className="ques">
                    <li>
                        <div className="optQueChoice">
                            <li>
                                Define Ordinary Differential Equation (ODE) and Solve: <br /> y' = 1/x
                            </li>
                            <br />
                            <li>
                                Define Initial value problem (IVP) and solve: y' = h(x), y(0) = 1, where h is the Heaviside step function.
                            </li>
                            <br />
                            <li>
                                Define inhomogeneous n<sup>th</sup> order linear ordinary differential equation. Give an example of inhomofeneous 2<sup>nd</sup> order linear ordinary differential.
                            </li>
                            <br />
                            <li>
                                Describe Neumann boundary conditions for partial differential equation.
                            </li>
                            <br />
                            <li>
                                State Convolution Theorem on Laplace Transforms.
                            </li>
                            <br />
                        </div>
                    </li>
                    <br />
                    <div className="head">
                        Section B | Any two
                    </div>
                    <br />
                    <div className="ques">
                        <li>
                            <div className="optQue">
                                <li>
                                    Solve the ODE : <br /> x<sup>2</sup>y'' + 0.6xy' + 16.04y = 0
                                </li>
                                <br />
                                <li>
                                    Solve the nonhomogeneous ODE: <br /> y'' + y = csc x
                                </li>
                                <br />
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="optQue">
                                <li>
                                    Solve using Power series method:<br />
                                    (1-x<sup>2</sup>) [d<sup>2</sup>y/dx<sup>2</sup>] - x[dy/dx] + 4y = 0
                                </li>
                                <br />
                                <li>
                                    Determine f such that: <br /> f(t) = 2t<sup>2</sup> + &#x222b; f(t-T)e<sup>-T</sup>dT ,  where T ranges from 0 to t.
                                </li>
                                <br />
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="optQue">
                                <li>
                                    Solve ty'' + (1-t)y' + 2y = 0
                                </li>
                                <br />
                                <li>
                                    Find f(t) if L(f) equals:
                                    <div className="options">
                                        <li>cot<sup>-1</sup>(s/w)</li>
                                        <li>[se<sup> - 3s</sup>]/[s<sup>2</sup> + 4]</li>
                                    </div>
                                </li>
                                <br />
                                <li>
                                    Solve y(t) - &#x222b; (1+T)y(t-T)dT = 1- sinh t, where T ranges from 0 to t
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
                                <div className="optQue">
                                    <li>
                                        Find the Fourier series of the function f(x) = x<sup>2</sup>, where x ranges from -&prod; to &prod;, which is assumed to have the period 2&prod; and hence prove or disprove that <br /> 1 + 1/2<sup>4</sup> + 1/3<sup>4</sup> + 1/4<sup>4</sup> + ... = (&prod;<sup>4</sup>/90)
                                    </li>
                                    <br />
                                    <li>
                                        Calculate the minimum square error for the trigonometric polynomial of degree 2 for <br /> f(x) = x, where x ranges from -&prod; to &prod;
                                    </li>
                                </div>
                            </li>
                            <br />
                            <li>
                                <div className="optQueChoice">
                                    <li>
                                        Find the equation of the integral surface of the PDE <br /> 2y(z-3)p + (2x - z)q = y(2x - 3) <br /> which passes through the circle z = 0, x<sup>2</sup> + y<sup>2</sup> = 2x.
                                    </li>
                                    <br />
                                    <li>
                                        Find the general solution of the equation<br /> 2x(y + z<sup>2</sup>)p + y(2y + z<sup>2</sup>)q = z<sup>3</sup><br /> and deduce that yz(z<sup>2</sup> + yz - 2y) = x<sup>2</sup> is a solution.
                                    </li>
                                </div>
                            </li>
                            <br />
                            <li>
                                Find the solution of one dimensional heat equation<br /><br/> del(u)/del(t) = c<sup>2</sup>*[del<sup>2</sup>u/del(x<sup>2</sup>)]<br/><br /> for the unknown temperature u(x,t) of the laterally insulated rod, having boundary conditions<br /><br/> (a) u(0,t) = 0, (b) u(L,t) = 0 for all t and initial condition <br /><br/> u(x,0) = f(x), x=[0,L]<br /><br/> Hence find the temperature of laterally insulated bar of length &Pi;, whose sides are kept at temperature zero, assuming that the initial temperature is <br /><br/> f(x) = x if x=(0,&Pi;) <br /> f(x) = (&Pi; - x) if x=(&Pi;/2,&Pi;)
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DiffEqMaj