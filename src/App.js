import React from 'react';
import update from 'react-addons-update';
import './App.css';
import {
    HashRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

class Year extends React.Component {
    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
    }

    updateCourses1(e) {
        this.props.updateCourses1(e, this.props.year);
    }

    updateCourses2(e) {
        this.props.updateCourses2(e, this.props.year);
    }

    updateGrades1(e) {
        this.props.updateGrades1(e, this.props.year);
    }

    updateGrades2(e) {
        this.props.updateGrades2(e, this.props.year);
    }

    clear() {
        this.props.clear(this.props.year);
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <h2>Term 1</h2>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="0" placeholder="Course Code" value={this.props.courses1[0]} onChange={this.updateCourses1.bind(this)} /></td> <td><input type="text" id="0" placeholder="Grade" value={this.props.grades1[0]} onChange={this.updateGrades1.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="1" placeholder="Course Code" value={this.props.courses1[1]} onChange={this.updateCourses1.bind(this)} /></td> <td><input type="text" id="1" placeholder="Grade" value={this.props.grades1[1]} onChange={this.updateGrades1.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="2" placeholder="Course Code" value={this.props.courses1[2]} onChange={this.updateCourses1.bind(this)} /></td> <td><input type="text" id="2" placeholder="Grade" value={this.props.grades1[2]} onChange={this.updateGrades1.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="3" placeholder="Course Code" value={this.props.courses1[3]} onChange={this.updateCourses1.bind(this)} /></td> <td><input type="text" id="3" placeholder="Grade" value={this.props.grades1[3]} onChange={this.updateGrades1.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="4" placeholder="Course Code" value={this.props.courses1[4]} onChange={this.updateCourses1.bind(this)} /></td> <td><input type="text" id="4" placeholder="Grade" value={this.props.grades1[4]} onChange={this.updateGrades1.bind(this)} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <h2>Term 2</h2>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="0" placeholder="Course Code" value={this.props.courses2[0]} onChange={this.updateCourses2.bind(this)} /></td> <td><input type="text" id="0" placeholder="Grade" value={this.props.grades2[0]} onChange={this.updateGrades2.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="1" placeholder="Course Code" value={this.props.courses2[1]} onChange={this.updateCourses2.bind(this)} /></td> <td><input type="text" id="1" placeholder="Grade" value={this.props.grades2[1]} onChange={this.updateGrades2.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="2" placeholder="Course Code" value={this.props.courses2[2]} onChange={this.updateCourses2.bind(this)} /></td> <td><input type="text" id="2" placeholder="Grade" value={this.props.grades2[2]} onChange={this.updateGrades2.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="3" placeholder="Course Code" value={this.props.courses2[3]} onChange={this.updateCourses2.bind(this)} /></td> <td><input type="text" id="3" placeholder="Grade" value={this.props.grades2[3]} onChange={this.updateGrades2.bind(this)} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" id="4" placeholder="Course Code" value={this.props.courses2[4]} onChange={this.updateCourses2.bind(this)} /></td> <td><input type="text" id="4" placeholder="Grade" value={this.props.grades2[4]} onChange={this.updateGrades2.bind(this)} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h3>GPA: {this.props.gpa1} </h3>
                        </td>
                        <td>
                            <h3>GPA: {this.props.gpa2} </h3>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button onClick={this.clear}>Clear</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Term GPAs</h1>

                <table>
                    <tr>
                        <tr>
                            <td>
                                <h2>
                                    Year 1
                                </h2>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <h2>
                                    Year 2
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>
                                    Term 1: {this.props.gpa1} <br/>
                                    Term 2: {this.props.gpa2}
                                </h3>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <h3>
                                    Term 1: {this.props.gpa3} <br/>
                                    Term 2: {this.props.gpa4}
                                </h3>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h2>
                                    Year 3
                                </h2>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <h2>
                                    Year 4
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>
                                    Term 1: {this.props.gpa5} <br/>
                                    Term 2: {this.props.gpa6}
                                </h3>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <h3>
                                    Term 1: {this.props.gpa7} <br/>
                                    Term 2: {this.props.gpa8}
                                </h3>
                            </td>
                        </tr>
                    </tr>
                </table>
                <h1>CGPA <br/> {this.props.cgpa}</h1>
            </div>
        );
    }
}

class  App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            courses1: ["", "", "", "", ""],
            courses2: ["", "", "", "", ""],
            courses3: ["", "", "", "", ""],
            courses4: ["", "", "", "", ""],
            courses5: ["", "", "", "", ""],
            courses6: ["", "", "", "", ""],
            courses7: ["", "", "", "", ""],
            courses8: ["", "", "", "", ""],
            grades1: ["", "", "", "", ""],
            grades2: ["", "", "", "", ""],
            grades3: ["", "", "", "", ""],
            grades4: ["", "", "", "", ""],
            grades5: ["", "", "", "", ""],
            grades6: ["", "", "", "", ""],
            grades7: ["", "", "", "", ""],
            grades8: ["", "", "", "", ""],
            gpa1: 0,
            gpa2: 0,
            gpa3: 0,
            gpa4: 0,
            gpa5: 0,
            gpa6: 0,
            gpa7: 0,
            gpa8: 0,
            cpga: 0
        };
    }

    updateCourses1 = (e, year) => {
        switch (year) {
            case 1:
                this.setState(update(this.state, {
                    courses1: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 2:
                this.setState(update(this.state, {
                    courses3: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 3:
                this.setState(update(this.state, {
                    courses5: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 4:
                this.setState(update(this.state, {
                    courses7: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
        }

        this.updateGPA(e, "1", year);
    }

    updateCourses2 = (e, year) => {
        switch (year) {
            case 1:
                this.setState(update(this.state, {
                    courses2: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 2:
                this.setState(update(this.state, {
                    courses4: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 3:
                this.setState(update(this.state, {
                    courses6: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 4:
                this.setState(update(this.state, {
                    courses8: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
        }

        this.updateGPA(e, "2", year);
    }

    updateGrades1 = (e, year) => {
        switch (year) {
            case 1:
                this.setState(update(this.state, {
                    grades1: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 2:
                this.setState(update(this.state, {
                    grades3: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 3:
                this.setState(update(this.state, {
                    grades5: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 4:
                this.setState(update(this.state, {
                    grades7: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
        }

        this.updateGPA(e, "1", year);
    }

    updateGrades2 = (e, year) => {
        switch (year) {
            case 1:
                this.setState(update(this.state, {
                    grades2: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 2:
                this.setState(update(this.state, {
                    grades4: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 3:
                this.setState(update(this.state, {
                    grades6: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
            case 4:
                this.setState(update(this.state, {
                    grades8: {
                        [e.target.id]: {
                            $set: e.target.value
                        }
                    }
                }));
                break;
        }

        this.updateGPA(e, "2", year);
    }

    async updateGPA(e, identifier, year) {
        var bam;
        var bam2;

        switch (year) {
            case 1:
                if (identifier == "1") {
                    bam = this.state.grades1;
                    bam2 = this.state.courses1;
                } else {
                    bam = this.state.grades2;
                    bam2 = this.state.courses2;
                }

                break;
            case 2:
                if (identifier == "1") {
                    bam = this.state.grades3;
                    bam2 = this.state.courses3;
                } else {
                    bam = this.state.grades4;
                    bam2 = this.state.courses4;
                }

                break;
            case 3:
                if (identifier == "1") {
                    bam = this.state.grades5;
                    bam2 = this.state.courses5;
                } else {
                    bam = this.state.grades6;
                    bam2 = this.state.courses6;
                }

                break;
            case 4:
                if (identifier == "1") {
                    bam = this.state.grades7;
                    bam2 = this.state.courses7;
                } else {
                    bam = this.state.grades8;
                    bam2 = this.state.courses8;
                }

                break;
        }

        var sumGrades = 0;
        var totalUnits = 0;

        for (var i = 0; i < bam2.length; i++) {
            var currentUnits = 0;
            
            if (e.target.id == i && e.target.value != "" && e.target.placeholder == "Course Code") {
                if (!Number.isNaN(parseInt(e.target.value.slice(-1)))) {
                    currentUnits = parseInt(e.target.value.slice(-1));
                    totalUnits += currentUnits;
                } else {
                    currentUnits = 0;
                }
            } else if (e.target.id == i && e.target.value == "" && e.target.placeholder == "Course Code") {
                currentUnits = 0;
            } else if (bam2[i] != "") {
                currentUnits = parseInt(bam2[i].slice(-1));
                totalUnits += currentUnits;
            }
            
            if (e.target.id == i && e.target.value != "" && e.target.placeholder == "Grade") {
                sumGrades += parseInt(e.target.value) * currentUnits;
            } else if (bam[i] != "") {
                sumGrades += parseInt(bam[i]) * currentUnits;
            }
        }

        var calcGPA = sumGrades / totalUnits;

        if (Number.isNaN(calcGPA)) {
            calcGPA = 0;
        }
        
        switch (year) {
            case 1:
                if (identifier == "1") {
                    await this.setState({gpa1: calcGPA});
                } else {
                    await this.setState({gpa2: calcGPA});
                }

                break;
            case 2:
                if (identifier == "1") {
                    await this.setState({gpa3: calcGPA});
                } else {
                    await this.setState({gpa4: calcGPA});
                }

                break;
            case 3:
                if (identifier == "1") {
                    await this.setState({gpa5: calcGPA});
                } else {
                    await this.setState({gpa6: calcGPA});
                }

                break;
            case 4:
                if (identifier == "1") {
                    await this.setState({gpa7: calcGPA});
                } else {
                    await this.setState({gpa8: calcGPA});
                }

                break;
        }

        this.updateCGPA();
    }

    updateCGPA() {
        var count = 0;
        var sum = 0;

        if (this.state.gpa1 != 0) {
            sum += this.state.gpa1;
            count++;
        }
        if (this.state.gpa2 != 0) {
            sum += this.state.gpa2;
            count++;
        }
        if (this.state.gpa3 != 0) {
            sum += this.state.gpa3;
            count++;
        }
        if (this.state.gpa4 != 0) {
            sum += this.state.gpa4;
            count++;
        }
        if (this.state.gpa5 != 0) {
            sum += this.state.gpa5;
            count++;
        }
        if (this.state.gpa6 != 0) {
            sum += this.state.gpa6;
            count++;
        }
        if (this.state.gpa7 != 0) {
            sum += this.state.gpa7;
            count++;
        }
        if (this.state.gpa8 != 0) {
            sum += this.state.gpa8;
            count++;
        }

        var result = sum / count;
        if (Number.isNaN(result)) {
            result = 0;
        }
        
        this.setState({cgpa: result});
    }
    
    clear = (year) => {
        switch (year) {
            case 1:
                this.setState({courses1: ["", "", "", "", ""], courses2: ["", "", "", "", ""], grades1: ["", "", "", "", ""], grades2: ["", "", "", "", ""], gpa1: 0, gpa2: 0});
                break;
            case 2:
                this.setState({courses3: ["", "", "", "", ""], courses4: ["", "", "", "", ""], grades3: ["", "", "", "", ""], grades4: ["", "", "", "", ""], gpa3: 0, gpa4: 0});
                break;
            case 3:
                this.setState({courses5: ["", "", "", "", ""], courses6: ["", "", "", "", ""], grades5: ["", "", "", "", ""], grades6: ["", "", "", "", ""], gpa5: 0, gpa6: 0});
                break;
                
            case 4:
                this.setState({courses7: ["", "", "", "", ""], courses8: ["", "", "", "", ""], grades7: ["", "", "", "", ""], grades8: ["", "", "", "", ""], gpa7: 0, gpa8: 0});
                break;
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <h1>Grade Me</h1>

                    <ul class="nav">
                        <li><NavLink exact to="/">Year 1</NavLink></li>
                        <li><NavLink exact to="/year2">Year 2</NavLink></li>
                        <li><NavLink exact to="/year3">Year 3</NavLink></li>
                        <li><NavLink exact to="/year4">Year 4</NavLink></li>
                        <li><NavLink exact to="/gpas">GPAs</NavLink></li>
                    </ul>

                    <Route exact path="/">
                        <Year year={1} updateCourses1 = {this.updateCourses1} updateCourses2={this.updateCourses2} updateGrades1={this.updateGrades1} updateGrades2={this.updateGrades2} clear={this.clear} courses1={this.state.courses1} courses2={this.state.courses2} grades1={this.state.grades1} grades2={this.state.grades2} gpa1={this.state.gpa1} gpa2={this.state.gpa2} />
                    </Route>
                    <Route exact path="/year2">
                        <Year year={2} updateCourses1 = {this.updateCourses1} updateCourses2={this.updateCourses2} updateGrades1={this.updateGrades1} updateGrades2={this.updateGrades2} clear={this.clear} courses1={this.state.courses3} courses2={this.state.courses4} grades1={this.state.grades3} grades2={this.state.grades4} gpa1={this.state.gpa3} gpa2={this.state.gpa4} />
                    </Route>
                    <Route exact path="/year3">
                        <Year year={3} updateCourses1 = {this.updateCourses1} updateCourses2={this.updateCourses2} updateGrades1={this.updateGrades1} updateGrades2={this.updateGrades2} clear={this.clear} courses1={this.state.courses5} courses2={this.state.courses6} grades1={this.state.grades5} grades2={this.state.grades6} gpa1={this.state.gpa5} gpa2={this.state.gpa6} />
                    </Route>
                    <Route exact path="/year4">
                        <Year year={4} updateCourses1 = {this.updateCourses1} updateCourses2={this.updateCourses2} updateGrades1={this.updateGrades1} updateGrades2={this.updateGrades2} clear={this.clear} courses1={this.state.courses7} courses2={this.state.courses8} grades1={this.state.grades7} grades2={this.state.grades8} gpa1={this.state.gpa7} gpa2={this.state.gpa8} />
                    </Route>
                    <Route exact path="/gpas">
                        <Results gpa1={this.state.gpa1} gpa2={this.state.gpa2} gpa3={this.state.gpa3} gpa4={this.state.gpa4} gpa5={this.state.gpa5} gpa6={this.state.gpa6} gpa7={this.state.gpa7} gpa8={this.state.gpa8} cgpa={this.state.cgpa}/>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
