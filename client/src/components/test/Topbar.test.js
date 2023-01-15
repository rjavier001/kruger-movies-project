import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import Topbar from '../common/Topbar';
import store from '../../redux/store';
import { BrowserRouter as Router } from "react-router-dom";

describe("Topbar component", ()=>{

    let header;    
    let button;
    beforeEach(()=>{
        render(
            <Provider store={store}>
                <Router>
                    <Topbar/>
                </Router>                
            </Provider>            
        );        
        header = screen.getByText(/movies/i);
        button = screen.getByText(/sign in/i)

    });

    test("top bar component must be in the document", ()=>{                
        expect(header).toBeInTheDocument;
    });   

    test("sign in button must be in the document", ()=>{                
        expect(button).toBeInTheDocument;
    });
});