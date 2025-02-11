import Circle from "./Circle"
export default function About() {
    return (
        <div className="aboutDiv">
            <h1 className="aboutDiv__h1">
                Khachatryan Khachatur Full-Stack developer
            </h1>
            <Circle />
            <div className="aboutDiv__div">
                <p>
                    Hello World, my name is Khachatur and my family name is Khachatryan, i live in France.
                    I started learning programming from the end of 2021 and earned 8 certificates from CS50,
                    FreeCodeCamp and Polimi Open Knowledge and also built 5 personal projects (3 of which are Full Stack) along the way.
                    I am proficient in the following technologies: Python, Javascript, Typescript, HTML, CSS, Sass, React, Redux, Django, SQL.
                    I currently learn React Native with which there is a project posted on this website. I also have experience with: C,
                    Scikit-learn, TensorFlow, Scratch, Flask, basics of AWS, Bootstrap, jQuery and D3.js (currently not working with them professionally).
                    In this website you can find my projects and certifications as demonstration of my acquired skills.
                </p>
            </div>
        </div>
    )
}