import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import Footer from '../common/Footer';
import store from '../../redux/store';
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer component", ()=>{

    let footer;    
    let logo;
    beforeEach(()=>{
        render(
            <Provider store={store}>
                <Router>
                    <Footer/>
                </Router>                
            </Provider>            
        );        
        footer = screen.getByText(/tv/i);
        logo = screen.getByText(/kruger/i);
    });

    test("footer component must be in the document", ()=>{                
        expect(footer).toBeInTheDocument;
    });   

    test("logo must be in the document", ()=>{                
        expect(logo).toBeInTheDocument;
    });
});