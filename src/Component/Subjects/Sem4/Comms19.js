import React from 'react';
import './paper.css';

function Comms19() {
    return (
        <div className="test">
            <div className="header">
                <div>Exam Code: 0928</div>
                <div>Sub Code: 7010</div>
                <div>B.E. (Electronics and Communication Engineering) Fourth Semester</div>
                <div>EC-403: Communication Theory</div>
                <div>Time allowed: 3 Hours</div>
                <div>Max. Marks: 50</div>
                <div className="note">NOTE: Attempt five questions in all, including Question No. 1 which is compulsory and selecting two questions from each Unit.</div>
            </div>
            <div className="section">
                <div className="section-header">I. Compulsory Questions</div>
                <ol className="question-list">
                    <li>Explain two main differences between analog & digital communication.</li>
                    <li>Explain why 'noise figure (F)' cannot be less than '1'.</li>
                    <li>Give any two applications where Hilbert's transform plays an important role in system designing.</li>
                    <li>Define coding efficiency. Write what are the various parameters on which it depends?</li>
                    <li>Write any four differences between the application area of fixed length and variable length codes?</li>
                </ol>
            </div>
            <div className="section">
                <div className="section-header">UNIT-I</div>
                <ol className="question-list">
                    <li>
                        <div>a) Sketch the block diagram of a general communication system and explain the working of each element of the communication system.</div>
                        <div>b) Explain stationary processes with the help of an example.</div>
                    </li>
                    <li>
                        <div>a) Find the output of a Hilbert transform filter if the input is x(t) = cos2πfot.</div>
                        <div>b) Compare the properties of various standard distributions (Binomial, Poisson, Uniform, Gaussian, and Rayleigh).</div>
                    </li>
                    <li>
                        <div>a) A random signal variable has an exponential PDF given by f(x) = ae^(bx) where a and b are constants. Find the relationship between a and b and the distribution function of x.</div>
                        <div>b) Explain in short the properties of low pass and band pass filters.</div>
                    </li>
                </ol>
            </div>
            <div className="section">
                <div className="section-header">UNIT-II</div>
                <ol className="question-list">
                    <li>
                        <div>a) Define noise. Explain the classification and characterization of noise in detail.</div>
                        <div>b) Define entropy. What is the significance of entropy in the data communication system?</div>
                    </li>
                    <li>
                        <div>a) State & explain Shannon's channel capacity theorem. Derive the mathematical expression for the capacity of a Gaussian channel. Also explain the trade-off involved in bandwidth & SNR.</div>
                        <div>b) A communication system has S/N= 20 and bandwidth =10 KHz. Find the allowable percentage reduction in signal power if bandwidth is increased to 20 KHz.</div>
                    </li>
                    <li>
                        <div>a) Write a comparison between lossless and lossy coding techniques.</div>
                        <div>b) Explain the following terms:</div>
                        <ul className="sub-list">
                            <li>Noise temperature</li>
                            <li>Noise figure</li>
                        </ul>
                        <div>c) Prove that H(X,Y) = H(X|Y) + H(Y).</div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Comms19;
