import {render, screen} from '@testing-library/react';
import ImageHeader from '../common/ImageHeader';
import { Provider } from "react-redux";
import store from '../../redux/store';

describe("Image header component", ()=>{

    let imageHeader;
    beforeEach(()=>{
        
        render(
        <Provider store={store}>
            <ImageHeader/>
        </Provider>);
        imageHeader = screen.getByTitle('image-header')
    });

    test("image header component must be in the document", ()=>{                
        expect(imageHeader).toBeInTheDocument;
    }); 

});