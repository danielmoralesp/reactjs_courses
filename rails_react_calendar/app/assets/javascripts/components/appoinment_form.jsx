class AppointmentForm extends React.Component {
  handleChange(e) {
    var name = e.target.name
    obj = {}
    obj[name] = e.target.value
    this.props.onUserInput(obj)
  }

  render() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input
            name="title"
            placeholder="Appointment Title"
            value={this.props.input_title}
            onChange={this.handleChange}
          />
          <input
            name="appt_time"
            placeholder="Date and Time"
            value={this.props.input_app_time}
            onChange={this.handleChange}
          />
          <input type="submit" value="Make Appointment" />
        </form>
      </div>
    )
  }
}
