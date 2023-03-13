import {React} from 'react'
import Button from './Button';
import PrimaryButton from './PrimaryButton';
class ButtonContainer extends React.Component {
    render() {
      return (
        <div>
          <Button label="Normal Button" />
          <PrimaryButton label="Primary Button" />
        </div>
      );
    }
  }
export default ButtonContainer
  