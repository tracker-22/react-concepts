import React  , {useEffect}from'react';
import {ModalHolder} from "./views/liskov-substitution-principle/ModalHolder";

function App() {
  
  const modalContent = { key:" value" }
  
  return (      
    <div>
        <ModalHolder contentToShow = {modalContent} />
    </div>
  );
}

export default App;
