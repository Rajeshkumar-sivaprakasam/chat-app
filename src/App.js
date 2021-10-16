import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
const App = () =>{
    return(
        <ChatEngine 
            height='100vh'
            projectID='a8085311-877e-44bf-8a03-faf1f944dcb2'
            userName='infothamizha'
            userSecret='123456'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;