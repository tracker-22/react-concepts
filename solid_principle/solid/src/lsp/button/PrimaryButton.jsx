import Button from './Button'
class PrimaryButton extends Button {
    render() {
      return (
        <button style={{ backgroundColor: "blue" }}>
          {this.props.label}
        </button>
      );
    }
  }

  export default PrimaryButton
  