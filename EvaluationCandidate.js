import React from 'react'
import { Paper, SelectField, TextField, Chip, Avatar } from 'react-md'
import './evaluation.scss'
const Data = {
  candidate: 'Muhammed Ahmed',
  position: 'Electrical Enginner',
  interviewedOn: '10:45 am 25/12/2015',
  thead: ['evaluationKPI', 'interviewersComment', 'inputScore'],
  tBody: [
    'Leadership Skills/ Management ComptenciesDemonstrated abilities and accomplishments as a leader. Ability to build trust, provide feedback and develop skills of direct reports',
    'Add Comment',
    '0.0'
  ]
}

const EvaluationCandidate = props => {
  return (
    <div>
      <div>
        <Evaluation Data={Data} />
      </div>
    </div>
  )
}
const TableRow = props => {
  // const { tBody } = props.Data

  return (
    <div>
      <div className="tab-head">
        <div className="cell">Evaluation KPI </div>
        <div className="cell">Interviewers Comment </div>
        <div className="cell">
          EXCELLENT (4) GOOD (3) FAIR (2) POOR (1) N/A (0){' '}
        </div>
      </div>
      <div className="tab-body">
        <div className="cell">
          <strong>
            {' '}
            Leadership Skills/ Management ComptenciesDemonstrated
          </strong>abilities and accomplishments as a leader. Ability to build
          trust, provide feedback and develop skills of direct reports,
        </div>
        <div className="cell">
          <p className="cell-color">interviewersComment</p>
        </div>
        <div className="cell">
          <TextField
            id="placeholder-only-multiline"
            placeholder="Type many letters"
            className="md-cell md-cell--bottom borderGroove"
            value="0.0"
          />
        </div>
      </div>
      <div className="tab-body">
        <div className="cell">
          <strong>Analyticsl / Decision Making Skills</strong> Ability to make
          timely, informed decisions that are the best interest of the
          organization,
        </div>
        <div className="cell">
          <p className="cell-color">interviewersComment</p>
        </div>
        <div className="cell">
          <TextField
            id="placeholder-only-multiline"
            placeholder="Type many letters"
            className="md-cell md-cell--bottom borderGroove"
            value="0.0"
          />
        </div>
      </div>
      <div className="tab-body">
        <div className="cell">
          <strong>Technical Competence</strong> Level of experience with
          position related programs
        </div>
        <div className="cell">
          <p className="cell-color">interviewersComment</p>
        </div>
        <div className="cell">
          <TextField
            id="placeholder-only-multiline"
            placeholder="Type many letters"
            className="md-cell md-cell--bottom borderGroove"
            value="0.0"
          />
        </div>
      </div>
      <div className="tab-body">
        <div className="cell">
          <strong>Technical Competence</strong> Level of experience with
          position related programs
        </div>
        <div className="cell">
          <p className="cell-color">interviewersComment</p>
        </div>
        <div className="cell">
          <TextField
            id="placeholder-only-multiline"
            placeholder="Type many letters"
            className="md-cell md-cell--bottom borderGroove"
            value="0.0"
          />
        </div>
      </div>
      <div className="tab-body">
        <div className="cell">
          <strong>Technical Competence</strong> Level of experience with
          position related programs
        </div>
        <div className="cell">
          <p className="cell-color">interviewersComment</p>
        </div>
        <div className="cell">
          <TextField
            id="placeholder-only-multiline"
            placeholder="Type many letters"
            className="md-cell md-cell--bottom borderInput"
            value="2.5"
          />
        </div>
      </div>
    </div>
  )
}
const Evaluation = props => {
  const { candidate, position, interviewedOn, condidatesNumber } = props.Data
  return (
    <div className="Container">
      <Paper>
        <div className="headerEvaluation">
          <div className="infoCondidate">
            <h3>
              Candidate :<span>{candidate}</span>
            </h3>
          </div>
          <div className="infoCandidate">
            <h3>Position : {position}</h3>
          </div>
          <div className="infoCandidate">
            <h3>Interviewed On : {interviewedOn}</h3>
          </div>
          <div className="infoCandidate">
            <h3>Candidates : {condidatesNumber}</h3>
          </div>
        </div>
        <hr />
        <div className="participantInterviewed">
          <div className="nameInterviwer">
            <h5> Interviewer (auto)</h5>
            <h4>Muhammed Hassan </h4>
          </div>
          <div className="groupofInterviewed">
            <h5> Participants Joined 4 of 5</h5>
            <Chip label="Mohamed Mustafa" avatar={<Avatar random>A</Avatar>} />
            <Chip label="Mary Johnson" avatar={<Avatar random>A</Avatar>} />
            <Chip label="Mohamed Mustafa" avatar={<Avatar random>A</Avatar>} />
            <Chip label="Mohamed Mustafa" avatar={<Avatar random>A</Avatar>} />
          </div>
          <div className="containerTable">
            <TableRow Data={Data} />
          </div>
        </div>
        <div className="footerEvaluation">
          <div className="EvalTemplate">
            <h5>Evaluation Template: </h5>
            <SelectField
              label="General"
              placeholder="Placeholder"
              className="md-cell"
            />
          </div>
          <div className="addKPI">
            <a href="#">+ Add Another KPI</a>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default EvaluationCandidate
