class Appointments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: this.props.appointments,
      input_title: 'Team standupp meeting',
      input_app_time: 'Tomorrow at 9am'
    }
  }

  handleUserInput(obj) {
    this.setState(obj)
  }

  render() {
    return (
      <div>
        <AppointmentForm
          input_title={this.state.input_title}
          input_app_time={this.state.input_app_time}
          onUserInput={this.handleUserInput}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}
