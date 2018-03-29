import React, { Component } from "react"

import { Paper } from "react-md"

import "./SummerTable.scss"

export default class SummerTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        row1: [
          {
            label: "Project Holder",
            id: "projectHolder",
            value: "op",
            unit: "",
          },
          {
            label: "Main Contractor",
            id: "mainContractor",
            value: "p",
            unit: "",
          },
          {
            label: "Contract Value ",
            id: "contractValue",
            value: "z",
            unit: "$ USD",
          },
          {
            label: "Business Plan Target",
            id: "businessPlanTarget",
            value: "*",
            unit: "ON-STREAM DATE",
          },
          {
            label: "Latest Forecast",
            id: "latestForecast",
            value: "*",
            unit: "ON-STREAM DATE",
          },
        ],
        row2: [
          { label: "Key Highlights", id: "keyHighlights", value: "", unit: "" },
          { label: "Look Ahead", id: "lookAhead", value: "", unit: "" },
          {
            label: "subTable",
            id: "listObject",
            value: {
              row1: [
                {
                  label: "Year Budget",
                  id: "yearBudget",
                  value: "jobran",
                  unit: "$USD",
                },
                {
                  label: "YTD Plan",
                  id: "ytdPlan",
                  value: "",
                  unit: "$USD",
                },
                {
                  label: "YTD  Actual",
                  id: "ytdActual",
                  value: "",
                  unit: "$USD",
                },
                {
                  label: "YTD VOWD",
                  id: "ytdVowd",
                  value: "*",
                  unit: "$USD",
                },
                {
                  label: "Year LE",
                  id: "yearLe",
                  value: "*",
                  unit: "$USD",
                },
                {
                  label: "Project LE",
                  id: "projectLe",
                  value: "*",
                  unit: "$USD",
                },
              ],
              name: "Project  Budget Phasing :",
              row2: [
                { label: "Previous", id: "previous", value: "1", unit: "$USD" },
                { label: "2017", id: "2017", value: "2017", unit: "$USD" },
                { label: "2018", id: "2018", value: "2018", unit: "$USD" },
                { label: "2019", id: "2019", value: "2019", unit: "$USD" },
                { label: "2020", id: "2020", value: "2020+", unit: "$USD" },
                { label: "Total", id: "total", value: "*", unit: "$USD" },
              ],
              comment: "jobrannnnnnnnn:",
            },
          },
        ],
      },
    }
  }
  liveData() {
    const data = {
      businessPlanTarget: "kaka Aug-",
      contractValue: 20,
      keyHighlights: "yesyy",
      latestForecast: "Nov-",
      lookAhead: "look yesy",
      mainContractor: "main test",
      projectHolder: "test proj",
      projectLe: 9,
      yearBudget: 23,
      yearLe: 8,
      ytdActual: 12,
      ytdPlan: 10,
      ytdVowd: 3,
      projectBudgetPhasing: {
        previous: 40000,
        total: 144444444,
        2017: 2,
        2018: 8,
        2019: 33,
        2020: 1,
      },
      comment: "2222222222",
    }

    for (let key in data) {
      if (key === "projectBudgetPhasing") {
        const dataItem = data[key]
        for (let subkey in dataItem) {
          this.updateObjectFromServer(subkey, dataItem[subkey])
        }
      } else {
        this.updateObjectFromServer(key, data[key])
      }
    }
  }
  updateObjectFromServer(key, value) {
    const { data } = this.state
    const newData = data
    for (let elem in newData) {
      const found = newData[elem].find(d => d.id === key)
      if (found) {
        found.value = value
      } else {
        const foundSubTable = newData[elem].find(d => d.id === "listObject")
        if (foundSubTable) {
          const dynamiqueData = foundSubTable.value
          for (let subkey in dynamiqueData) {
            if (subkey === "comment") {
              dynamiqueData.comment = value
            } else if (subkey === "name") {
              dynamiqueData.name = dynamiqueData[subkey]
            } else {
              const found = dynamiqueData[subkey].find(d => d.id === key)
              if (found) {
                found.value = value
              }
            }
          }
        }
      }
    }
  }
  renderHeaderMap() {
    const { data } = this.state
    let blockDiv = []
    for (let key in data) {
      blockDiv = blockDiv.concat(this.renderHeader(data[key], key))
    }
    return blockDiv
  }

  renderHeader(data, j) {
    let listOfDiv = []
    const rows = data.map((item, i) => {
      if (item.id === "listObject") {
        const dynamiqueData = item.value
        let souData = null
        let addDiv = []
        for (let key in dynamiqueData) {
          if (key === "name") {
            souData = (
              <div key={i} className="subTableCol projectBudget  rTableHead">
                {" "}
                {dynamiqueData[key]}
              </div>
            )
          } else if (key === "comment") {
            souData = (
              <div key={i} className="subTableCol comments">
                <div className="rTableHead">comments: </div>
                <div className="rTableCell">{dynamiqueData[key]} </div>
              </div>
            )
          } else {
            souData = dynamiqueData[key].map((item, k) => {
              return (
                <div key={k} className="subTableCol">
                  <div className="rTableHead">{item.label} </div>
                  <div className="rTableHead unit">{item.unit} </div>
                  <div className="rTableCell">{item.value} </div>
                </div>
              )
            })
          }
          souData = (
            <div key={j + key} className="subTableRow">
              {" "}
              {souData}
            </div>
          )
          addDiv.push(souData)
        }
        souData = (
          <div key={i} className="containerTableRow rTableCol">
            {" "}
            {addDiv}
          </div>
        )
        listOfDiv.push(souData)
        return listOfDiv
      } else {
        return (
          <div key={i} className="rTableCol">
            <div className="rTableHead">{item.label} </div>
            <div className="rTableHead unit">{item.unit} </div>
            <div className="rTableCell">{item.value} </div>
          </div>
        )
      }
    })
    return (
      <div key={j} className="rTableRow">
        {" "}
        {rows}
      </div>
    )
  }
  render() {
    this.liveData()
    return (
      <Paper className="paper_container">
        <div className="rTable">{this.renderHeaderMap()}</div>
      </Paper>
    )
  }
}

