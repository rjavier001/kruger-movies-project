import {render, screen} from '@testing-library/react';
import GlobalLoading from '../common/GlobalLoading';
import { Provider } from "react-redux";
import store from '../../redux/store';

describe("Loading component", ()=>{

    let loading;   
    let logo; 
    beforeEach(()=>{
        render(
        <Provider store={store}>
            <GlobalLoading/>
        </Provider>        
        );
        loading = screen.getByRole('progressbar')      
        logo = screen.getByText(/kruger/i)
    });

    test("loading component must be in the document", ()=>{                
        expect(loading).toBeInTheDocument;
    });

    test("logo component must be in the loading component", ()=>{                
        expect(logo).toBeInTheDocument;
    });
});